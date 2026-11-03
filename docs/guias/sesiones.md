---
title: "Organización por sesiones"
slug: "/guias/sesiones/"
---

## Ocho clases, ocho carpetas

La sesión 1 enlaza los materiales de Juan Manuel Dodero. Los **20 temas actuales pertenecen a la sesión 2**. Las sesiones 3 a 8 están preparadas para incorporar contenidos semanales.

Cada carpeta `docs/sesiones/sesion-XX/` contiene:

- `_category_.json`: nombre y posición de la sesión en el menú.
- `index.md`: página de entrada de la clase; muestra su índice automáticamente.
- Los archivos `.md` de sus contenidos, cuando estén preparados.
- `recursos/`: imágenes o documentos de esa clase.

Las seis sesiones futuras están vacías de contenido docente; sus archivos iniciales permiten que Git conserve las carpetas y que el menú muestre **Sesión 3**, **Sesión 4**, etc.

## Preparar la semana siguiente

1. Trabaja únicamente en la carpeta de esa sesión.
2. Añade los temas con título, `slug` único y `sidebar_position`.
3. Incorpora los recursos que utilicen y, si procede, las definiciones nuevas en el glosario.
4. Guarda y comprueba el proyecto. El índice sustituye automáticamente el aviso de contenidos pendientes por los enlaces a los temas disponibles.

No es necesario editar el menú, la portada ni las sesiones anteriores. Los archivos técnicos `src/data/sesiones.json` y `contenido/temas.json` se regeneran al construir; no se editan a mano.

## Cambiar el nombre visible de una sesión

Edita `label` en su `_category_.json` y `title` en su `index.md`. Conserva el nombre de la carpeta y el `slug` cuando ya existan enlaces compartidos.

## Añadir otra sesión en el futuro

Copia una carpeta vacía, por ejemplo `sesion-08`, y renómbrala a `sesion-09`. Cambia `label` y `position` en `_category_.json`; en `index.md`, cambia título, `slug` y el número de `<TemasSesion numero={9} />`. El menú y los índices reconocerán la nueva carpeta.

[Añadir un tema paso a paso](editar.md).
