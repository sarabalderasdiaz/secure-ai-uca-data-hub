---
title: "Disponibilidad y fiabilidad"
slug: "/materiales/parte-2/disponibilidad-fiabilidad/"
sidebar_label: "Disponibilidad y fiabilidad"
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 2, 39–44. <a href={useBaseUrl('/descargas/DAS_Parte_2_Final.pdf') + '#page=39'}>Abrir el PDF en la primera diapositiva</a>.

**Estar accesible y dar resultados correctos son propiedades distintas.** Un servicio puede responder siempre y calcular mal; otro puede funcionar correctamente cuando responde, pero sufrir interrupciones frecuentes.

## Dos preguntas para una transferencia

| Pregunta | Propiedad |
|---|---|
| ¿Puedo acceder al servicio cuando lo necesito? | Disponibilidad. |
| ¿La transferencia se ejecuta correctamente en las condiciones y tiempo especificados? | Fiabilidad. |

La fiabilidad depende del entorno y del uso previsto: carga, temperatura, entradas y operaciones. La disponibilidad exige definir qué cuenta como servicio disponible; una respuesta HTTP exitosa no basta si la función principal no se presta.

En el ejemplo bancario, retener temporalmente una operación y descontar dinero sin que llegue al destinatario tienen efectos diferentes. La valoración depende de importes, duración, recuperación y personas afectadas. No se asigna una gravedad universal solo con el nombre del fallo.

## Del error humano al fallo observable

| Término del esquema | Significado | Ejemplo docente |
|---|---|---|
| *Mistake* | Equivocación humana. | Interpretar mal una regla de comisiones. |
| *System fault* | Defecto en el sistema. | Implementar una fórmula incorrecta. |
| *System error* | Estado interno erróneo. | El saldo calculado contiene una cantidad equivocada. |
| *System failure* | Incumplimiento observable del servicio. | Se carga al cliente una cantidad incorrecta. |

No todo defecto se manifiesta en cada ejecución. Puede necesitar una combinación de entrada y estado. La terminología procede del esquema de Sommerville incluido en las diapositivas; conviene acordarla antes de contar «errores».

## Tres estrategias que se complementan

| Estrategia | Qué persigue | Ejemplo |
|---|---|---|
| Evitar defectos | Reducir su introducción. | Aclarar requisitos con especialistas del dominio. |
| Detectar y eliminar | Encontrarlos antes de que produzcan daño. | Revisar fórmulas y probar casos límite. |
| Tolerar fallos | Mantener un servicio aceptable pese a un fallo. | Recuperación, redundancia y degradación controlada. |

Duplicar un componente con el mismo defecto puede repetir el fallo. Para valorar tolerancia hay que analizar también **causas comunes** y el comportamiento de la recuperación.

<details>
<summary>¿Una web que devuelve siempre un saldo incorrecto tiene alta fiabilidad?</summary>

No según el requisito de calcular correctamente el saldo. Puede estar muy disponible, pero incumple su función. La métrica debe representar la experiencia y el contrato del servicio.

</details>
