# Actualizar los materiales

Conserva `LICENSE.txt` y las atribuciones. Para aportar material de terceros, comprueba que sus condiciones permiten el uso previsto y documenta su procedencia.

1. Edita el tema en `docs/sesiones/sesion-XX/`. Conserva el `slug` para mantener su URL.
2. Para añadir un tema usa un Markdown con título y posición; el menú se actualiza automáticamente.
3. Para añadir una sesión, crea su carpeta, `_category_.json` y al menos un tema. Actualiza la portada y la tabla general según `docs/guias/sesiones.md`.
4. Distingue hechos documentados, ejemplos ficticios y análisis docente; conserva las atribuciones.
5. Ejecuta `npm run validar` y `npm run build` y revisa la página. No presentes resultados de herramientas no ejecutadas.

Los PDF originales conservan sus huellas. Cambiar un PDF exige revisar su correspondencia; mover un tema entre sesiones actualiza su ubicación en el mapa al construir.
