---
title: "Configuración, privacidad y contraseñas"
slug: "/materiales/parte-2/configuracion-datos/"
sidebar_label: "Configuración y datos sensibles"
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 2, 28–30. <a href={useBaseUrl('/descargas/DAS_Parte_2_Final.pdf') + '#page=28'}>Abrir el PDF en la primera diapositiva</a>.

La seguridad depende también de las reglas del servidor, de los datos que se registran y de dónde viven los secretos.

## Reglas de Apache y versiones afectadas

La diapositiva 28 muestra reglas `RewriteRule` y referencias a grupos capturados. Ilustra que una configuración puede activar recorridos defectuosos de una implementación.

Como contexto histórico, Apache documenta **CVE-2006-3747**, un error de límites en `mod_rewrite` que dependía de determinadas reglas y de cómo se compilaba el servidor. No basta observar una regla parecida para declarar vulnerable cualquier Apache actual: hay que identificar producto, versión y condiciones.

**Lección práctica:** inventariar versiones, consultar el aviso del fabricante, revisar la configuración afectada y verificar la actualización. Las versiones antiguas citadas en un aviso explican la historia del parche; no son una recomendación de despliegue hoy.

[Aviso oficial de Apache](https://httpd.apache.org/security/vulnerabilities_13.html).

## No registrar la contraseña

Si una aplicación escribe usuario y contraseña en un archivo de registro, crea otra copia del secreto accesible a sistemas y personas que quizá no deberían conocerlo. Que el archivo sirva para depuración no elimina ese riesgo.

| Registrar | Evitar |
|---|---|
| Tipo de evento y resultado. | Contraseña, token de sesión o clave de API. |
| Identificador de correlación. | Información personal completa sin necesidad. |
| Motivo técnico suficiente para investigar. | Volcar peticiones enteras sin revisar sus campos. |

Si un secreto ya se ha expuesto, retirarlo del mensaje futuro no invalida sus copias anteriores: también hay que gestionar la exposición y reemplazarlo cuando corresponda.

## Credenciales dentro del código

Las diapositivas incluyen una conexión con credenciales como `scott` y `tiger`. El problema no es memorizar esos nombres, sino **distribuir secretos junto al programa**: pueden acabar en repositorios, copias, artefactos e historial.

La alternativa es proporcionar los secretos mediante un mecanismo gestionado para el entorno, con permisos mínimos y rotación. Separarlos en otro archivo que también se publica conserva el problema. Codificarlos en Base64 tampoco los convierte en secretos protegidos.

<details>
<summary>Pregunta: borramos una contraseña del último commit, ¿ya no está expuesta?</summary>

Puede seguir en el historial y en copias del repositorio. Hay que revocarla o cambiarla y revisar dónde se difundió, además de corregir la forma de suministrar credenciales.

</details>

Referencias: [OWASP, gestión de secretos](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) y [registro de eventos](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html).
