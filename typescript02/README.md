# 🧪 `typescript02` — Playground de tipos avanzados

Carpeta de práctica **personal**, fuera del recorrido del libro *TypeScript Basics* (que vive en [`../typescript01`](../typescript01)). Aquí se experimenta con tipos del sistema que aparecen en el curso de referencia y se prueban variantes propias.

Cada archivo es una lección autocontenida dentro de `src/` y se compila a `dist/` (ignorado por Git).

---

## 1. Contenido

| Archivo | Tema | Idea clave |
| :--- | :--- | :--- |
| [`src/index.01.ts`](./src/index.01.ts) | Conditional types + `infer` | `Extraer<T> = T extends Promise<infer U> ? U : T` deduce el tipo interno de una promesa. |
| [`src/index.02.ts`](./src/index.02.ts) | `infer` en firmas de función | `ObtenerRetorno<T>` extrae el tipo de retorno de una función. |
| [`src/index.03.ts`](./src/index.03.ts) | Clases, herencia y encapsulación | `protected`, reescritura de métodos, getters/setters (`get _email`). |
| [`src/index.04.ts`](./src/index.04.ts) | Miembros `static` | `static countUser` cuenta instancias; `static isAdult()` es un helper de clase. |
| [`src/index.ts`](./src/index.ts) | Utility types | `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Awaited`. |

> `index.ts` solo declara tipos: al compilar genera un `dist/index.js` prácticamente vacío. Es normal.

---

## 2. Cómo ejecutarlo

```bash
npm install          # solo la primera vez
npm run typecheck    # tsc --noEmit: comprueba tipos sin generar nada
npm run build        # compila src/ -> dist/
npm run dev          # compila y ejecuta dist/index.04.js (la demo con salida por consola)
```

Para ejecutar cualquier otra lección:

```bash
npm run build && node dist/index.03.js
```

---

## 3. Conceptos que conviene retener

### 3.1. `infer` — capturar un tipo dentro de un condicional

```typescript
type Extraer<T> = T extends Promise<infer U> ? U : T;
type Users = Extraer<Promise<User[]>>; // User[]
```

`infer U` no declara una variable de valor: le pide al compilador *"deduce el tipo que encaja aquí"*.

### 3.2. Utility types

| Utility | Qué hace |
| :--- | :--- |
| `Partial<T>` | Todas las propiedades pasan a ser opcionales. |
| `Required<T>` | Todas pasan a ser obligatorias. |
| `Readonly<T>` | Todas pasan a ser de solo lectura. |
| `Pick<T, K>` | Conserva **solo** las claves `K`. |
| `Omit<T, K>` | Elimina las claves `K`. |
| `Awaited<T>` | Resuelve el tipo que devuelve una promesa. |

### 3.3. `static` frente a instancia

Un miembro `static` pertenece a la **clase**, no al objeto: se accede como `User.countUser`, nunca como `usuario.countUser`.

---

## 4. Correcciones aplicadas

- `index.ts`: la unión decía `"feminio"`; corregido a `"femenino"`.
- `index.03.ts`: `console.log(angel.getInfo)` imprimía la **referencia** de la función; ahora se invoca (`angel.getInfo()`).
- Se eliminó `src/index.04.js`, un artefacto de compilación que estaba versionado dentro de `src/` (la salida correcta va a `dist/`).
- `tsconfig.json`: se retiró `verbatimModuleSyntax`, incompatible con `module: CommonJS` en cuanto se escriba un `import`.
- `package.json`: añadidos los scripts `build`, `typecheck` y `dev`.

---

## 5. Convenciones

- `strict: true` y sin `any`.
- Comentarios y documentación en español; identificadores en inglés cuando el ejemplo lo pide.
- `dist/` y `node_modules/` no se versionan.
