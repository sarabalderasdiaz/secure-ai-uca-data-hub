---
title: "Security: confidencialidad, integridad y disponibilidad"
slug: "/materiales/parte-2/security/"
sidebar_label: "Security y protección de la información"
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 2, 49–50. <a href={useBaseUrl('/descargas/DAS_Parte_2_Final.pdf') + '#page=49'}>Abrir el PDF en la primera diapositiva</a>.

La seguridad de la información protege frente a accesos, cambios y usos no autorizados. **Una misma vulnerabilidad puede afectar a varias propiedades.**

## Tres efectos que debemos distinguir

| Propiedad | Qué queremos preservar | Ejemplo del curso |
|---|---|---|
| **Confidencialidad** | Solo accede quien tiene permiso. | No exponer nóminas a usuarios no autorizados. |
| **Integridad** | Los datos y operaciones no cambian de forma indebida. | No aprobar una transferencia sin autorización. |
| **Disponibilidad** | El servicio está accesible cuando se necesita. | No agotar recursos con una exportación sin límites. |

Una denegación de servicio afecta a disponibilidad; una alteración de saldos, a integridad; una fuga de información, a confidencialidad. El impacto no tiene por qué quedarse en una sola columna.

## Relacionar security y safety

Una acción no autorizada puede tener consecuencias físicas si afecta a un sistema que controla un proceso peligroso. A la vez, un fallo accidental puede causar daños sin que exista un ataque. Conviene describir **causa, efecto y evidencia** antes de etiquetar el incidente.

## Tratar con cuidado las historias y las cifras

La diapositiva 49 menciona un relato sobre una explosión en un gasoducto soviético en 1982 y lo presenta como **no confirmado**. Por ello, estos apuntes no lo usan como evidencia de un ciberataque probado. Para discutir casos documentados pueden utilizarse las fuentes primarias del apartado de [sistemas críticos](sistemas-criticos.md), distinguiendo fallos operativos de ataques.

La figura de coste de brechas incluida en esa diapositiva también necesita contexto: fecha, moneda, muestra y método. Un promedio de un informe no predice automáticamente el coste de una brecha en nuestra aplicación.

<details>
<summary>Pregunta final: una exportación pública contiene todas las nóminas, ¿qué propiedad se afecta primero?</summary>

La confidencialidad, porque acceden personas no autorizadas. Si además se modifican las nóminas o se paraliza el servicio, también se afectan integridad o disponibilidad. La respuesta debe apoyarse en lo ocurrido, no en una etiqueta elegida de antemano.

</details>

Para repasar los términos del bloque: [glosario](../../glosario.md).
