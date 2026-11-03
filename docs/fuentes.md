---
title: "Fuentes, autoría y aclaraciones"
slug: "/fuentes/"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Material de partida

**Sara Balderas Díaz y Gabriel Guerrero Contreras.** Construcción de aplicaciones seguras, partes 1 y 2. PDF finales facilitados para esta edición: 52 y 51 páginas. Las [descargas](descargas.md) conservan sus bytes originales; `contenido/fuentes_originales.json` recoge nombres y huellas SHA-256.

La web es una adaptación didáctica: desarrolla explicaciones y reorganiza la lectura por sesiones de clase. El <a href={useBaseUrl('/descargas/mapa_diapositivas.csv')}>mapa de diapositivas</a> permite volver a cada página original.

## Referencias utilizadas

| Tema | Fuente primaria o referencia del material |
|---|---|
| Ataques observados en 2024 | [Akamai, State of Apps and API Security 2025](https://www.akamai.com/newsroom/press-release/akamai-research-web-attacks-up-33-apis-emerge-as-primary-targets). |
| Tiempo de corrección | [Veracode, State of Software Security 2025](https://www.veracode.com/resources/analyst-reports/state-of-software-security-2025/). |
| Tipos de debilidad | [MITRE, Top 25 de 2025](https://cwe.mitre.org/top25/archive/2025/2025_cwe_top25.html) y [metodología](https://cwe.mitre.org/top25/archive/2025/2025_methodology.html). |
| Identificadores y severidad | [Programa CVE](https://www.cve.org/) y [FIRST, CVSS 4.0](https://www.first.org/cvss/v4.0/specification-document). |
| XSS, SQL, registros y secretos | [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/); enlaces específicos junto a los temas. |
| Semántica de Python | [Documentación de Python](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values). |
| Java: conversiones y concurrencia | [JLS, capítulo 5](https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html) y [capítulo 17](https://docs.oracle.com/javase/specs/jls/se25/html/jls-17.html). |
| Depurador expuesto | [Documentación de Flask](https://flask.palletsprojects.com/en/stable/debugging/). |
| Apache, ejemplo histórico | [Avisos de seguridad de Apache HTTP Server](https://httpd.apache.org/security/vulnerabilities_13.html). |
| TSB, Knight y Kioto | Fuentes oficiales de [FCA](https://www.fca.org.uk/news/press-releases/tsb-fined-48m-operational-resilience-failings), [SEC](https://www.sec.gov/newsroom/press-releases/2013-222) y [Universidad de Kioto](https://www.iimc.kyoto-u.ac.jp/en/news/trouble/211216056978). |

Las referencias de 2025 se conservan porque son las utilizadas en las diapositivas; no se etiquetan como «el último informe». Enlaces revisados para esta edición el **28/10/2026**.

## Bibliografía de las diapositivas

- Brian Chess y Jacob West. *Secure Programming with Static Analysis*. Addison-Wesley, 2007. Las figuras de métricas reproducen las páginas del material entregado y mantienen su atribución.
- Julia H. Allen, Sean Barnum, Robert J. Ellison, Gary McGraw y Nancy R. Mead. *Software Security Engineering: A Guide for Project Managers*. Addison-Wesley, **2008**, según la [ficha editorial](https://www.informit.com/store/software-security-engineering-a-guide-for-project-managers-9780321509178). Se aclara aquí el año 2004 que aparece en la bibliografía del PDF; esto no verifica por sí solo la procedencia de cada figura.
- Los esquemas de confiabilidad y fiabilidad de la parte 2 están atribuidos en el material a **Sommerville, 2005**. Se conserva esa atribución sin inventar edición o página no facilitadas.

## Aclaraciones incorporadas en los apuntes

| Origen | Aclaración |
|---|---|
| Parte 1, 29–30 | Un límite de filas devueltas no garantiza un coste acotado de consulta. |
| Parte 1, 40 | El ejemplo `int` a `short` es rechazado conforme a Java; no es un falso positivo de seguridad del compilador. |
| Parte 1, 45–46 | La doble comprobación necesita contexto de concurrencia; `strncpy` no es una sustitución universalmente segura. |
| Parte 2, 6 y 9 | El primer gráfico muestra recuentos; el segundo utiliza una escala temporal logarítmica. |
| Parte 2, 18–27 | Tipos de XSS, capacidad real del script y tratamiento de archivos requieren matices de contexto. |
| Parte 2, 36–38 | TSB tuvo problemas de distinta duración; Knight perdió dólares; Kioto informa TB. |
| Parte 2, 49 | El relato del gasoducto no se presenta como un ciberataque confirmado. |

## Autoría y reutilización

Se conserva la autoría docente conjunta y la atribución de las fuentes. Los materiales propios se ofrecen conforme a la [licencia de uso personal para estudio](licencia.md). Esta no sustituye las condiciones de diapositivas, capturas, figuras o software de terceros. Las condiciones de reutilización de cada componente deben respetarse. El emblema del Hub es un gráfico propio de este portal, no un logotipo institucional oficial.
