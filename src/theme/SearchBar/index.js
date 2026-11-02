import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [entries, setEntries] = useState(null);
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const holder = useRef(null);
  const input = useRef(null);
  const base = useBaseUrl('/');
  useEffect(() => {
    if (!open || entries || failed) return;
    const abort = new AbortController();
    fetch(`${base}search-index.json`, {signal: abort.signal})
      .then(r => { if (!r.ok) throw Error(); return r.json(); })
      .then(setEntries).catch(e => { if (e.name !== 'AbortError') setFailed(true); });
    return () => abort.abort();
  }, [open, entries, failed, base]);
  useEffect(() => {
    const outside = e => { if (!holder.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, []);
  const terms = norm(query.trim()).split(/\s+/).filter(Boolean);
  const results = terms.length < 1 ? [] : (entries || [])
    .map(e => ({...e, match: norm(e.title + ' ' + e.text), rank: terms.filter(t => norm(e.title).includes(t)).length}))
    .filter(e => terms.every(t => e.match.includes(t)))
    .sort((a,b) => b.rank - a.rank).slice(0, 10);
  return <div className="hub-search" ref={holder} onKeyDown={e => {
    if (e.key === 'Escape') { setOpen(false); input.current?.focus(); }
  }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
    <input ref={input} type="search" aria-label="Buscar en los apuntes" placeholder="Buscar…"
      aria-controls="hub-search-results" aria-expanded={open && terms.length > 0}
      value={query} onFocus={() => setOpen(true)} onChange={e => {setQuery(e.target.value); setOpen(true);}}
      onKeyDown={e => { if (e.key === 'ArrowDown') {e.preventDefault();holder.current?.querySelector('.hub-search-results a')?.focus();}}}/>
    {open && terms.length > 0 && <div id="hub-search-results" className="hub-search-results" aria-label="Resultados de búsqueda">
      <div role="status" className="sr-only">{results.length} resultados</div>
      {failed ? <p>No se ha podido cargar la búsqueda. Usa el menú de temas.</p> : !entries ? <p>Cargando índice…</p> : results.length === 0 ? <p>No hay coincidencias. Prueba con «CWE», «autorización» o «SQL».</p> : results.map(e =>
        <Link to={`${base}${e.url}`} key={e.url} onClick={() => {setOpen(false);setQuery('');}}>
          <strong>{e.title}</strong><small>{e.text.slice(0, 110)}…</small>
        </Link>
      )}
    </div>}
  </div>;
}
