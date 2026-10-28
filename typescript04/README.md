# 🧪 `typescript04` — Playground de mapped types (en progreso)

Carpeta de práctica **personal**, fuera del recorrido del libro *TypeScript Basics* (que vive en [`../typescript01`](../typescript01)). Recuperada del remoto el 26/10/2026; en el commit original venía con el nombre de paquete equivocado (`typescript03`).

---

## 1. Estado actual

| Archivo | Tema | Estado |
| :--- | :--- | :--- |
| [`src/index.ts`](./src/index.ts) | Mapped types sobre `Usuario` | ⏳ En progreso (el mapped type está comentado) |

Contenido útil hoy: el tipo base `Usuario` con una unión literal correcta (`"masculino" | "femenino"`).

```typescript
type Usuario = {
  nombre: string;
  edad: number;
  direccion: string;
  sexo: "masculino" | "femenino";
};
```

El ejercicio pendiente es reescribir a mano lo que hacen `Partial` y compañía:

```typescript
// Equivalente a Partial<Usuario>
type Opcional = {
  [K in keyof Usuario]?: Usuario[K];
};
```

Descomentarlo y comprobar con `npm run typecheck` que equivale a `Partial<Usuario>`.

---

## 2. Cómo ejecutarlo

```bash
npm install          # solo la primera vez
npm run typecheck    # tsc --noEmit
npm run build        # compila src/ -> dist/
npm run dev          # compila y ejecuta dist/index.js
```

> `dist/index.js` queda vacío porque el archivo solo declara tipos: TypeScript los borra al compilar. Es el comportamiento esperado, no un error.

---

## 3. Correcciones aplicadas

- `package.json`: el campo `name` decía `typescript03`; corregido a `typescript04`.
- `package.json`: añadidos `build`, `typecheck` y descripción.
- `tsconfig.json`: se retiró `verbatimModuleSyntax`, incompatible con `module: CommonJS` en cuanto se escriba un `import`.
- Dependencias instaladas y build verificado.

---

## 4. Convenciones

- `strict: true` y sin `any`.
- Comentarios y documentación en español.
- `dist/` y `node_modules/` no se versionan.
