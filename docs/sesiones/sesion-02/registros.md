---
title: "Log injection y log forging"
slug: "/materiales/parte-2/registros/"
sidebar_label: "Registros y eventos falsos"
sidebar_position: 14
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 2, 12–17. <a href={useBaseUrl('/descargas/DAS_Parte_2_Final.pdf') + '#page=12'}>Abrir el PDF en la primera diapositiva</a>.

Los registros ayudan a reconstruir lo ocurrido. Si incorporan datos externos sin proteger el formato, una persona puede **hacer que parezca ocurrido un evento que nunca sucedió**.

## Mecanismo y resultado

**Log injection** es introducir contenido que altera el registro. **Log forging** es la falsificación de eventos resultante. En el ejemplo, el mecanismo es un salto de línea dentro del nombre de usuario:

```python
logger.warning(f"Login fallido: {usuario}")
```

Si `usuario` contiene dos líneas, el archivo puede parecer así:

```text
WARNING Login fallido: ana
2026-10-28 INFO Login correcto: admin
```

La segunda línea **no demuestra que admin haya iniciado sesión**: puede formar parte de la entrada registrada en el primer evento. La fecha pertenece al ejemplo docente, no a un incidente real.

## Los otros fragmentos de las diapositivas

| Fragmento | Dónde aparece el riesgo |
|---|---|
| Java intenta convertir `val` a entero y registra el valor original cuando falla. | El recorrido de error copia una entrada no confiable al registro. |
| Un parámetro contiene `%0a`. | Al decodificarse como salto de línea puede alterar un formato basado en líneas. |
| SLF4J escribe `logger.info("Amount credited = {}", amount)`. | Los marcadores facilitan construir el mensaje, pero no garantizan neutralizar saltos de línea. |

La parametrización de un logger **no tiene el mismo efecto de seguridad que la parametrización SQL**. Hay que conocer el codificador y el formato de salida reales.

## Conservar el evento como un solo evento

Una adaptación mínima para mostrar la idea es serializar un objeto JSON completo:

```python
import json

usuario = "ana\nINFO Login correcto: admin"
evento = {"evento": "login_fallido", "usuario": usuario}
linea = json.dumps(evento, ensure_ascii=False)
print(linea)
```

La salida contiene `\n` escapado dentro del valor, no una segunda línea de evento. La aplicación real necesita además un sistema de registros que preserve esa estructura y un visor que no la reinterprete de forma peligrosa.

Evitar contraseñas y tokens en los registros es otro control independiente. También importan los permisos de acceso y la integridad del almacenamiento.

<details>
<summary>Prueba breve: ¿cómo detectarías que la corrección funciona?</summary>

Introduce un nombre normal y otro con un salto de línea. Ambos deben generar exactamente un evento. En el segundo, el contenido adicional debe seguir siendo un dato del campo usuario; no debe aparecer como un inicio de sesión confirmado.

</details>

Referencia: [OWASP, registro de eventos y prevención de inyección](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html).
