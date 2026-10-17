# Memoria del Agente y Reglas del Workspace (`typescript01`)

Este archivo es leído automáticamente por Antigravity (`agy`) al trabajar en `C:\Users\luisj\Github\typescript\typescript01`. Define el contexto de estudio, las reglas de entorno y el progreso actual del usuario.

---

## 1. Contexto del Proyecto y Libro de Estudio

- **Objetivo:** Estudiar capítulo por capítulo el libro *TypeScript Basics: Learn TypeScript from Scratch and Solidify Your Skills with Projects* (Nabendu Biswas, 2023) y desarrollar las prácticas en carpetas dedicadas (`chapterXX`).
- **Libro en Markdown (Limpio y Formateado):** `C:\Users\luisj\Github\typescript\typescript01\LIBRO-REACT-2023.md` (3,502 líneas, con 133 bloques de código cercados ` ```typescript ` / ` ```tsx ` / ` ```html ` y sin relleno editorial).
- **Imágenes del Libro (`Figure X-Y`):** Extraídas en `C:\Users\luisj\Github\typescript\typescript01\book_images\` (69 capturas de pantalla vinculadas dentro de `LIBRO-REACT-2023.md`).
- **PDF Original:** `C:\Users\luisj\Github\typescript\typescript01\LIBRO-REACT-2023.pdf`.

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
   - En los capítulos prácticos (como se hizo en `chapter07/to-do-list`), el usuario suele preferir o practicar tanto con TypeScript puro como modernizando los proyectos a **Next.js (App Router) + React + TypeScript + Tailwind CSS** en lugar de ferramentas obsoletas como Snowpack. Pregunta siempre si desea hacerlo en Vanilla TS (como en el libro) o modernizado con React/Next.js.

---

## 3. Mapa Exacto de Capítulos en `LIBRO-REACT-2023.md`

| Capítulo | Título | Rango de Líneas en `LIBRO-REACT-2023.md` | Carpeta de Práctica | Estado |
| :---: | :--- | :---: | :--- | :--- |
| **Intro** | Introduction | `20` – `25` | — | 📖 Leído |
| **Cap. 1** | Getting Started | `26` – `79` | `chapter01/` (`readme.md`, `main.ts`, `ejercicios.ts`) | ✅ Completado |
| **Cap. 2** | TypeScript Basics | `80` – `422` | `chapter02/` (`readme.md`, `basicsDemo.ts`, `ejercicios.ts`) | ✅ Completado |
| **Cap. 3** | The TypeScript Compiler | `423` – `489` | `chapter03/` (`readme.md`, `src/main.ts`, `src/ejercicios.ts`) | ✅ Completado |
| **Cap. 4** | Classes and Interfaces | `490` – `954` | `chapter04/` (`readme.md`, `classDemo.ts`, `interfaceDemo.ts`, `ejercicios.ts`) | ✅ Completado |
| **Cap. 5** | Advanced Types | `955` – `1210` | `chapter05/` (`advancedDemo.ts`, `guards.ts`, `overloading.ts`) | ✅ Completado |
| **Cap. 6** | Generics and Decorators | `1211` – `1593` | `chapter06/` (`genericDemo.ts`) y `chapter06a/` (`decoratorsDemo.ts`) | ✅ Completado |
| **Cap. 7** | Creating a To-do List Project with TypeScript | `1594` – `1751` | `chapter07/to-do-list/` (Adaptado a Next.js + React + Tailwind CSS) | ✅ Completado |
| **Cap. 8** | Creating a Drag-and-Drop Project with TypeScript | `1752` – `2612` | `chapter08/` (`readme.md` y `drag-drop/`) | ✅ Completado |
| **Cap. 9** | Improving the Drag-and-Drop Project | `2613` – `3024` | `chapter09/` (`readme.md` y `drag-drop/` con ES6 Modules + Webpack) | 📖 En estudio / Completado |
| **Cap. 10** | Creating a Party App in ReactJS with TypeScript | `3025` – `3299` | `chapter10/` (`readme.md` creado; proyecto práctico pendiente) | ⏳ **EN CURSO (Resumen listo)** |
| **Cap. 11** | Using React Redux with TypeScript | `3300` – `3502` | *(Por crear: `chapter11/`)* | 🔜 Pendiente (Último capítulo) |

---

## 4. Flujo de Estudio con el Usuario

Cuando el usuario pida estudiar un capítulo:
1. Lee únicamente el rango de líneas correspondiente en `LIBRO-REACT-2023.md`.
2. Si el capítulo hace referencia a alguna captura visual importante (`Figure X-Y`), puedes inspeccionar la imagen correspondiente en `book_images/fig_XX_pYY.jpeg` usando `view_file`.
3. Explica los conceptos de forma clara, sencilla y estructurada, guiando paso a paso la codificación dentro de la carpeta `chapterXX` correspondiente.
4. Al finalizar un capítulo, actualiza la tabla de estado en este archivo `AGENTS.md` y en `README.md`.
