---
title: "SAST, DAST y la interpretación de alertas"
slug: "/materiales/parte-1/sast-dast/"
sidebar_label: "SAST, DAST y alertas"
sidebar_position: 9
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 1, 37–39. <a href={useBaseUrl('/descargas/DAS_Parte_1_Final.pdf') + '#page=37'}>Abrir el PDF en la primera diapositiva</a>.

Una herramienta aporta **indicios que hay que interpretar**. Una alerta no es automáticamente una vulnerabilidad confirmada; la ausencia de alertas tampoco demuestra seguridad.

## Dos formas de observar el programa

| | SAST | DAST |
|---|---|---|
| Significado | Análisis estático de seguridad. | Análisis dinámico de seguridad. |
| Qué observa | Código o representaciones del programa, sin ejecutar la aplicación objetivo. | El comportamiento de una aplicación en ejecución. |
| Qué puede mostrar | Un flujo de entrada hacia una consulta SQL peligrosa. | Una respuesta que revela información ante una petición de prueba. |
| Qué necesita | Código compatible, reglas y contexto de análisis. | Un entorno accesible, configuración y recorridos de prueba. |
| Límite típico | Contexto incompleto o aproximaciones que generan alertas discutibles. | Rutas, estados o usuarios que no se han ejercitado. |
| Ejemplos del material | Semgrep, CodeQL, Sonar. | ZAP, Burp Suite. |

Una herramienta puede ofrecer varias capacidades; la tabla compara **técnicas**, no garantiza que todas las ediciones de un producto tengan las mismas funciones.

## Verdadero o falso, positivo o negativo

«Positivo» significa que la herramienta emite una alerta. «Verdadero» significa que esa decisión coincide con la presencia o ausencia del problema que estamos evaluando.

| | El problema está presente | El problema no está presente |
|---|---|---|
| **Emite alerta** | Verdadero positivo (VP). | Falso positivo (FP). |
| **No emite alerta** | Falso negativo (FN). | Verdadero negativo (VN). |

Ejemplo: si una consulta concatena una entrada que permite alterar el SQL y el analizador **no alerta**, tenemos un falso negativo en esa prueba. Es una situación hipotética hasta ejecutar y documentar una herramienta concreta, su versión y sus reglas.

## Revisar una alerta con criterio

1. Identifica qué entrada puede controlar una persona externa.
2. Sigue el recorrido hasta la operación relevante: SQL, HTML, archivo o registro.
3. Comprueba controles y condiciones de ejecución.
4. Diseña una prueba con resultado esperado.
5. Documenta la decisión: confirmado, descartado con motivo o pendiente de información.

<details>
<summary>Para pensar: ¿cero alertas significa cero vulnerabilidades?</summary>

No. Puede haber fallos fuera de las reglas, partes no analizadas o recorridos no probados. «No lo detectó esta revisión» y «no existe» son afirmaciones diferentes.

</details>

Las salidas de una IA también necesitan esta comprobación: proponer una causa o una corrección no equivale a demostrarla.
