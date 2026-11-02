---
title: "Inyección SQL: datos que alteran una consulta"
slug: "/materiales/parte-1/inyeccion-sql/"
sidebar_label: "Inyección SQL"
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> **Diapositivas de origen:** parte 1, 17–19. <a href={useBaseUrl('/descargas/DAS_Parte_1_Final.pdf') + '#page=17'}>Abrir el PDF en la primera diapositiva</a>.

El banco ficticio quiere mostrar una cuenta que **pertenezca al usuario autenticado**. La consulta incluye esa condición, pero construye el SQL mezclándolo con una entrada sin parametrizar.

## El ejemplo vulnerable

```python
cuenta = request.args["cuenta"]
usuario_id = current_user.id
query = f"""SELECT id, titular, iban, saldo FROM cuentas
            WHERE usuario_id = {usuario_id} AND id = {cuenta}"""
db.execute(query)
```

Si el usuario es el 42 y solicita la cuenta 100, la condición es la esperada. Si introduce `0 OR 1=1`, la consulta cambia de significado:

```sql
WHERE usuario_id = 42 AND id = 0 OR 1=1
```

Como `AND` tiene precedencia sobre `OR`, equivale a:

```sql
WHERE (usuario_id = 42 AND id = 0) OR 1=1
```

La segunda parte es verdadera para todas las filas. **La entrada ya no representa un identificador: forma parte de la lógica SQL.**

## Separar consulta y valores

Esta adaptación docente usa los parámetros de Python `sqlite3`:

```python
fila = conexion.execute(
    """SELECT id, titular, iban, saldo FROM cuentas
       WHERE usuario_id = ? AND id = ?""",
    (usuario_id, cuenta),
).fetchone()
```

El motor recibe una estructura SQL fija y dos valores. La sintaxis del marcador depende de la biblioteca: no hay que sustituir `?` por interpolación de cadenas.

**Parametrizar evita que el valor cambie la consulta; mantener `usuario_id` comprueba la pertenencia.** Son dos controles con funciones distintas. También puede validarse que `cuenta` tenga el formato de identificador previsto.

## Evidencia mínima

| Petición | Resultado esperado |
|---|---|
| Cuenta propia existente | Devuelve esa cuenta. |
| Cuenta de otra persona | No devuelve sus datos. |
| `0 OR 1=1` | Se rechaza por formato o se trata como un valor sin alterar el SQL. |

<details>
<summary>Para pensar: ¿parametrizar basta si quitamos la condición de usuario?</summary>

No. Evitaría la inyección, pero podría permitir consultar cuentas ajenas por su identificador. Habríamos eliminado CWE-89 y mantenido un problema de autorización.

</details>

Referencia: [OWASP, prevención de inyección SQL](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).
