---
title: "Autorización y acceso a archivos"
slug: "/materiales/parte-1/autorizacion-rutas/"
sidebar_label: "Permisos y rutas"
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 1, 20–22. <a href={useBaseUrl('/descargas/DAS_Parte_1_Final.pdf') + '#page=20'}>Abrir el PDF en la primera diapositiva</a>.

Dos fallos distintos pueden terminar exponiendo información: **no comprobar permisos** y **permitir que una ruta salga de su ubicación autorizada**.

## Exportar nóminas: entrar no es tener permiso

```python
@app.route("/nominas/exportar")
@login_required
def exportar_nominas():
    return generar_csv_todas_nominas()
```

El decorador exige una sesión, pero el cuerpo exporta todas las nóminas. Falta la decisión de autorización: ¿esta persona tiene la función de Recursos Humanos y el ámbito que corresponde?

```python
# Adaptación del control mostrado en las diapositivas.
if current_user.rol != "RRHH":
    abort(403)
return generar_csv_todas_nominas()
```

El rol debe proceder de la identidad gestionada por el servidor, no de un campo que la persona pueda cambiar en la petición. En una organización con varios centros, el rol puede necesitar además un **ámbito de acceso**.

**CWE-862** encaja cuando falta la autorización. Si existe una comprobación pero aplica mal la política, puede corresponder otra clasificación, como CWE-863.

## Descargar archivos: restringir el destino real

La aplicación pretende servir `/app/reportes/enero.csv`. Si acepta libremente el parámetro `archivo`, una entrada como `../config/secretos.txt` puede apuntar fuera de la carpeta de informes.

| Elemento | Ejemplo |
|---|---|
| Carpeta permitida | `/app/reportes/` |
| Archivo legítimo | `/app/reportes/enero.csv` |
| Ruta solicitada | `../config/secretos.txt` |
| Destino fuera del ámbito | `/app/config/secretos.txt` |

La debilidad es **CWE-22, Path Traversal**. El criterio no es «¿parece un nombre de informe?», sino «¿el destino que se abrirá está dentro del conjunto autorizado y puede acceder a él esta persona?».

Una opción sencilla es que el cliente envíe un **identificador de informe** y que el servidor resuelva el archivo mediante un catálogo autorizado. Si se aceptan rutas, hay que resolverlas y comprobar su pertenencia a la raíz permitida, teniendo en cuenta enlaces simbólicos y cambios concurrentes del sistema de archivos.

<details>
<summary>Actividad de dos minutos: ¿basta con ocultar el botón de exportación?</summary>

No. La persona puede enviar directamente la petición. La prueba relevante usa una sesión sin permisos y comprueba que el servidor rechaza la operación. Para las rutas, se añade una solicitud que intente salir de la carpeta y otra de un informe legítimo.

</details>

Fichas técnicas: [CWE-862](https://cwe.mitre.org/data/definitions/862.html) y [CWE-22](https://cwe.mitre.org/data/definitions/22.html).
