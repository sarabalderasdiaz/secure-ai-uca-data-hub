---
title: "Sistemas críticos y consecuencias reales"
slug: "/materiales/parte-2/sistemas-criticos/"
sidebar_label: "Sistemas críticos y casos reales"
sidebar_position: 17
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 2, 31–38. <a href={useBaseUrl('/descargas/DAS_Parte_2_Final.pdf') + '#page=31'}>Abrir el PDF en la primera diapositiva</a>.

Un sistema es crítico cuando sus fallos pueden provocar **daños importantes a personas, operaciones o negocio**. La criticidad se entiende desde las consecuencias, no solo desde el lenguaje o el tamaño del programa.

## Tres ámbitos de criticidad

| Ámbito | Qué puede comprometerse | Ejemplo del material |
|---|---|---|
| Seguridad física, *safety-critical* | Vida, salud o entorno. | Control de una instalación nuclear. |
| Misión, *mission-critical* | Una actividad que debe completarse. | Navegación de una aeronave. |
| Negocio, *business-critical* | Continuidad y resultados de una organización. | Operación bancaria. |

Los ámbitos pueden coincidir en un mismo sistema. La **confiabilidad, dependability**, reúne propiedades que permiten confiar en el servicio:

| Propiedad | Pregunta sencilla |
|---|---|
| Disponibilidad | ¿Está accesible cuando se necesita? |
| Fiabilidad | ¿Se comporta correctamente en las condiciones previstas? |
| Safety | ¿Evita daños físicos inaceptables? |
| Security | ¿Protege frente a acciones no autorizadas? |

La falta de confiabilidad puede producir rechazo de los usuarios, costes de recuperación y pérdida de información, como resume el esquema de las diapositivas.

## TSB, 2018: migrar datos no garantiza un servicio operativo

La FCA documentó fallos tras la migración tecnológica de TSB en abril de 2018. Aunque se trasladaron los datos, hubo problemas en la plataforma y en servicios para clientes; algunos persistieron hasta diciembre de ese año.

**Análisis docente:** comprobar recorridos completos, capacidad y recuperación, además de verificar los datos migrados. Un plan de vuelta atrás debe poder ejecutarse y haberse ensayado.

[Fuente: FCA, sanción por fallos de resiliencia operativa](https://www.fca.org.uk/news/press-releases/tsb-fined-48m-operational-resilience-failings). La referencia permite matizar la duración simplificada de una semana del PDF.

## Knight Capital, 2012: un despliegue defectuoso y una reacción insuficiente

La SEC describe una incidencia de unos 45 minutos que produjo una pérdida de **más de 460 millones de dólares estadounidenses**. Su investigación incluye fallos de controles y despliegue, así como avisos que no desencadenaron la respuesta necesaria.

**Análisis docente:** uniformidad de versiones, validación del despliegue, límites automáticos de operación y capacidad de detenerlo. Registrar una alarma sirve de poco si no tiene un responsable y una respuesta definida.

[Fuente: SEC](https://www.sec.gov/newsroom/press-releases/2013-222). En los apuntes se corrige la moneda que figura en la diapositiva: dólares, no euros.

## Universidad de Kioto, 2021: una operación de respaldo destruye datos

El comunicado de la universidad informa de la eliminación accidental de aproximadamente **77 TB y 34 millones de archivos**, con 14 grupos afectados. En cuatro grupos no se pudo restaurar la información. Su explicación posterior relaciona el incidente con cambios en el procedimiento de copia de seguridad.

**Análisis docente:** limitar el alcance de operaciones destructivas, ensayar cambios y comprobar restauraciones con copias suficientemente independientes. Tener una tarea llamada «backup» no demuestra recuperabilidad.

[Comunicado oficial](https://www.iimc.kyoto-u.ac.jp/en/news/trouble/211216056978) · [Explicación de la causa](https://www.iimc.kyoto-u.ac.jp/ja/news/information/211228056999). Se mantiene la unidad **TB** publicada por la fuente, sin convertirla en TiB.

:::note Cómo leer estos casos
Los hechos se apoyan en fuentes primarias. Las mejoras propuestas son interpretación docente, no pruebas de que una medida aislada hubiera evitado todo el incidente. Estos casos muestran fallos de software y operación; no todos fueron intrusiones maliciosas.
:::

<details>
<summary>Actividad breve: elige un caso y una evidencia que pedirías antes de desplegar</summary>

TSB: resultado de una prueba de servicio completo y recuperación. Knight: comprobación de versiones y ensayo de parada. Kioto: restauración real desde una copia independiente. Debe ser una evidencia observable, no solo una declaración de que existe un procedimiento.

</details>
