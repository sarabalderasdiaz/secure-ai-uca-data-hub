import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const sources = read('contenido/fuentes_originales.json');
const mapping = read('contenido/mapa_diapositivas.json');
const errors = [];
for (const source of sources) {
  const file = path.join(root, source.archivo);
  if (!fs.existsSync(file)) { errors.push(`No existe ${source.archivo}`); continue; }
  const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (hash !== source.sha256) errors.push(`El PDF ${source.archivo} ha cambiado: revisa fuente, huella y mapa.`);
  const slides = mapping.filter(m => m.parte === source.parte);
  const numbers = new Set(slides.map(m => m.diapositiva));
  if (slides.length !== source.paginas || numbers.size !== source.paginas ||
      slides.some(m => m.diapositiva < 1 || m.diapositiva > source.paginas || m.pagina_pdf !== m.diapositiva)) {
    errors.push(`Correspondencia incompleta o duplicada en la parte ${source.parte}.`);
  }
}
for (const row of mapping) {
  const doc = path.join(root, row.archivo_markdown);
  if (!fs.existsSync(doc)) { errors.push(`Destino inexistente: ${row.archivo_markdown}`); continue; }
  const raw = fs.readFileSync(doc, 'utf8');
  const value = raw.match(/^slug:\s*(.+)$/m)?.[1];
  let slug = value;
  try { slug = JSON.parse(value); } catch {}
  if (slug !== row.ruta_web) errors.push(`Ruta desactualizada en parte ${row.parte}, diapositiva ${row.diapositiva}.`);
}
const csv = fs.readFileSync(path.join(root, 'static/descargas/mapa_diapositivas.csv'), 'utf8').replace(/^\uFEFF/, '').trim().split(/\r?\n/);
function cell(value) {
  const s = String(value ?? '');
  return /[;"\r\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
}
const expected = [Object.keys(mapping[0]).map(cell).join(';'), ...mapping.map(r => Object.values(r).map(cell).join(';'))];
if (csv.join('\n') !== expected.join('\n')) errors.push('El CSV y el mapa JSON no coinciden.');
if (errors.length) {
  for (const error of errors) console.error(error);
  process.exit(1);
}
console.log(`Fuentes intactas: ${sources.length} PDF. Correspondencia verificada: ${mapping.length} diapositivas.`);
