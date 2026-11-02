---
title: "Editar temas y ejemplos"
slug: "/guias/editar/"
---

## Dónde están los contenidos

Cada sesión tiene una carpeta dentro de `docs/sesiones/`. Cada tema es un archivo `.md` y el menú se genera automáticamente a partir de estas carpetas.

| Quiero cambiar… | Edito… |
|---|---|
| Un tema de la sesión 2 | Su `.md` en `docs/sesiones/sesion-02/`. |
| Un tema de otra sesión | Su `.md` en la carpeta de esa sesión. |
| Título de un tema | `title` en la cabecera del archivo. |
| Texto del menú para ese tema | `sidebar_label` en la misma cabecera. |
| Orden de los temas | `sidebar_position` en cada archivo. |
| Nombre y orden de una sesión | `_category_.json` en su carpeta. |
| Portada general | `docs/inicio.md`. |
| Tabla con el plan de sesiones | `docs/sesiones/indice.md`. |
| PDF o imágenes | `static/descargas/` o `static/figuras/`. |

## Editar un tema paso a paso

1. Abre el archivo correspondiente; por ejemplo, `docs/sesiones/sesion-02/fundamentos.md`.
2. Cambia el texto, los ejemplos o la pregunta que quieras mejorar. Puedes usar el editor de GitHub o un editor de texto en tu ordenador.
3. Para cambiar el título o su posición, edita la cabecera:

```yaml
---
title: "Motivación y requisitos de seguridad"
slug: /materiales/parte-1/fundamentos/
sidebar_label: "Motivación y requisitos"
sidebar_position: 1
---
```

4. **Conserva `slug`** si quieres mantener la dirección del tema. En los temas existentes se mantienen las direcciones anteriores para que los enlaces compartidos sigan funcionando.
5. Guarda y envía el cambio. GitHub Actions reconstruirá la web; comprueba que termina correctamente.

`sidebar_position: 1` significa que ese tema aparece primero **dentro de su sesión**. No es el número de la sesión ni cambia el número impreso en el PDF.

## Añadir un tema a una sesión

1. Crea, por ejemplo, `docs/sesiones/sesion-03/nuevo-ejemplo.md`.
2. Añade una cabecera con título, dirección única y posición:

```yaml
---
title: "Otro ejemplo de autorización"
slug: /sesiones/sesion-3/nuevo-ejemplo/
sidebar_position: 4
---
```

3. Escribe el contenido debajo de la segunda línea `---`.
4. Guarda y envía el archivo. **Aparecerá automáticamente en el menú de la sesión 3**. No hace falta editar `sidebars.js`.

## Texto y preguntas

```markdown
## Idea principal

Una sesión válida no implica **permiso para todos los recursos**.

- Prueba normal: consultar el informe propio.
- Prueba negativa: intentar consultar un informe ajeno.
```

```html
<details>
<summary>¿Qué control falta?</summary>

La comprobación de autorización sobre el recurso solicitado.

</details>
```

Las respuestas desplegables son públicas. Las notas que deban permanecer privadas no deben incluirse en la web.

## Cambiar un PDF

Cuando sustituyas un PDF, revisa la numeración de sus páginas, los enlaces de los temas y el mapa de `contenido/mapa_diapositivas.json`. Actualiza deliberadamente el número de páginas y la huella SHA-256 en `contenido/fuentes_originales.json`: el comprobador avisa si el original ha cambiado.

Para calcular una huella desde la raíz del proyecto:

```bash
node -e "const fs=require('fs'),c=require('crypto');console.log(c.createHash('sha256').update(fs.readFileSync('static/descargas/DAS_Parte_1_Final.pdf')).digest('hex'))"
```

El mapa de ubicación de los temas se actualiza al validar o construir la web; cambiar las páginas del PDF requiere revisar la correspondencia de origen.
