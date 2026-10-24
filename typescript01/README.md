# 📚 Estudio y Prácticas: TypeScript & React (`typescript01`)

Repositorio de estudio práctico capítulo por capítulo basado en el libro ***TypeScript Basics: Learn TypeScript from Scratch and Solidify Your Skills with Projects*** (Nabendu Biswas, 2023).

> **Estado actual:** ✅ **11/11 capítulos completados y verificados** (22 comprobaciones correctas, 0 fallos).
>
> Última actualización: **2026-10-23**.

---

## 📖 Recursos del Libro en este Repositorio

- **Libro completo en Markdown (Limpio y con Código Coloreado):** [`LIBRO-REACT-2023.md`](./LIBRO-REACT-2023.md)
- **Capturas y Figuras del Libro (`Figure 1-1`..`11-2`):** [`book_images/`](./book_images/) (69 imágenes extraídas)
- **PDF Original:** [`LIBRO-REACT-2023.pdf`](./LIBRO-REACT-2023.pdf)
- **Memoria para Antigravity (`agy`):** [`AGENTS.md`](./AGENTS.md) *(se carga automáticamente en cada sesión)*

---

## 🗺️ Progreso por Capítulos

| Cap. | Tema / Proyecto | Líneas en `LIBRO-REACT-2023.md` | Carpeta de Práctica | Estado |
| :---: | :--- | :---: | :--- | :--- |
| **01** | Getting Started | `26` – `79` | [`chapter01/`](./chapter01/) (`readme.md`, `main.ts`, `ejercicios.ts`) | ✅ Completado |
| **02** | TypeScript Basics | `80` – `422` | [`chapter02/`](./chapter02/) (`readme.md`, `basicsDemo.ts`, `ejercicios.ts`) | ✅ Completado |
| **03** | The TypeScript Compiler | `423` – `489` | [`chapter03/`](./chapter03/) (`readme.md`, `src/main.ts`, `src/ejercicios.ts`) | ✅ Completado |
| **04** | Classes and Interfaces | `490` – `954` | [`chapter04/`](./chapter04/) (`readme.md`, `classDemo.ts`, `interfaceDemo.ts`, `ejercicios.ts`) | ✅ Completado |
| **05** | Advanced Types | `955` – `1210` | [`chapter05/`](./chapter05/) (`readme.md`, `src/advancedDemo.ts`, `src/ejercicios.ts`) | ✅ Completado |
| **06** | Generics and Decorators | `1211` – `1593` | [`chapter06/`](./chapter06/) y [`chapter06a/`](./chapter06a/) | ✅ Completado |
| **07** | Project: To-do List with TypeScript | `1594` – `1751` | [`chapter07/to-do-list/`](./chapter07/to-do-list/) *(Next.js + Tailwind)* | ✅ Completado |
| **08** | Project: Drag-and-Drop with TypeScript | `1752` – `2612` | [`chapter08/`](./chapter08/) (`readme.md` y `drag-drop/`) | ✅ Completado |
| **09** | Improving the Drag-and-Drop Project (ES6 + Webpack) | `2613` – `3024` | [`chapter09/`](./chapter09/) (`readme.md` y `drag-drop/`) | ✅ Completado |
| **10** | Project: Party App in ReactJS with TypeScript | `3025` – `3299` | [`chapter10/party-app/`](./chapter10/party-app/) *(Vite + React + TS)* | ✅ Completado |
| **11** | Using React Redux with TypeScript | `3300` – `3502` | [`chapter11/redux-app/`](./chapter11/redux-app/) *(Vite + Redux clásico)* | ✅ Completado |

---

## 🧱 Stack de los Proyectos

| Cap. | Stack | Comando principal |
| :---: | :--- | :--- |
| 01–05 | TypeScript puro + `tsc` | `npx tsc` / `node archivo.js` |
| 06 | Genéricos y decoradores (`experimentalDecorators`) | `npx tsc` |
| 06a | Decoradores + DOM | `npx tsc` |
| 07 | Next.js 16 + React 19 + Tailwind 4 | `pnpm dev` / `pnpm build` |
| 08 | TypeScript + DOM + Drag & Drop | `npm run build` + `npx serve .` |
| 09 | ES6 Modules + Webpack 5 + `ts-loader` | `pnpm build` / `pnpm dev` |
| 10 | Vite 6 + React 18 + TypeScript | `npm run dev` / `npm run build` |
| 11 | Vite 6 + React 18 + Redux 4 + `redux-thunk` 2 | `npm run dev` / `npm run build` |

---

## ⚙️ Requisitos

- **Node.js 20+** (probado con Node 24).
- **npm 10+** y, para los capítulos 07 y 09, **pnpm 9+**.
- Bash para ejecutar `scripts/verify-all.sh` (Linux/macOS/WSL/Git Bash).

```bash
# Instalar dependencias de las apps
cd chapter07/to-do-list && pnpm install
cd ../chapter10/party-app && npm install
cd ../chapter11/redux-app && npm install
```

---

## ✅ Verificación Global

```bash
./scripts/verify-all.sh
```

Comprueba tipos (`tsc --noEmit`), ejecución con Node, compilación de los capítulos TS y builds de las apps 07–11. Resultado esperado: **22 correctos, 0 fallos**.

### Correcciones destacadas

- **Cap. 3:** el `index.html` ahora carga `dist/main.js` y `dist/ejercicios.js`.
- **Cap. 4:** erratas del libro corregidas y documentadas.
- **Cap. 6:** genéricos y decoradores completos (antes eran archivos casi vacíos).
- **Cap. 7:** corregido el tachado de tareas y los placeholders.
- **Cap. 9:** Webpack `publicPath` corregido y `pnpm dev` añadido.
- **Cap. 10:** Party App implementada (los 4 archivos estaban en 0 bytes).
- **Cap. 11:** app Redux creada desde cero.

---

## 📝 Decisiones y Notas

- **Cap. 07:** se mantiene la adaptación a Next.js + Tailwind en lugar de Snowpack.
- **Cap. 09:** Webpack genera `dist/bundle.js`; `pnpm dev` levanta `webpack serve` en `http://localhost:8080`.
- **Cap. 10:** se mantiene Vite + React 18 (el andamiaje ya existía); no se migró a Next.js.
- **Cap. 11:** Redux clásico fiel al libro, con `redux-thunk@2.4.2` para ser compatible con Redux 4. Una variante con Redux Toolkit queda como mejora opcional.
- **Artefactos:** los `.js` de los capítulos 01, 02, 04, 06 y 06a se versionan para poder abrir sus `index.html` sin compilar; los `dist/` y `node_modules/` están ignorados.
- **Archivo personal:** `chapter05/src/example.ts` (práctica del usuario sobre Discriminated Unions) está corregido y versionado junto con `chapter05/index.html`.
- **Memoria en raíz de Git:** `../AGENTS.md` enlaza automáticamente a `./AGENTS.md` para que Antigravity cargue siempre el contexto sin importar si se abre desde la raíz del repositorio o desde `typescript01/`.
- **Erratas del libro:** las correcciones están documentadas en los readmes de los capítulos 02, 04, 06, 06a y 11.

---

## 🤖 Cómo Retomar el Estudio en Futuras Sesiones con `agy`

Gracias al archivo [`AGENTS.md`](./AGENTS.md), cuando abras cualquier sesión nueva en esta carpeta, `agy` ya sabrá dónde está el libro, en qué línea empieza cada capítulo, que tu Python corre en Docker (`py_mamba-jupyter-mamba:latest`) y en qué capítulo vas.

Solo tienes que decirle cosas como:
- *"Explícame de nuevo los decoradores del Capítulo 6"*
- *"Agrega ejercicios al Capítulo 9"*
- *"Ejecuta `./scripts/verify-all.sh` y revisa que todo siga en verde"*
- *"Moderniza el Capítulo 11 con Redux Toolkit"*
