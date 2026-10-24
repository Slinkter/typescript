# Memoria del Agente y Reglas del Workspace (`typescript01`)

Este archivo es leído automáticamente por Antigravity (`agy`) al trabajar en `C:\Users\luisj\Github\typescript\typescript01`. Define el contexto de estudio, las reglas de entorno y el progreso actual del usuario.

---

## 1. Contexto del Proyecto y Libro de Estudio

- **Objetivo:** Estudiar capítulo por capítulo el libro *TypeScript Basics: Learn TypeScript from Scratch and Solidify Your Skills with Projects* (Nabendu Biswas, 2023) y desarrollar las prácticas en carpetas dedicadas (`chapterXX`).
- **Ruta del workspace:** `C:\Users\luisj\Github\typescript\typescript01` en Windows; en este entorno Linux: `/home/user/github/typescript/typescript01`.
- **Libro en Markdown (Limpio y Formateado):** [`LIBRO-REACT-2023.md`](./LIBRO-REACT-2023.md) (3,502 líneas, con 133 bloques de código cercados ` ```typescript ` / ` ```tsx ` / ` ```html ` y sin relleno editorial).
- **Imágenes del Libro (`Figure X-Y`):** Extraídas en [`book_images/`](./book_images/) (69 capturas de pantalla vinculadas dentro de `LIBRO-REACT-2023.md`).
- **PDF Original:** [`LIBRO-REACT-2023.pdf`](./LIBRO-REACT-2023.pdf).

---

## 2. Reglas Críticas del Entorno del Usuario

1. **Python vive en Docker (NO en Windows):**
   - El sistema Windows del usuario **no tiene Python instalado localmente**.
   - Siempre que se necesite ejecutar Python o herramientas de procesamiento de datos/archivos, **debe usarse Docker** con la imagen local `py_mamba-jupyter-mamba:latest` (o el contenedor `datascience_mamba_env`, que tiene Python 3.13 / Conda en `/opt/conda/bin/python`).
   - Ejemplo para correr scripts montando esta carpeta:
     ```powershell
     docker run --rm -v "C:\Users\luisj\Github\typescript\typescript01:/libros" -w /libros py_mamba-jupyter-mamba:latest python ...
     ```
2. **Lectura Eficiente por Capítulos:**
   - Para estudiar o responder dudas de un capítulo específico, **NO leas todo `LIBRO-REACT-2023.md`**. Usa `view_file` con `StartLine` y `EndLine` guiándote por el Mapa Exacto de Capítulos de abajo.
3. **Modernización de Proyectos (Preferencia del Usuario):**
   - En los capítulos prácticos el usuario prefiere modernizar herramientas obsoletas (Snowpack, CRA) a stacks actuales, manteniendo el objetivo didáctico del libro.
   - Decisiones ya tomadas: **Cap. 7** → Next.js + Tailwind; **Cap. 10** → Vite + React; **Cap. 11** → Vite + React + Redux clásico.
   - Para cambios de stack futuros, pregunta antes de migrar una app ya funcional.

---

## 3. Mapa Exacto de Capítulos en `LIBRO-REACT-2023.md`

| Capítulo | Título | Rango de Líneas en `LIBRO-REACT-2023.md` | Carpeta de Práctica | Estado |
| :---: | :--- | :---: | :--- | :--- |
| **Intro** | Introduction | `20` – `25` | — | 📖 Leído |
| **Cap. 1** | Getting Started | `26` – `79` | `chapter01/` (`readme.md`, `main.ts`, `ejercicios.ts`) | ✅ Completado |
| **Cap. 2** | TypeScript Basics | `80` – `422` | `chapter02/` (`readme.md`, `basicsDemo.ts`, `ejercicios.ts`, `luis.ts`) | ✅ Completado |
| **Cap. 3** | The TypeScript Compiler | `423` – `489` | `chapter03/` (`readme.md`, `src/main.ts`, `src/ejercicios.ts`) | ✅ Completado |
| **Cap. 4** | Classes and Interfaces | `490` – `954` | `chapter04/` (`readme.md`, `classDemo.ts`, `interfaceDemo.ts`, `ejercicios.ts`) | ✅ Completado |
| **Cap. 5** | Advanced Types | `955` – `1210` | `chapter05/` (`readme.md`, `src/advancedDemo.ts`, `src/ejercicios.ts`, `src/example.ts`) | ✅ Completado |
| **Cap. 6** | Generics and Decorators | `1211` – `1593` | `chapter06/` (`genericDemo.ts` + `readme.md`) y `chapter06a/` (`decoratorsDemo.ts` + `readme.md`) | ✅ Completado |
| **Cap. 7** | Creating a To-do List Project with TypeScript | `1594` – `1751` | `chapter07/to-do-list/` (Adaptado a Next.js + React + Tailwind CSS) | ✅ Completado |
| **Cap. 8** | Creating a Drag-and-Drop Project with TypeScript | `1752` – `2612` | `chapter08/` (`readme.md` y `drag-drop/`) | ✅ Completado |
| **Cap. 9** | Improving the Drag-and-Drop Project | `2613` – `3024` | `chapter09/` (`readme.md` y `drag-drop/` con ES6 Modules + Webpack) | ✅ Completado |
| **Cap. 10** | Creating a Party App in ReactJS with TypeScript | `3025` – `3299` | `chapter10/` (`readme.md` y `party-app/` con Vite + React + TS) | ✅ Completado |
| **Cap. 11** | Using React Redux with TypeScript | `3300` – `3502` | `chapter11/` (`readme.md` y `redux-app/` con Vite + React + Redux clásico) | ✅ Completado |

---

## 4. Flujo de Estudio con el Usuario

Cuando el usuario pida estudiar un capítulo:
1. Lee únicamente el rango de líneas correspondiente en `LIBRO-REACT-2023.md`.
2. Si el capítulo hace referencia a alguna captura visual importante (`Figure X-Y`), puedes inspeccionar la imagen correspondiente en `book_images/fig_XX_pYY.jpeg` usando `view_file`.
3. Explica los conceptos de forma clara, sencilla y estructurada, guiando paso a paso la codificación dentro de la carpeta `chapterXX` correspondiente.
4. Al finalizar un capítulo, actualiza la tabla de estado en este archivo `AGENTS.md` y en `README.md`.

---

## 5. Verificación Global

Desde la raíz del proyecto:

```bash
./scripts/verify-all.sh
```

El script comprueba:

- `tsc --noEmit` en los capítulos 01–06a, 08 y 09.
- Ejecución con Node de las demos de 01, 02, 04, 06 y 06a.
- Compilación de 03 y 05.
- `build` de las apps de 07, 08, 09, 10 y 11.

**Resultado esperado:** 22 comprobaciones correctas, 0 fallos.

### Notas de correcciones recientes

- **Cap. 2:** `basicsDemo.js` y `luis.js` recompilados y sincronizados con sus respectivos `.ts`.
- **Cap. 3:** `index.html` ahora carga `dist/main.js` y `dist/ejercicios.js` (antes apuntaba a `dist/example.js`).
- **Cap. 4:** erratas del libro corregidas y documentadas (template strings rotos, `kapil` con `'Shobha'`); `ejercicios.js` incluido en `verify-all.sh`.
- **Cap. 5:** `src/example.ts` corregido y versionado; `index.html` carga `dist/advancedDemo.js`, `dist/ejercicios.js` y `dist/example.js`.
- **Cap. 6:** se completaron genéricos y decoradores; `chapter06a/tsconfig.json` habilita `experimentalDecorators`.
- **Cap. 7:** corregido el `line-through` de las tareas y los placeholders.
- **Cap. 9:** `publicPath` de Webpack corregido a `/dist/` y añadido `pnpm dev`.
- **Cap. 10:** Party App implementada (los 4 archivos estaban vacíos).
- **Cap. 11:** app Redux creada con Redux clásico; `redux-thunk@2.4.2` para compatibilidad con Redux 4.

---

## 6. Estado Actual del Workspace (2026-10-23)

**Todos los capítulos están completados y verificados.** No queda trabajo obligatorio del plan.

| Cap. | Estado | Stack / entrada |
| :---: | :--- | :--- |
| 01–05 | ✅ | TypeScript puro + `tsc` |
| 06 / 06a | ✅ | Genéricos + decoradores (`experimentalDecorators`) |
| 07 | ✅ | Next.js 16 + React 19 + Tailwind 4 (`pnpm dev`) |
| 08 | ✅ | TS + DOM (`npm run build`, `npx serve .`) |
| 09 | ✅ | ES6 Modules + Webpack 5 (`pnpm build`, `pnpm dev`) |
| 10 | ✅ | Vite 6 + React 18 (`npm run dev`) |
| 11 | ✅ | Vite 6 + React 18 + Redux 4 + `redux-thunk` 2 (`npm run dev`) |

**Comprobación rápida:**

```bash
./scripts/verify-all.sh   # 22 correctos, 0 fallos
```

**Archivo personal versionado:** `chapter05/src/example.ts` es la práctica del usuario sobre Discriminated Unions y ahora está corregida y versionada junto con `chapter05/index.html`.
**Blindaje de memoria en raíz Git:** Existe `/home/user/github/typescript/AGENTS.md` apuntando a este archivo para que Antigravity (`agy`) cargue siempre esta memoria incluso si el workspace se abre en la carpeta raíz del repositorio Git.

---

## 7. Convenciones para Futuras Sesiones

1. **Idioma:** comentarios, readmes y explicaciones en **español**; nombres de código en inglés cuando el libro los usa.
2. **TypeScript estricto:** `strict: true`; evitar `any`. Para demostrar errores intencionales del libro, usar `// @ts-expect-error` con una explicación, no desactivar `strict`.
3. **Fidelidad didáctica:** si el libro tiene una errata, corregirla y documentarla en una sección “Erratas corregidas” del readme del capítulo.
4. **Un capítulo = una carpeta:** no mezclar prácticas personales con demos del libro. No borrar archivos personales (`luis.ts`, `example.ts`) sin confirmación.
5. **Builds:** toda app debe pasar su build antes de darse por terminada. No actualizar dependencias mayores “por actualizar”.
6. **Commits:** formato Conventional Commits, por ejemplo `feat(ch10): implementar party app` o `docs: actualizar memoria`.
7. **Artefactos:** `node_modules/`, `dist/` y `.next/` están ignorados. Los `.js` de 01, 02, 04, 06 y 06a se versionan porque los carga su `index.html` (recuerda ejecutar `npx tsc` en esa carpeta si modificas su `.ts`).
8. **Rutas del libro:** usar el mapa de la sección 3 para leer solo el rango necesario; no cargar el libro completo.

---

## 8. Pendientes Opcionales (no bloqueantes)

- Añadir una variante del Capítulo 11 con **Redux Toolkit** (`configureStore`, `createSlice`).
- Añadir pruebas automatizadas de navegador con **Playwright** para 07, 08, 09, 10 y 11.
- Migrar el Capítulo 10 a Next.js si el usuario quiere practicar App Router (hoy usa Vite).
- Unificar los capítulos 01–06 en una sola configuración raíz de TypeScript si el proyecto crece.
