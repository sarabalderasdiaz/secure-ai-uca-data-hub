---
title: "Qué puede aportar el análisis estático"
slug: "/materiales/parte-1/analisis-estatico/"
sidebar_label: "Análisis estático"
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 1, 40–48. <a href={useBaseUrl('/descargas/DAS_Parte_1_Final.pdf') + '#page=40'}>Abrir el PDF en la primera diapositiva</a>.

Analizar sin ejecutar permite examinar **tipos, convenciones, estructura, flujos y propiedades**. La profundidad y las garantías dependen de la técnica y de los supuestos.

## Tipos y reglas del lenguaje

```java
short s = 0;
int i = s;
short r = i; // Error de compilación en Java.
```

Java permite ampliar `short` a `int`. La vuelta desde una variable `int` a `short` requiere una conversión admitida por las reglas del lenguaje; aquí no se hace automáticamente.

:::info Aclaración respecto a la diapositiva 40
Aunque en este recorrido `i` vale cero, el rechazo del compilador es correcto según las reglas de asignación de Java. No conviene presentarlo como un falso positivo de seguridad. Un cast explícito puede compilar, pero hay que asegurar que el rango sea válido.
:::

[Reglas de conversión y asignación de Java](https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html).

## Estilo, estructura y verificación

| Tipo de análisis | Utilidad | Límite |
|---|---|---|
| Convenciones de código | Mantener nombres, sangrado y organización coherentes. | Incumplir una convención no implica siempre una vulnerabilidad. |
| Comprensión del programa | Mostrar dependencias y estructura, por ejemplo mediante UML. | Un diagrama no demuestra por sí solo que el comportamiento sea seguro. |
| Verificación formal | Comprobar propiedades de un modelo o programa y obtener contraejemplos. | La garantía se refiere a la propiedad y a los supuestos modelados. |
| Búsqueda de defectos | Localizar fugas, accesos fuera de límites o flujos peligrosos. | Puede aproximar comportamiento y requerir revisión humana. |

Las reglas de estilo de las diapositivas son ejemplos de convenciones. Un proyecto debe elegir y documentar las suyas.

## Recursos: liberar también cuando algo falla

Si se reserva `inBuf` y después falla la reserva de `outBuf`, salir sin liberar el primero provoca una **fuga de memoria**. Una adaptación mínima del caso es:

```c
char *inBuf = malloc(tamano);
if (inBuf == NULL) return -1;
char *outBuf = malloc(tamano);
if (outBuf == NULL) {
    free(inBuf);
    return -1;
}
/* Usar ambos buffers; liberarlos también en las demás salidas. */
free(outBuf);
free(inBuf);
```

El punto útil de revisión es cada **salida anticipada**, no solo el final correcto de la función. Referencia de clasificación: [CWE-401](https://cwe.mitre.org/data/definitions/401.html).

## Concurrencia: inicialización compartida

El ejemplo de *double-checked locking* necesita conocer cómo se declara el campo y qué garantías de visibilidad se aplican. Sin ellas, un hilo puede observar un estado que no se ha publicado correctamente.

Sincronizar el acceso completo es una solución sencilla para explicar el requisito. También existen implementaciones válidas con `volatile` y el patrón aplicado correctamente: **no toda doble comprobación es incorrecta**. La declaración del campo importa tanto como el fragmento del método. [Referencia: modelo de memoria de Java](https://docs.oracle.com/javase/specs/jls/se25/html/jls-17.html).

## Copias de cadenas: conocer el tamaño

`strcpy` no recibe la capacidad del destino. Copiar una cadena de longitud conocida y corta no tiene las mismas condiciones que copiar `argv[0]`, cuyo tamaño no se ha limitado.

:::info Aclaración respecto a la diapositiva 46
Cambiar `strcpy` por `strncpy` no garantiza por sí solo una cadena terminada en NUL ni un tamaño correcto. Una corrección debe conocer la capacidad, definir qué hacer si la entrada no cabe y conservar la terminación. No se presenta una sustitución mecánica como solución universal.
:::

## Precisión, alcance y coste

El analizador necesita modelos del lenguaje, bibliotecas y llamadas. Si desconoce una función que valida una entrada, puede alertar de más; si presupone una validación inexistente, puede omitir un problema.

Un análisis más profundo puede consumir más tiempo y memoria. Hay que documentar **qué se analizó, con qué reglas y qué quedó fuera** para interpretar el resultado.

<details>
<summary>Pregunta de revisión: ¿qué buscarías después de cada reserva de memoria?</summary>

Las salidas que pueden ocurrir después: errores, retornos anticipados y rutas excepcionales. En cada una, comprobar quién posee el recurso y quién lo libera. El mismo razonamiento se aplica a archivos, conexiones y bloqueos.

</details>
