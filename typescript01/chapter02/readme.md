# 📘 Guía de Estudio — Capítulo 2: Fundamentos de TypeScript (TypeScript Basics)

En el **Capítulo 2** ([`LIBRO-REACT-2023.md`](../LIBRO-REACT-2023.md#L80-L422)) aprendemos todos los tipos de datos esenciales que usarás el 90% del tiempo en TypeScript y React.

---

## 1. Mapa Rápido de los 11 Conceptos del Capítulo 2

| # | Concepto | Ejemplo Rápido | ¿Para qué sirve en palabras simples? |
| :-: | :--- | :--- | :--- |
| **1** | **Tipos Básicos** | `let edad: number = 30;` | Números (`number`), textos (`string`) y verdadero/falso (`boolean`). |
| **2** | **Inferencia** | `let pais = "Perú";` | Si le das un valor inicial, TypeScript **adivina el tipo solo** sin que escribas `: string`. |
| **3** | **Objetos** | `let user: { nombre: string; edad: number }` | Obliga a que el objeto tenga exactamente esas propiedades y con esos tipos. |
| **4** | **Arreglos Simples** | `let frutas: string[] = ["Manzana"]` | Una lista donde **todos** los elementos deben ser del mismo tipo. |
| **5** | **Arreglos Complejos** | `let usuarios: { nombre: string }[]` | Una lista llena de objetos (como una lista de clientes o productos). |
| **6** | **Funciones** | `const sumar = (a: number, b: number): number => a + b` | Define qué tipos entran por los paréntesis y qué tipo sale con `return` (o `void` si no devuelve nada). |
| **7** | **Union Types (`\|`)** | `let codigo: number \| string` | Permite que una variable acepte **más de un tipo** (número O texto). |
| **8** | **Literal Types** | `let talla: 'S' \| 'M' \| 'L'` | Solo acepta **exactamente esas palabras** específicas y ninguna otra. |
| **9** | **Enums (`enum`)** | `enum Rol { ADMIN, AUTOR }` | Lista cerrada de opciones con nombre para no equivocarse escribiendo textos. |
| **10** | **Opcionales (`?`)** | `{ nombre: string; telefono?: string }` | El signo `?` indica que esa propiedad **no es obligatoria**. |
| **11** | **`interface` vs `type`** | `interface Usuario { ... }` / `type ID = string` | Sirven para ponerle un "nombre propio" a un molde y reutilizarlo. |

---

## 2. Explicación Sencilla de los Puntos Más Importantes

### 2.1. ¿Cuándo escribir el tipo (`: number`) y cuándo dejar que TypeScript adivine (Inferencia)?

- **Si le das valor de inmediato**, deja que TypeScript lo adivine:
  ```typescript
  let edad = 25; // TypeScript ya sabe que es 'number'
  ```
- **Si declaras la variable vacía para llenarla después**, **SÍ debes ponerle el tipo**:
  ```typescript
  let sueldo: number; // Si no pones ': number', aceptaría cualquier cosa por error
  sueldo = 1500;
  ```

---

### 2.2. Funciones: ¿Qué diferencia hay entre `: number` y `: void`?

```typescript
// 1. Devuelve un número (tiene 'return') -> lleva ': number' después de los paréntesis
const multiplicar = (a: number, b: number): number => {
    return a * b;
};

// 2. NO devuelve nada (solo hace console.log) -> lleva ': void'
const mostrarSuma = (a: number, b: number): void => {
    console.log(a + b);
};
```

---

### 2.3. ¿Cuál es la diferencia entre `interface` y `type`?

Ambos sirven para crear moldes reutilizables, pero:

- **`interface` (Interfaz):** Se usa **exclusivamente para Objetos** (y Clases).
  ```typescript
  interface Desarrollador {
      nombre: string;
      edad: number;
      esDev: boolean;
  }
  ```
- **`type` (Alias de Tipo):** Sirve para Objetos, **pero también para cualquier otra cosa** (textos simples, uniones, arreglos de objetos):
  ```typescript
  type NombrePersona = string; // ✅ Con 'type' sí se puede
  type Categoria = 'frontend' | 'backend' | 'mobile'; // ✅ Unión literal
  ```

---

### 2.4. Corrección de un Error de Imprenta del Libro (Listing 2-18)

En la línea 408 del libro (*Listing 2-18*), el autor escribió por error comillas simples `'...'` en lugar de comillas invertidas (backticks `` `...` ``) dentro del `console.log`:

- ❌ **En el libro:** `console.log('${person5.name} is a ...')` (no reemplaza las variables en algunas partes).
- ✅ **Correcto en TypeScript/JS:**
  ```typescript
  console.log(`${person5.name} is a ${person5.isDev} Dev and is ${person5.age} years old`);
  ```

### 2.5. Errores intencionales del libro

Muchos listings del Capítulo 2 están diseñados para **fallar a propósito** (`myNum = '12'`, `languages.push(56)`, `modNums` devolviendo un boolean, etc.). Copiarlos tal cual rompería la compilación.

En [`basicsDemo.ts`](./basicsDemo.ts) se usan dos técnicas para conservar la enseñanza sin romper el build:

- **Comentarios** con la línea inválida y una explicación (`// ❌ Error...`).
- **`@ts-expect-error`** en los ejemplos que sí queremos ejecutar para ver el comportamiento en JavaScript (por ejemplo `addNums` sin tipos o `modNums` con retorno incorrecto).

---

## 3. Archivos de Práctica en esta Carpeta (`chapter02/`)

| Archivo | ¿Qué contiene? |
| :--- | :--- |
| [`basicsDemo.ts`](./basicsDemo.ts) | Los ejemplos representativos del libro (*Listings 2-1 a 2-18*) ordenados y comentados. Los errores intencionales se muestran comentados o con `@ts-expect-error` para que el archivo compile. |
| [`ejercicios.ts`](./ejercicios.ts) | **5 ejercicios prácticos sencillos** (con enunciado y solución) para dominar los tipos del Capítulo 2. |
| [`tsconfig.json`](./tsconfig.json) | Configuración del compilador para esta carpeta. |

---

## 4. Cómo Ejecutar los Ejemplos y Ejercicios

En la terminal, dentro de `chapter02/`:

```bash
# Compilar a JavaScript
npx tsc

# Ver los ejemplos del libro en acción
node basicsDemo.js

# Ver tus 5 ejercicios resueltos
node ejercicios.js
```
