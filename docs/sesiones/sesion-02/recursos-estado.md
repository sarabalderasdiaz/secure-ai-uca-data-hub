---
title: "Limitar recursos y evitar datos compartidos por accidente"
slug: "/materiales/parte-1/recursos-estado/"
sidebar_label: "Recursos y estado compartido"
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 1, 27–34. <a href={useBaseUrl('/descargas/DAS_Parte_1_Final.pdf') + '#page=27'}>Abrir el PDF en la primera diapositiva</a>.

Estos ejemplos muestran fallos que no necesitan una entrada con aspecto de ataque: **una exportación enorme** y **una lista que conserva información entre llamadas**.

## Exportar diez millones de filas

Cargar todos los resultados con `fetchall()` puede consumir memoria y mantener ocupados procesos durante demasiado tiempo. La aplicación debe definir cuánto permite exportar y cómo responde al exceso.

Las diapositivas proponen dos contratos diferentes:

| Contrato | Implementación explicada | Qué ve la persona |
|---|---|---|
| Exportación completa con máximo | Pedir como máximo 10.001 filas para un límite de 10.000. Si llega la adicional, rechazar. | Sabe que debe acotar la búsqueda. |
| Exportación parcial informada | Devolver hasta 10.000 y acompañar el total obtenido mediante `COUNT(*) OVER()`. | Sabe que recibe 10.000 de, por ejemplo, 10.500. |

**No son equivalentes:** el segundo contrato permite un resultado parcial; el primero lo impide. No debemos entregar un archivo incompleto como si fuera completo.

:::info Matiz sobre el coste
`LIMIT` limita las filas devueltas, pero no garantiza que la base de datos haya examinado pocas filas. `COUNT(*) OVER()` puede requerir procesar todas las coincidencias. También hay que revisar índices, filtros, tiempo máximo, concurrencia y plan de ejecución.
:::

Probar cero filas, el límite exacto y una fila adicional permite comprobar los bordes. La prueba de carga responde otra pregunta: si el servicio mantiene su comportamiento bajo demanda.

## Una lista que mezcla pacientes

```python
def agregar_paciente(paciente, lista=[]):
    lista.append(paciente)
    return lista
```

En Python, el valor por defecto se crea **una vez al definir la función**, no en cada llamada. Por eso:

```python
agregar_paciente(100)  # [100]
agregar_paciente(200)  # [100, 200]: reutiliza la misma lista
```

Si cada llamada debía pertenecer a un usuario diferente, se han mezclado datos. El arreglo crea una lista cuando no se recibe una explícita:

```python
def agregar_paciente(paciente, lista=None):
    if lista is None:
        lista = []
    lista.append(paciente)
    return lista
```

Las llamadas independientes devuelven ahora `[100]` y `[200]`. Si el llamante pasa deliberadamente la misma lista, seguirá compartiéndola: hay que conocer el contrato.

<details>
<summary>Para pensar: ¿por qué probar una sola llamada no descubre el problema?</summary>

Porque el estado sobrante se observa al reutilizar la función. La prueba debe hacer dos llamadas independientes y comprobar que los resultados no mezclan pacientes.

</details>

Referencia del lenguaje: [Python, valores por defecto de los argumentos](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values).
