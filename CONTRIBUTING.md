# Actualizar los materiales

1. Añade o edita archivos en la carpeta de la clase correspondiente: `docs/sesiones/sesion-XX/`.
2. Añade sus imágenes o documentos en `recursos/`, dentro de esa misma carpeta.
3. Incorpora los términos nuevos a `docs/glosario.md` cuando proceda.
4. El menú lateral y los índices se actualizan automáticamente al construir. No hay que editar sesiones anteriores ni `sidebars.js`.
5. Conserva los `slug` de los temas ya publicados y las atribuciones de sus autores y fuentes.
6. Ejecuta `npm run validar` y `npm run build`. Publica solo después de revisar el resultado.

El flujo comprueba cada subida a `main`, pero únicamente publica cuando se ejecuta manualmente con la casilla **Publicar la web en GitHub Pages después de comprobarla** marcada.

El README y la licencia conservan el texto facilitado por la responsable del repositorio. Sus cambios requieren una decisión explícita de esta. La copia web de la licencia se genera a partir de `LICENSE.txt`, sin ampliar sus permisos.
