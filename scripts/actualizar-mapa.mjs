import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = path.join(root, 'docs');
const mappingPath = path.join(root, 'contenido/mapa_diapositivas.json');
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.mdx?$/.test(e.name) ? [p] : [];
  });
}
function field(raw, key) {
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || '';
  const value = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];
  if (!value) return null;
  try { return JSON.parse(value); } catch { return value.trim(); }
}
const docs = walk(docsRoot).map(file => {
  const raw = fs.readFileSync(file, 'utf8');
  const relative = path.relative(root, file).split(path.sep).join('/');
  const route = field(raw, 'slug');
  let session = '';
  const cat = path.join(path.dirname(file), '_category_.json');
  if (fs.existsSync(cat)) session = JSON.parse(fs.readFileSync(cat, 'utf8')).label;
  return {file: relative, title: field(raw, 'title'), route, session};
});
const byRoute = new Map();
for (const doc of docs) {
  if (!doc.route) continue;
  if (byRoute.has(doc.route)) throw new Error(`URL duplicada: ${doc.route}`);
  byRoute.set(doc.route, doc);
}
for (const row of mapping) {
  const doc = byRoute.get(row.ruta_web);
  if (!doc) throw new Error(`No existe el tema de ${row.ruta_web}; revisa el mapa de origen.`);
  row.archivo_markdown = doc.file;
  row.sesion = doc.session;
  if (row.tipo === 'contenido' || row.tipo === 'separador') row.tema_web = doc.title;
}
function cell(value) {
  const s = String(value ?? '');
  return /[;"\r\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
}
const keys = Object.keys(mapping[0]);
const csv = [keys.map(cell).join(';'), ...mapping.map(row => keys.map(k => cell(row[k])).join(';'))].join('\r\n') + '\r\n';
fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'static/descargas/mapa_diapositivas.csv'), '\uFEFF' + csv);
const topics = docs.map(doc => {
  const origin = mapping.filter(row => row.ruta_web === doc.route && ['contenido', 'separador'].includes(row.tipo));
  return {ruta: doc.file.replace(/^docs\//, '').replace(/\.mdx?$/, ''), titulo: doc.title,
    sesion: doc.session, parte: origin[0]?.parte || null,
    desde: origin.length ? Math.min(...origin.map(r => r.diapositiva)) : null,
    hasta: origin.length ? Math.max(...origin.map(r => r.diapositiva)) : null};
});
fs.writeFileSync(path.join(root, 'contenido/temas.json'), JSON.stringify(topics, null, 2) + '\n');
console.log('Mapa actualizado con las ubicaciones y sesiones de los temas.');
