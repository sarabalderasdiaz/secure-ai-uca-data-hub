---
title: "Publicar o actualizar en GitHub"
slug: "/guias/publicar/"
---

## Licencia y acceso

El paquete incluye `LICENSE.txt`, con una licencia de **uso personal para estudio**. Al crear el repositorio, deja **Add a license → None** y sube este archivo junto al resto del proyecto. La web tiene una página de licencia enlazada desde el menú y el pie de página.

**La licencia regula la reutilización; la visibilidad regula quién accede.** Los pasos de publicación siguientes crean una web pública. Un repositorio privado no vuelve privada automáticamente su web de GitHub Pages. El acceso privado a Pages está previsto para determinadas organizaciones con GitHub Enterprise Cloud. Si necesitas acceso exclusivo para el alumnado, utiliza un alojamiento con autenticación, como el campus virtual, o una modalidad de Pages con control de acceso disponible para tu organización.

En un repositorio público, GitHub permite la consulta y el fork conforme a sus condiciones de servicio. La licencia reconoce esos permisos. Referencias: [licencias en GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) y [acceso privado a Pages](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).

## Repositorio privado y acceso por invitación

Esta opción permite guardar el material en GitHub sin ponerlo a disposición de todo el mundo. La licencia limita su redistribución; el acceso privado permite elegir quién lo consulta. Quien tenga acceso podrá conservar una copia, por lo que ninguna de estas medidas garantiza técnicamente que no se difunda.

1. Al crear el repositorio, selecciona **Private**. Deja **Add a license → None** y sube el contenido del proyecto, incluido `LICENSE.txt`, desde **Add file → Upload files**. Si el repositorio está vacío, utiliza el enlace **uploading an existing file**. Selecciona los archivos y carpetas interiores del proyecto, no el ZIP ni una carpeta que los envuelva.
2. Para un repositorio de tu cuenta personal, pide a la persona su nombre de usuario de GitHub. Entra en **Settings → Collaborators → Add people**, busca esa cuenta y envía la invitación. Tendrá que aceptarla.
3. **Los colaboradores de un repositorio personal tienen lectura y escritura.** Para que el alumnado tenga solo lectura, usa un repositorio privado de una organización y asigna el rol **Read**. La organización funciona como un espacio de GitHub para el proyecto; sus permisos se administran por separado de tu cuenta personal.
4. Para esta modalidad de archivos privados, no actives GitHub Pages. El flujo incluido comprueba y construye el proyecto, pero solo intenta publicarlo si el repositorio es público.
5. Si el repositorio ya era público, puedes cambiarlo en **Settings → General → Danger Zone → Change repository visibility**. Hacerlo privado no elimina copias locales ni forks públicos anteriores.

La invitación permite acceder a los archivos del repositorio; no crea una web privada con el aspecto de los apuntes. GitHub Free no ofrece Pages desde repositorios privados. En los planes que permiten ese origen, el sitio puede seguir siendo público: el acceso privado a Pages requiere una organización con GitHub Enterprise Cloud y su configuración correspondiente. Para una web accesible solo al alumnado, otra posibilidad es un alojamiento institucional con autenticación.

Los pasos siguientes y la guía PDF describen la **publicación pública**. Sigue esa ruta únicamente si decides que la web sea accesible a cualquiera. La versión Markdown de la guía incluye también esta alternativa privada.

Referencias: [invitaciones](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository), [permisos de repositorios personales](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository), [roles de una organización](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) y [planes de Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Elige por dónde empezar

Si ya publicaste el repositorio anterior, sigue **Actualizar una publicación existente**. Si aún no lo subiste, sigue **Publicar por primera vez**. En ambos casos se utiliza GitHub Pages con el flujo incluido en `.github/workflows/publicar.yml`.

## Publicar por primera vez

1. Descarga `SECURE_AI_UCA_Data_Hub_GitHub.zip` y **descomprímelo**. Dentro encontrarás la carpeta `secure-ai-uca-data-hub`.
2. Instala [GitHub Desktop](https://desktop.github.com/) y entra con tu cuenta. La subida con Desktop no exige instalar Node.js.
3. En GitHub, pulsa **New repository**. Escribe, por ejemplo, `secure-ai-uca-data-hub`. Elige **Public**, marca **Add a README file** y pulsa **Create repository**. Un repositorio público permite esta publicación con GitHub Free; un repositorio privado depende del plan.
4. En la página del repositorio, pulsa **Code → Open with GitHub Desktop → Clone**. Elige una carpeta de tu ordenador.
5. En Desktop, usa **Repository → Show in Explorer** en Windows o **Show in Finder** en macOS. Se abre la carpeta clonada: esta será tu carpeta de trabajo.
6. Abre también la carpeta descomprimida del ZIP. **Copia su contenido dentro de la carpeta clonada**, no la carpeta contenedora. Acepta sustituir el README inicial. En la raíz deben quedar `package.json`, `docs`, `src`, `static` y `.github`, todos al mismo nivel.
7. Comprueba que se han copiado `.github`, `.gitignore` y `.nvmrc`. Para ver archivos ocultos, activa **Ver → Mostrar → Elementos ocultos** en Windows; en macOS pulsa **Cmd + Mayús + .**. No borres ni sustituyas la carpeta `.git` que creó Desktop.
8. En GitHub, entra en **Settings → Pages**. En **Build and deployment → Source**, selecciona **GitHub Actions**. No elijas publicar directamente desde una rama.
9. Vuelve a Desktop. En **Changes**, revisa los archivos. Escribe `Publicar materiales finales de SECURE AI UCA` en **Summary**, pulsa **Commit to main** y después **Push origin**.
10. En GitHub, abre **Actions** y entra en **Publicar SECURE AI UCA Data Hub**. Espera a que terminen los trabajos `construir` y `publicar`. Si se inició antes de configurar Pages y falló, abre **Run workflow**, elige `main` y ejecútalo de nuevo.
11. Abre **Settings → Pages** y pulsa **Visit site** cuando aparezca. La dirección habitual será `https://TU_USUARIO.github.io/secure-ai-uca-data-hub/`. Usa la que muestre GitHub, especialmente si has elegido otro nombre.
12. Comprueba la portada, una página de cada parte, el buscador y las dos descargas PDF. La web se actualiza cada vez que envías cambios a `main`.

El proyecto detecta automáticamente la cuenta y el nombre del repositorio en GitHub Actions. **No necesitas sustituir `TU_USUARIO` dentro del código.** Si utilizas un dominio propio, revisa además `url`, `baseUrl` y la configuración de dominio de Pages.

## Actualizar una publicación existente

1. Abre el repositorio existente en GitHub Desktop. Pulsa **Fetch origin** y, si aparece, **Pull origin** para traer la versión remota. Guarda o confirma tus cambios locales antes de sustituir archivos.
2. Haz una copia de la carpeta del proyecto **fuera del repositorio**. Si añadiste materiales propios, identifica qué archivos necesitas recuperar después.
3. Descomprime el nuevo ZIP en otra ubicación. No lo descomprimas directamente encima de la versión antigua.
4. En la carpeta clonada, retira las carpetas de la versión anterior que este paquete reemplaza: `docs`, `static`, `src`, `scripts`, `.github`, `contenido`, `ejemplos` y `plantillas` —las dos últimas ya no forman parte de esta edición—. Retira solo las que existan, después de la copia del paso 2. **Conserva `.git`, archivos privados y personalizaciones propias que hayas identificado.**
5. Copia dentro todo el contenido del nuevo proyecto y acepta reemplazar los archivos de configuración y las guías con el mismo nombre. No copies una segunda carpeta contenedora. Si existía un `static/CNAME` para un dominio propio, restáuralo desde tu copia y revisa esa configuración.
6. Recupera desde la copia los temas personales que quieras conservar dentro de la carpeta de la sesión que corresponda dentro de `docs/sesiones/`, y sus imágenes. Comprueba sus enlaces. La navegación de esta edición es por sesiones; `hub.config.json` conserva el nombre del Hub.
7. En Desktop revisa **Changes**: deben verse los nuevos PDF y apuntes, y la eliminación de los materiales antiguos que ya no se usan. No envíes `node_modules`, `build`, secretos o evidencias privadas. Si quieres comprobar localmente, sigue el bloque siguiente.
8. Escribe un resumen, por ejemplo `Actualizar con las diapositivas finales`, pulsa **Commit to main** y **Push origin**. Comprueba **Actions** y después la web. Conservas la misma dirección y el historial de Git.

Si utilizaste la edición organizada por docentes, elimina también el archivo antiguo `scripts/exportar-area.mjs` si no se retiró al sustituir `scripts`.

**No basta con añadir los PDF nuevos:** dejar los antiguos apuntes en `docs` también los mantendría publicados como rutas accesibles, aunque no aparecieran en el menú.

## Comprobar la web en tu equipo

Instala [Node.js 24 LTS](https://nodejs.org/) para esta configuración. Abre una terminal **dentro de la carpeta que contiene `package.json`** y ejecuta, uno por uno:

```bash
npm ci
npm run validar
npm run build
npm run serve
```

Abre la dirección local indicada por el último comando. `npm run build` construye la web y comprueba enlaces internos; el buscador usa un índice generado durante ese paso. Detén el servidor con **Ctrl + C**. Para editar con recarga puedes usar `npm start`, pero comprueba el buscador sobre la web construida.

## Si algo falla

| Síntoma | Qué revisar |
|---|---|
| No aparece el flujo en Actions. | Existe `.github/workflows/publicar.yml` en la raíz del repositorio y se ha enviado a GitHub. |
| Falla la preparación de Pages. | `Settings → Pages → Source` está en `GitHub Actions`; después, repetir el flujo. |
| `package.json` no se encuentra. | No has subido una carpeta extra que envuelva el proyecto. |
| Aparece un error de Markdown o enlace roto. | Abrir el paso que falla en Actions; corregir el archivo indicado y enviar el cambio. |
| La web conserva la versión antigua. | El último trabajo de publicación terminó correctamente; comprobar la URL y recargar. |
| No aparecen resultados en el buscador local. | Ejecutar `npm run build` y `npm run serve`; el índice se genera al construir. |

Referencias: [GitHub Desktop: clonar un repositorio](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop), [elegir la fuente de Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) y [flujos de Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
