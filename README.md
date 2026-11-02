# SECURE AI UCA Data Hub

Material docente de Desarrollo de aplicaciones seguras, organizado por **sesiones de clase**. Sara Balderas Díaz y Gabriel Guerrero Contreras mantienen la autoría de las dos presentaciones finales.

La **sesión 1 fue impartida por Juanma** y enlaza sus apuntes. Los 20 temas de este paquete se distribuyen inicialmente entre las **sesiones 2 y 8**. El reparto puede ajustarse a la duración de las clases.

## Sesiones

| Sesión | Contenido |
|---|---|
| 2 | Fundamentos y CWE/CVE/CVSS. |
| 3 | XSS, SQL, permisos y rutas. |
| 4 | Concurrencia, errores, recursos y configuración. |
| 5 | SAST/DAST, análisis estático y revisión. |
| 6 | Métricas y registros. |
| 7 | XSS y protección de datos. |
| 8 | Sistemas críticos. |

## Publicar y editar

Lee [GUIA_GITHUB_PASO_A_PASO.md](GUIA_GITHUB_PASO_A_PASO.md): distingue **repositorio privado con invitaciones** y **publicación de una web pública**. El proyecto se sube con su contenido en la raíz. El PDF conserva la guía de publicación pública; para acceso privado sigue la alternativa de la guía Markdown. La licencia no sustituye la configuración de acceso.

Cada sesión tiene una carpeta en `docs/sesiones/`; sus temas son Markdown. El menú y las páginas de entrada se generan automáticamente. Para añadir otra sesión, crea su carpeta, `_category_.json` y al menos un tema. La guía incluye el ejemplo completo de la sesión 9.

## Licencia de uso

Los materiales propios se ofrecen para **uso personal de estudio, sin fines comerciales**, conforme a [LICENSE.txt](LICENSE.txt). Se permite consultar y descargar los apuntes y practicar con los ejemplos. La redistribución, la publicación de copias o adaptaciones y otros usos requieren autorización, salvo los permisos legales, las licencias de terceros y las condiciones de GitHub que resulten aplicables.

La web muestra estas condiciones en su página **Licencia de uso**, accesible desde el menú y el pie de página. La licencia no convierte el repositorio ni la web en privados. Para una publicación pública, deja **Add a license → None** al crear el repositorio y sube el `LICENSE.txt` incluido; no lo sustituyas por otra plantilla.

## Comprobar localmente

Node.js 24 LTS. Las dependencias están fijadas en `package-lock.json`.

```bash
npm ci
npm run validar
npm run build
npm run serve
```

La validación y la construcción actualizan el mapa de ubicación de los temas y sesiones. El buscador se genera al construir. Para editar con recarga: `npm start`.

## Fuentes y organización

Los PDF originales de 52 y 51 páginas siguen en `static/descargas/`, sin modificar. El mapa descargable relaciona las 103 páginas con los temas web y las sesiones. Los enlaces anteriores de los 20 temas se mantienen mediante `slug`, aunque sus archivos estén ahora en carpetas de sesiones.

Se retiran las áreas individuales y el exportador por docente de la navegación y del paquete. La autoría se conserva en los créditos. Las preguntas desplegables son públicas y los fragmentos son ejemplos de análisis, no una aplicación completa.

Consulta [COMPROBACIONES.md](COMPROBACIONES.md) y [LICENCIAS_Y_AUTORIA.md](LICENCIAS_Y_AUTORIA.md).
