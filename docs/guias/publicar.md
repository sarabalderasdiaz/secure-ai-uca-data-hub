---
title: "Publicar y ocultar la web"
slug: "/guias/publicar/"
---

## Ocultar la web que está publicada

1. En **Actions**, abre **Publicar SECURE AI UCA Data Hub** y selecciona **⋯ → Disable workflow**.
2. Si hay alguna ejecución en curso, ábrela y pulsa **Cancel workflow**. Deshabilitar el flujo no cancela las ejecuciones ya iniciadas.
3. En **Settings → Pages**, junto a la dirección de la web, pulsa **⋯ → Unpublish site**.

Esto retira la web de Pages; los archivos de un repositorio público siguen visibles en GitHub. No elimina el repositorio ni sus contenidos. Si la web nunca llegó a publicarse, basta con mantener el flujo deshabilitado.

## Sustituir la organización anterior una sola vez

1. Descarga una copia de tu repositorio actual con **Code → Download ZIP**, para conservar cualquier cambio hecho directamente en GitHub.
2. Descomprime el paquete nuevo y entra en `secure-ai-uca-data-hub`.
3. En GitHub, entra en **docs → sesiones**. Pulsa **⋯ → Delete directory**, revisa que la ruta sea solo `docs/sesiones` y confirma el cambio en `main`. Esta carpeta se sustituirá completa en el siguiente paso.
4. Vuelve a la raíz del repositorio y usa **Add file → Upload files**. Arrastra la carpeta **docs** del paquete nuevo y confirma. Así se incorpora la nueva distribución sin dejar los temas antiguos duplicados en las sesiones 3 a 8.
5. En una segunda subida desde la raíz, arrastra las carpetas **src**, **scripts**, **contenido**, **plantillas** y **static**. Añade también **CONTRIBUTING.md**, **COMPROBACIONES.md**, **ESTRUCTURA_Y_ACTUALIZACION.md**, **GUIA_GITHUB_PASO_A_PASO.md** y **GUIA_GITHUB_PASO_A_PASO.pdf**. Confirma el cambio.
6. Abre **.github → workflows → publicar.yml**, pulsa el lápiz y sustituye su contenido por el archivo del paquete nuevo. Confirma el cambio. Este paso incorpora la publicación manual con casilla de confirmación.
7. Conserva tu **README.md** y tu **LICENSE.txt**. El paquete incluye exactamente los textos que facilitaste; no hace falta sustituirlos si ya tienes esos textos en GitHub.
8. En **Actions**, selecciona el flujo y pulsa **Enable workflow**. Usa **Run workflow**, rama **main**, dejando **desmarcada** la casilla de publicación. Esta ejecución verifica y construye la web sin publicarla.

No basta con arrastrar la carpeta nueva encima de la anterior: GitHub añade y reemplaza archivos, pero no borra los archivos antiguos que ya no existen en el paquete. Por eso el paso 3 es necesario únicamente para esta reorganización.

GitHub admite hasta 100 archivos por subida en el navegador. Las dos tandas indicadas separan los documentos del resto del proyecto.

## Preparar cada nueva semana

1. Entra en `docs/sesiones/sesion-XX/`, correspondiente a la clase.
2. Añade o actualiza los archivos `.md` de esa sesión. Usa `plantillas/tema.md.example` como referencia y guarda el archivo con extensión `.md`.
3. Guarda sus imágenes y documentos en `recursos/`, dentro de la misma carpeta, y enlázalos desde el tema.
4. Si hay definiciones nuevas, amplía `docs/glosario.md`.
5. Confirma los cambios y comprueba la ejecución de Actions.

El menú lateral, la portada general y los índices de las sesiones se actualizan al construir. No hay que editar las sesiones anteriores ni `sidebars.js`. Los dos PDF ya existentes mantienen sus direcciones; los recursos nuevos pueden quedar dentro de cada sesión.

## Volver a publicar cuando esté revisado

1. Comprueba que **Settings → Pages → Source** sigue en **GitHub Actions**.
2. En **Actions → Publicar SECURE AI UCA Data Hub**, pulsa **Run workflow**.
3. Elige **main** y marca **Publicar la web en GitHub Pages después de comprobarla**.
4. Confirma con **Run workflow** y espera a que terminen correctamente **construir** y **publicar**.
5. Abre **Settings → Pages → Visit site**. Revisa las sesiones, la navegación, las descargas y la licencia antes de compartir el enlace.

Una subida normal comprueba el proyecto, pero no publica la web. Una ejecución manual con la casilla desmarcada tampoco la publica.

## Comprobación local opcional

Con Node.js 24 instalado, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm ci
npm run validar
npm run build
npm run serve
```

Abre la dirección local que indique la terminal. Esta comprobación no publica nada en GitHub.

## Textos conservados por indicación de la responsable

El README y la licencia se conservan conforme al texto facilitado. El README sigue describiendo el reparto anterior entre las sesiones 2 y 8; no se corrigió porque se pidió expresamente mantenerlo. La organización real de esta edición es: sesión 1 externa, sesión 2 con los 20 temas actuales y sesiones 3 a 8 pendientes. La licencia conserva su redacción y su fecha, sin ampliar los permisos.

## Documentación de referencia

- [Retirar una web de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).
- [Deshabilitar y habilitar un flujo](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows).
- [Eliminar una carpeta en GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository).
- [Subir archivos desde el navegador](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).
- [Menús automáticos de Docusaurus](https://docusaurus.io/docs/sidebar/autogenerated).
