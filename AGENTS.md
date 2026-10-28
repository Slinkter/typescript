# Memoria Raíz del Repositorio (`typescript`)

Este repositorio contiene el workspace principal de estudio y prácticas del libro ***TypeScript Basics: Learn TypeScript from Scratch and Solidify Your Skills with Projects*** (Nabendu Biswas, 2023) dentro de la carpeta [`typescript01/`](./typescript01/).

> **Nota para Antigravity (`agy`):** Si la sesión se inició en la raíz del repositorio (`/home/user/github/typescript` o `C:\Users\luisj\Github\typescript`), todas las reglas de entorno, el mapa de líneas del libro (`LIBRO-REACT-2023.md`) y el estado de los capítulos 01–11 se importan automáticamente a continuación desde [`typescript01/AGENTS.md`](./typescript01/AGENTS.md).

@[Memoria y Reglas del Proyecto typescript01](./typescript01/AGENTS.md)

## Playgrounds fuera de `typescript01/`

Carpetas personales de práctica, **no** forman parte del recorrido de los 11 capítulos y no están cubiertas por `typescript01/scripts/verify-all.sh`:

| Carpeta | Tema | Comandos | Documentación |
| :--- | :--- | :--- | :--- |
| `typescript02/` | Conditional types, `infer`, utility types, clases, `static` | `npm run typecheck` / `npm run build` / `npm run dev` | [`typescript02/README.md`](./typescript02/README.md) |
| `typescript04/` | Mapped types (en progreso) | `npm run typecheck` / `npm run build` / `npm run dev` | [`typescript04/README.md`](./typescript04/README.md) |

Ambas usan TypeScript 7 y `strict: true`. Cada una tiene su propio `.gitignore` que impide versionar salidas de `tsc` dentro de `src/`; la compilación va siempre a `dist/`.

**Guía de Git:** el [`README.md`](./README.md) raíz incluye la sección “🌿 Git para estudiar y repasar” (merge-base, fast-forward, merge vs rebase, reflog, conflictos, Conventional Commits y el caso real resuelto el 28/10/2026).
