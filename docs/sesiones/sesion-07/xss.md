---
title: "XSS: tipos, efectos y defensas"
slug: "/materiales/parte-2/xss/"
sidebar_label: "Tipos y defensas de XSS"
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 2, 18–27. <a href={useBaseUrl('/descargas/DAS_Parte_2_Final.pdf') + '#page=18'}>Abrir el PDF en la primera diapositiva</a>.

El punto común es que el navegador **interpreta datos no confiables como código** dentro de una aplicación. La parte 1 muestra el [mensaje que lee un administrador](../sesion-03/xss.md); aquí se comparan los recorridos del dato.

## Reflejado, almacenado y basado en DOM

| Término | Recorrido | Ejemplo |
|---|---|---|
| **Reflejado** | La entrada de una petición aparece en su respuesta. | Una página de bienvenida inserta el nombre recibido sin proteger su salida. |
| **Almacenado** | La entrada se guarda y se muestra después. | Un comentario se almacena y lo leen otras personas. |
| **Basado en DOM** | JavaScript del cliente lleva el dato a una operación peligrosa del DOM. | Un valor de la URL acaba en `innerHTML`. |

Reflejado y almacenado describen persistencia y recorrido; basado en DOM describe dónde se produce la transformación peligrosa. **No son tres etiquetas necesariamente excluyentes.** Una entrada reflejada puede llegar por diferentes campos de una petición, no solo por una URL.

## Qué enseñan las demostraciones del PDF

El ejemplo de bienvenida empieza con una alerta para comprobar ejecución. Después muestra que un script puede cambiar el destino de un enlace de descarga. En estos apuntes usamos una dirección reservada sin destino real:

```javascript
// Ilustración neutral del efecto; no se ejecuta en esta web.
document.querySelector("a").href =
    "https://example.invalid/descarga-alterada";
```

**La alerta es una señal de ejecución; cambiar un enlace muestra una consecuencia para la persona usuaria.** Otras consecuencias posibles son leer información accesible al script, modificar la interfaz o enviar peticiones con la sesión existente.

Los efectos dependen del contexto. Una cookie marcada `HttpOnly` no se lee con `document.cookie`, aunque eso no impide por sí solo todas las acciones de un XSS. El acceso al portapapeles depende de las restricciones y permisos del navegador; no debe presentarse como una capacidad automática en cualquier página.

## Por qué una lista de palabras prohibidas no basta

Las diapositivas muestran codificaciones y eliminación de etiquetas. Un filtro que borra una única aparición de una cadena puede dejar una entrada que el navegador interprete de otra manera. **Hay que proteger el contexto de salida**, no perseguir una lista ilimitada de representaciones del ataque.

| Necesidad | Enfoque |
|---|---|
| Mostrar texto | Usar una operación como `textContent`. |
| Insertar datos en una plantilla | Usar el escape adecuado al contexto y mantener el autoescape. |
| Permitir una parte de HTML | Sanitizar con una herramienta mantenida y una política explícita. |
| Admitir enlaces | Validar esquemas y destinos según el contrato; codificar no decide si un destino está permitido. |

## Persistencia y archivos

Un XSS almacenado puede afectar a varias personas cuando consultan el contenido. Su gravedad depende de quién lo recibe, qué acciones permite y qué controles existen; no puede afirmarse que todos los almacenados sean siempre más graves que todos los reflejados.

:::info Aclaración sobre imágenes
Un JPEG o GIF no ejecuta JavaScript por el mero hecho de ser una imagen. En una subida de archivos importan el contenido real, el tipo servido, la forma de insertarlo y el contexto donde se abre. La extensión no es una garantía de seguridad ni una prueba de XSS.
:::

<details>
<summary>Pregunta: ¿si desaparece la ventana de alerta ya está solucionado?</summary>

No necesariamente. Hay que comprobar que la entrada deja de interpretarse como código, que no se realizan acciones inesperadas y que el contenido legítimo se sigue mostrando. Bloquear solo la palabra usada en una demostración no demuestra una corrección general.

</details>

Referencias: [OWASP, tipos de XSS](https://owasp.org/www-community/Types_of_Cross-Site_Scripting), [prevención según el contexto](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) y [subida de archivos](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html).
