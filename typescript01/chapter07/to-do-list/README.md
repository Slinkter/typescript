# To-Do List — Capítulo 7

Proyecto práctico del **Capítulo 7** del libro *TypeScript Basics: Learn TypeScript from Scratch and Solidify Your Skills with Projects* (Nabendu Biswas, 2023).

La idea original del capítulo es una lista de tareas construida con TypeScript. En este repositorio está implementada como una app de una sola página con **Next.js (App Router), React, TypeScript y Tailwind CSS**.

## Funcionalidad

- Agregar tareas desde un formulario (se ignoran los títulos vacíos o solo con espacios).
- Marcar y desmarcar tareas como completadas; las completadas se muestran tachadas y en gris.
- Contador de tareas completadas sobre el total.
- Estado vacío cuando todavía no hay tareas.
- Tipado estricto de las tareas mediante la interfaz `Task` (`app/types/task.ts`).
- Formulario accesible: `label` asociada al input y botón `type="submit"`.

## Estructura relevante

```
app/
├── layout.tsx        # Layout raíz
├── globals.css       # Tailwind CSS
├── page.tsx          # Componentes TaskForm, TaskItem y página principal
└── types/task.ts     # Interfaz Task
```

## Requisitos

- Node.js 20 o superior
- pnpm (recomendado) o npm

## Comandos

Con pnpm:

```bash
pnpm install
pnpm dev      # servidor de desarrollo en http://localhost:3000
pnpm build    # build de producción
pnpm start    # sirve el build de producción
pnpm lint     # ESLint
```

Con npm, sustituye `pnpm` por `npm run` (por ejemplo, `npm run dev`).

## Estado del capítulo

Capítulo 7 completado y adaptado a Next.js + React + TypeScript + Tailwind CSS. No se modificaron las versiones de Next.js, React ni Tailwind respecto al andamiaje del proyecto.
