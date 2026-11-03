---
title: "Categorías: agrupar para entender la causa"
slug: "/materiales/parte-2/categorias/"
sidebar_label: "Categorías de vulnerabilidad"
sidebar_position: 13
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 2, 10–11. <a href={useBaseUrl('/descargas/DAS_Parte_2_Final.pdf') + '#page=10'}>Abrir el PDF en la primera diapositiva</a>.

Las diapositivas agrupan los hallazgos en categorías para que la revisión tenga un propósito. **Clasificar ayuda a encontrar patrones y a elegir controles**, además de contar incidencias.

| Categoría del material | Qué puede ocurrir | Control que debemos examinar |
|---|---|---|
| Log forging | Aparecen eventos falsos en un registro. | Tratamiento de los datos antes de escribir el evento. |
| Cross-Site Scripting | Datos externos se ejecutan como código en el navegador. | Contexto de salida, codificación y APIs de representación. |
| Privacy violation | Información personal o credenciales llegan a quien no debe. | Necesidad de recopilarla, acceso, exposición y conservación. |
| Race condition | Dos operaciones concurrentes incumplen una regla. | Atomicidad, transacciones y coordinación del estado. |
| Password management | Contraseñas o secretos quedan expuestos o mal gestionados. | Almacenamiento, distribución, permisos y rotación. |

No son compartimentos excluyentes. Una contraseña registrada por error afecta tanto a la gestión de secretos como a la privacidad. Conviene documentar la causa principal y las consecuencias sin multiplicar artificialmente el número de hallazgos.

<details>
<summary>¿Dónde clasificarías un registro que contiene la contraseña de una persona?</summary>

El problema es que se ha registrado un secreto que no debía almacenarse allí. Puede relacionarse con privacidad y gestión de contraseñas. No hace falta que exista un salto de línea ni una entrada falsificada para que sea un fallo.

</details>

Continúa con [inyección y falsificación de registros](registros.md), [XSS](xss-tipos.md) o [configuración y datos sensibles](configuracion-datos.md).
