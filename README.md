# Refactorización de código en un proyecto eCommerce

En un proyecto eCommerce utilizando Vtex, debes refactorizar el código existente para aplicar los principios de código limpio basados en YAGNI, DRY, SOLID y KISS. El objetivo es mejorar la mantenibilidad, escalabilidad y legibilidad del código. El proyecto involucra múltiples componentes, incluyendo el catálogo de productos, el carrito de compras y el proceso de pago. Debes identificar y eliminar redundancias, aplicar patrones de diseño adecuados y asegurar que el código siga los principios mencionados.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Principios de código limpio |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Identificación de áreas de mejora

**Objetivo:** Identificar partes del código que no siguen los principios de código limpio y proponer cambios.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Analiza el código existente para identificar violaciones de los principios YAGNI, DRY, SOLID y KISS.
- Proponer cambios para cada área identificada, justificando cómo cada cambio mejorará la mantenibilidad, escalabilidad y legibilidad del código.

**Entregable:** Documento con áreas de mejora identificadas y propuestas de cambios.

<details>
<summary>Pistas de conocimiento</summary>

- Principios de código limpio: YAGNI, DRY, SOLID, KISS
- Patrones de diseño comunes en desarrollo frontend

</details>

### Fase 2: Refactorización del código

**Objetivo:** Aplicar los cambios propuestos en la fase anterior para refactorizar el código.

**Tiempo estimado:** 6 horas

**Instrucciones:**

- Implementar los cambios propuestos en la fase anterior.
- Asegurar que el código refactorizado sigue los principios de código limpio.
- Realizar pruebas para verificar que el código refactorizado funciona correctamente.

**Entregable:** Código refactorizado siguiendo los principios de código limpio.

<details>
<summary>Pistas de conocimiento</summary>

- Técnicas de refactorización
- Herramientas de testing para frontend

</details>

### Fase 3: Revisión y documentación

**Objetivo:** Revisar el código refactorizado y documentar los cambios realizados.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Revisar el código refactorizado para asegurar que sigue los principios de código limpio y que no introduce nuevos errores.
- Documentar los cambios realizados, incluyendo las razones detrás de cada cambio y cómo mejora el código.
- Preparar un informe final que resuma el proceso de refactorización y los resultados obtenidos.

**Entregable:** Informe final con la revisión del código refactorizado y la documentación de los cambios realizados.

<details>
<summary>Pistas de conocimiento</summary>

- Prácticas de revisión de código
- Técnicas de documentación efectiva

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los principios de código limpio y por qué son importantes?
- **paraQueSirve**: ¿Cómo aplican los principios de código limpio en un proyecto eCommerce?
- **comoSeUsa**: ¿Cómo refactorizarías el código para seguir los principios de código limpio?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar los principios de código limpio?
- **queDecisionesImplica**: ¿Qué decisiones tomaste durante la refactorización y por qué?

## Criterios de Evaluacion

- Identificación correcta de áreas de mejora en el código existente.
- Aplicación efectiva de los principios de código limpio en la refactorización.
- Código refactorizado que sigue los principios de código limpio y funciona correctamente.
- Documentación clara y completa de los cambios realizados.
- Informe final que resume el proceso de refactorización y los resultados obtenidos.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npx tsc --noEmit
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
