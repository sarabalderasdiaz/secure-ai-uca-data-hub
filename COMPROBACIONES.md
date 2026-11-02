# Comprobaciones de la entrega

Edición por sesiones, 29/10/2026. Verificación sobre el paquete reorganizado.

## Fuentes y contenidos

- Dos PDF originales intactos: 52 y 51 páginas. Sus huellas SHA-256 coinciden con el manifiesto de fuentes.
- Las 103 páginas mantienen correspondencia en JSON y CSV, sin duplicados ni huecos.
- Los 20 temas docentes se distribuyen inicialmente entre las sesiones 2 y 8. La sesión 1 enlaza los apuntes de Juanma.
- Los bloques de código de los 20 temas coinciden con los de la edición anterior. Esta edición cambia la organización, no los ejemplos.
- Los temas conservan sus direcciones web anteriores mediante `slug`.
- La autoría se mantiene en los créditos y en los PDF. El reparto de sesiones es ajustable y no presupone una duración concreta.
- Guía PDF actualizada y revisada visualmente en sus 8 páginas.

## Construcción y enlaces

- `npm run validar`: correcto. Actualiza la relación entre temas, archivos y sesiones.
- `npm run build`: correcto con las dependencias de la misma base técnica instaladas localmente.
- Revisión de 1.435 enlaces y recursos locales en el HTML generado: ningún destino inexistente.
- Las siete páginas de entrada a las sesiones 2–8 y sus menús se generan a partir de las carpetas y de `_category_.json`.
- El buscador incorpora las páginas de las sesiones y sus temas.

## Revisión en navegador

- Portada y navegación por sesiones: correctas.
- Entrada desde la portada a la sesión 3 y desde ella al tema de inyección SQL: correcta.
- El tema de SQL conserva su enlace al PDF en la página 17 y aparece dentro de la sesión 3.
- Búsqueda de «sesión 3» y navegación al resultado: correctas.
- Revisión visual de la portada y de la página de la sesión 3 en escritorio. No se afirma una prueba en dispositivo móvil real.

## Alcance

No se ha publicado en una cuenta GitHub. La ejecución del flujo remoto y la publicación en Pages se realizarán cuando se suba el repositorio.

Los PDF originales no se han corregido. Las aclaraciones técnicas siguen en los apuntes y en `docs/fuentes.md`. Los fragmentos son ejemplos de análisis, no una aplicación completa ni resultados de un análisis SAST/DAST ejecutado sobre una aplicación real.

## Actualización de licencia y acceso, 02/11/2026

- Se incorpora `LICENSE.txt`, su descarga y una página web de condiciones de uso.
- Se enlaza la licencia desde el menú, el pie, el README, las fuentes y las descargas.
- Las guías Markdown distinguen acceso privado y publicación pública. La guía PDF anterior se conserva y se identifica como guía de publicación pública.
- El flujo de Pages solo prepara y publica la web si el repositorio es público; en repositorios privados conserva la comprobación y construcción sin publicar.
- Sintaxis de configuración y menú comprobada. Validador de los dos PDF y las 103 correspondencias: correcto.
- Se conservan los PDF y los temas de clase. No se ha ejecutado una nueva construcción completa de Docusaurus en esta actualización; las comprobaciones de construcción y navegador anteriores corresponden a la edición del 29/10/2026.
- No se han cambiado permisos ni se ha publicado en GitHub.
