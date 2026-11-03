import React from 'react';
import Link from '@docusaurus/Link';
import sesiones from '@site/src/data/sesiones.json';

export function ListaSesiones() {
  return <div className="hub-route">
    {sesiones.map(s => <Link key={s.numero} to={s.slug}>
      <b>{s.titulo}</b>
      <span className="hub-session-status">{s.numero === 1 ? 'Apuntes de Juan Manuel Dodero' :
        s.temas.length ? `${s.temas.length} ${s.temas.length === 1 ? 'contenido disponible' : 'contenidos disponibles'}` : 'Pendiente de contenidos'}</span>
    </Link>)}
  </div>;
}

export function TemasSesion({numero}) {
  const sesion = sesiones.find(s => s.numero === numero);
  if (!sesion?.temas.length) return <div className="hub-pending">
    <p><strong>Contenidos pendientes</strong></p>
    <p>Todavía no hay contenidos publicados para esta sesión.</p>
  </div>;
  return <section aria-label={`Contenidos de la sesión ${numero}`}>
    <h2>Contenidos de la sesión</h2>
    <ol className="hub-topic-list">{sesion.temas.map(t =>
      <li key={t.slug}><Link to={t.slug}>{t.label}</Link></li>)}</ol>
  </section>;
}
