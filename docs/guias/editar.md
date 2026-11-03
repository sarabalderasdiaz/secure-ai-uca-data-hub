---
title: "Editar y añadir contenidos"
slug: "/guias/editar/"
---

## Archivos de cada clase

| Necesidad | Archivo o carpeta |
|---|---|
| Añadir contenidos a la sesión 3 | `docs/sesiones/sesion-03/` |
| Guardar sus imágenes y documentos | `docs/sesiones/sesion-03/recursos/` |
| Ampliar las definiciones comunes | `docs/glosario.md` |
| Cambiar el texto introductorio de esa clase | `docs/sesiones/sesion-03/index.md` |
| Ordenar sus contenidos | `sidebar_position` en la cabecera de cada tema |

El menú y los índices se actualizan automáticamente al construir. No hay que editar el resto de sesiones ni la portada general.

## Añadir un contenido desde GitHub

1. Entra en la carpeta de la sesión.
2. Pulsa **Add file → Create new file**, o **Upload files** si lo preparaste en tu ordenador.
3. Crea un archivo terminado en `.md`, por ejemplo `autorizacion.md`.
4. Usa una cabecera como esta y escribe el contenido debajo:

```yaml
---
title: "Autorización de acceso"
slug: "/sesiones/sesion-3/autorizacion/"
sidebar_label: "Autorización"
sidebar_position: 1
---
```

El número del `slug` debe corresponder a la clase; la dirección debe ser única. Una vez publicado el tema, conserva ese `slug` para mantener su enlace.

`sidebar_position` ordena los contenidos **dentro de la misma sesión**. No modifica el número de sesión ni las diapositivas.

## Imágenes y documentos en la misma carpeta

Guarda los recursos de la clase en `recursos/`. Desde un tema situado directamente en la carpeta de la sesión puedes enlazarlos así:

```markdown
![Descripción del esquema](recursos/esquema.png)

[Documento de apoyo](recursos/documento.pdf)
```

Estos nombres son ejemplos: el archivo enlazado debe existir. Subir un PDF no lo convierte automáticamente en un tema web; añade su enlace en el contenido correspondiente.

La carpeta `recursos/` contiene inicialmente un `.gitkeep`, un marcador sin contenido para que Git pueda conservarla.

## Glosario y publicación

Añade a `docs/glosario.md` únicamente los términos nuevos que quieras incorporar. No es necesario modificar el glosario si no hay nuevas definiciones.

Al guardar, GitHub Actions comprueba el proyecto si el flujo está habilitado. Para hacer visible la versión revisada, sigue la [guía de publicación](publicar.md).
