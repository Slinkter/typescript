# 📚 Repositorio TypeScript & React (`typescript`)

Repositorio principal de prácticas y proyectos con **TypeScript, React, Next.js, Vite y Redux**.

> **Estado actual:** ✅ **11/11 capítulos completados y verificados** (`22 correctos, 0 fallos`).

## 📂 Estructura Principal

- **[`typescript01/`](./typescript01/)** — Estudio completo (Capítulos 1 al 11) del libro *TypeScript Basics: Learn TypeScript from Scratch and Solidify Your Skills with Projects* (Nabendu Biswas, 2023):
  - 📖 [Guía y Estado de los 11 Capítulos (`typescript01/README.md`)](./typescript01/README.md)
  - 🤖 [Memoria del Agente (`typescript01/AGENTS.md`)](./typescript01/AGENTS.md)
  - 📘 [Libro en Markdown (`typescript01/LIBRO-REACT-2023.md`)](./typescript01/LIBRO-REACT-2023.md)
- **[`AGENTS.md`](./AGENTS.md)** — Puente de memoria en la raíz del repositorio Git para que Antigravity (`agy`) cargue automáticamente las reglas sin importar si abres la sesión desde la raíz o desde `typescript01/`.
- **Playgrounds personales** (fuera del recorrido del libro):
  - [`typescript02/`](./typescript02/) — Conditional types, `infer`, utility types, clases y `static`. Ver [README](./typescript02/README.md).
  - [`typescript04/`](./typescript04/) — Mapped types (en progreso). Ver [README](./typescript04/README.md).

## 🗺️ Resumen de Capítulos (`typescript01/`)

| Cap. | Tema / Proyecto | Carpeta | Stack | Estado |
| :---: | :--- | :--- | :--- | :---: |
| **01–05** | Fundamentos, Compilador, Clases, Interfaces y Tipos Avanzados | [`typescript01/chapter01`](./typescript01/chapter01) .. [`chapter05`](./typescript01/chapter05) | TypeScript + `tsc` | ✅ |
| **06 / 06a** | Genéricos y Decoradores | [`typescript01/chapter06`](./typescript01/chapter06) / [`chapter06a`](./typescript01/chapter06a) | TS + `experimentalDecorators` | ✅ |
| **07** | Proyecto: To-Do List | [`typescript01/chapter07/to-do-list`](./typescript01/chapter07/to-do-list) | Next.js 16 + React 19 + Tailwind 4 | ✅ |
| **08** | Proyecto: Drag-and-Drop | [`typescript01/chapter08/drag-drop`](./typescript01/chapter08/drag-drop) | TypeScript + DOM | ✅ |
| **09** | Proyecto: Drag-and-Drop Modular | [`typescript01/chapter09/drag-drop`](./typescript01/chapter09/drag-drop) | ES6 Modules + Webpack 5 | ✅ |
| **10** | Proyecto: Party App | [`typescript01/chapter10/party-app`](./typescript01/chapter10/party-app) | Vite 6 + React 18 + TS | ✅ |
| **11** | Proyecto: Bank App con React Redux | [`typescript01/chapter11/redux-app`](./typescript01/chapter11/redux-app) | Vite 6 + React 18 + Redux 4 + Thunk | ✅ |

## ✅ Verificación Global

```bash
./typescript01/scripts/verify-all.sh
```
