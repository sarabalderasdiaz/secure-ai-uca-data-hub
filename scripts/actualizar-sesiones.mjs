import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sessionsRoot = path.join(root, 'docs/sesiones');
function field(text, key) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || '';
  const value = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();
  if (!value) return '';
  try {return JSON.parse(value);} catch {return value.replace(/^'|'$/g, '');}
}
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => {
    if (e.name.startsWith('.')) return [];
    const file = path.join(dir, e.name);
    return e.isDirectory() ? walk(file) : /\.mdx?$/.test(e.name) ? [file] : [];
  });
}
const sessions = fs.readdirSync(sessionsRoot, {withFileTypes:true})
  .filter(e => e.isDirectory() && /^sesion-\d+$/.test(e.name))
  .sort((a,b) => a.name.localeCompare(b.name, 'es', {numeric:true}))
  .map(entry => {
    const folder = path.join(sessionsRoot, entry.name);
    const number = Number(entry.name.slice(7));
    const index = fs.readFileSync(path.join(folder, 'index.md'), 'utf8');
    const category = JSON.parse(fs.readFileSync(path.join(folder, '_category_.json'), 'utf8'));
    const topics = walk(folder).filter(p => p !== path.join(folder, 'index.md'))
      .map(file => {
        const raw = fs.readFileSync(file, 'utf8');
        if (field(raw, 'draft') === true) return null;
        const slug = field(raw, 'slug');
        if (!slug || !slug.startsWith('/')) throw new Error(`Falta slug absoluto en ${file}`);
        return {title:field(raw,'title'), label:field(raw,'sidebar_label') || field(raw,'title'),
          slug, position:Number(field(raw,'sidebar_position')) || 999,
          file:path.relative(root,file).split(path.sep).join('/')};
      }).filter(Boolean).sort((a,b) => a.position-b.position || a.label.localeCompare(b.label,'es'));
    return {numero:number, titulo:category.label, slug:field(index,'slug'), temas:topics};
  });
fs.mkdirSync(path.join(root, 'src/data'), {recursive:true});
fs.writeFileSync(path.join(root, 'src/data/sesiones.json'), JSON.stringify(sessions,null,2)+'\n');
const license = fs.readFileSync(path.join(root,'LICENSE.txt'),'utf8');
fs.writeFileSync(path.join(root,'src/data/licencia.json'), JSON.stringify(license)+'\n');
fs.copyFileSync(path.join(root,'LICENSE.txt'), path.join(root,'static/descargas/LICENSE.txt'));
console.log(`Índices actualizados: ${sessions.length} sesiones. La licencia se copia sin reescribirla.`);
