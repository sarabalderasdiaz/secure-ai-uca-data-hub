---
title: "Configuración segura: el depurador no es un servicio público"
slug: "/materiales/parte-1/configuracion/"
sidebar_label: "Configuración de despliegue"
sidebar_position: 8
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 1, 35–36. <a href={useBaseUrl('/descargas/DAS_Parte_1_Final.pdf') + '#page=35'}>Abrir el PDF en la primera diapositiva</a>.

Un programa puede funcionar correctamente en desarrollo y quedar expuesto por su **configuración de despliegue**.

## El ejemplo de Flask

```python
# Configuración de desarrollo del ejemplo: no usar en producción.
app.run(host="0.0.0.0", debug=True)
```

`0.0.0.0` hace que el servidor escuche en todas las interfaces disponibles. `debug=True` activa facilidades de depuración. Si una ruta convierte `mes` a entero y recibe `abc`, puede producirse una excepción que muestre detalles internos mediante el depurador.

La documentación de Flask indica que el depurador permite ejecutar Python y no debe exponerse en producción. **No significa que cualquier `ValueError` ejecute código por sí mismo:** el peligro depende de la exposición y accesibilidad de la herramienta de depuración.

## Qué cambiar y cómo comprobarlo

| Control | Evidencia |
|---|---|
| Desactivar la depuración pública. | Una entrada inválida no muestra la consola ni una traza interna al cliente. |
| Validar el formato de `mes`. | La aplicación responde con un error previsto, sin romper el flujo. |
| Usar un servidor y una configuración adecuados para producción. | La configuración desplegada coincide con la revisada. |
| Registrar la incidencia sin secretos. | El equipo puede diagnosticarla sin exponer contraseñas o datos personales. |

<details>
<summary>¿Basta con cambiar la pantalla de error?</summary>

No. Hay que retirar el depurador del entorno expuesto, revisar la configuración efectiva y verificar que no se puede acceder por otra ruta. La pantalla es un síntoma; la configuración es parte de la causa.

</details>

Referencia: [Flask, depuración de errores](https://flask.palletsprojects.com/en/stable/debugging/).
