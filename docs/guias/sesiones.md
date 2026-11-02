---
title: "Añadir y reorganizar sesiones"
slug: "/guias/sesiones/"
---

## Reparto inicial

La sesión 1 ya fue impartida por Juanma y enlaza su material. Las sesiones 2–8 son un **reparto inicial del contenido**, ajustable al tiempo de clase. No se ha supuesto una duración concreta.

| Sesión | Contenido |
|---|---|
| 2 | Fundamentos, requisitos, CWE, CVE y CVSS. |
| 3 | XSS, SQL, autorización y rutas. |
| 4 | Concurrencia, errores, recursos, estado y configuración. |
| 5 | SAST, DAST, análisis estático y revisión. |
| 6 | Métricas, categorías y registros. |
| 7 | Tipos de XSS, configuración, privacidad y secretos. |
| 8 | Sistemas críticos, disponibilidad, fiabilidad, safety y security. |

## Añadir la sesión 9, paso a paso

1. En tu repositorio, crea la carpeta `docs/sesiones/sesion-09/`. En el editor web de GitHub puedes crear un archivo escribiendo su ruta completa.
2. Dentro, crea `_category_.json` con este contenido:

```json
{
  "label": "Sesión 9 · Nuevos contenidos",
  "position": 9,
  "collapsed": true,
  "link": {
    "type": "generated-index",
    "title": "Sesión 9 · Nuevos contenidos",
    "slug": "/sesiones/sesion-9/",
    "description": "Objetivos y contenidos de esta sesión."
  }
}
```

3. En la misma carpeta crea `primer-tema.md`:

```markdown
---
title: "Primer tema de la sesión 9"
slug: /sesiones/sesion-9/primer-tema/
sidebar_position: 1
---

## Qué vamos a aprender

Escribe aquí la explicación y el ejemplo.
```

4. Guarda y envía **ambos archivos juntos**. La sesión necesita al menos un tema para aparecer en la navegación.
5. El menú y la página de entrada de esa sesión se generan automáticamente. La búsqueda también incorpora sus contenidos al construir.
6. Añade su tarjeta a `docs/inicio.md` y su fila a `docs/sesiones/indice.md` para que la portada y la tabla general la anuncien. La guía muestra abajo el formato del enlace.

```jsx
<Link to="/sesiones/sesion-9/">
  <b>Sesión 9 · Nuevos contenidos</b>
  Una frase que explique qué se trabajará.
</Link>
```

La tarjeta se añade dentro del bloque `hub-route`, junto a las demás. El archivo de portada ya importa `Link`. En la tabla general puedes usar `[9 · Nuevos contenidos](/sesiones/sesion-9/)`.

## Cambiar nombres y orden

1. Abre `_category_.json` de la sesión.
2. Cambia `label` para el menú y `link.title` para el título de su página de entrada.
3. Cambia `position` para moverla en el menú; utiliza posiciones distintas.
4. Mantén `link.slug` si quieres conservar la dirección que ya habías compartido. El texto visible puede cambiar sin modificar la URL.
5. Actualiza también el nombre en la tarjeta de portada y en la tabla general. La numeración de los PDF sigue siendo la original.

## Mover un tema de una sesión a otra

1. Mueve su archivo `.md` a la carpeta de destino.
2. Ajusta `sidebar_position` para colocarlo donde corresponda y conserva `slug`.
3. Revisa los enlaces relativos que apuntaban al archivo movido. Los enlaces web basados en su `slug` seguirán funcionando.
4. Actualiza las descripciones de las sesiones y la tabla general si cambian sus objetivos o rangos de diapositivas.
5. Al validar o construir, el script actualiza la ubicación y la sesión del tema en el mapa descargable. Un tema nuevo sin diapositivas de origen no necesita una fila ficticia en ese mapa.

La autoría sigue en los créditos y en los PDF. Añadir una sesión no exige crear un apartado por docente.
