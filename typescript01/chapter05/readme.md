# 📘 Guía de Estudio — Capítulo 5: Tipos Avanzados (Advanced Types)

El **Capítulo 5** ([`LIBRO-REACT-2023.md`](../LIBRO-REACT-2023.md#L955-L1204)) cubre los tipos que convierten a TypeScript en algo más que "JavaScript con anotaciones": intersecciones, uniones, type guards, discriminated unions, casting, firmas de índice, sobrecarga de funciones y `??`.

---

## 1. Tabla rápida de conceptos

| Concepto | Sintaxis | Idea clave | Listing |
| :--- | :--- | :--- | :---: |
| **Intersección** | `A & B` | El objeto debe cumplir **A y B** a la vez. | 5‑3 |
| **Unión** | `A \| B` | El valor puede ser **A o B**. | 5‑4 |
| **Type Guard** | `"prop" in valor` | Estrecha la unión comprobando una propiedad. | 5‑4 |
| **Discriminated Union** | `switch (valor.type)` | Cada variante lleva una etiqueta literal (`type`) que la identifica. | 5‑5 |
| **Type Casting** | `!`, `as`, `?.` | Le dicen al compilador el tipo real de un valor del DOM. | 5‑6 / 5‑7 |
| **Index Signature** | `[key: string]: string` | Define el tipo de las claves y los valores de un objeto. | 5‑8 |
| **Function Overloading** | Varias firmas + una implementación | Declara qué combinaciones de argumentos son válidas y qué retorna cada una. | 5‑9 / 5‑10 |
| **Nullish Coalescing** | `a ?? b` | Usa `b` solo si `a` es `null` o `undefined`. | 5‑11 |

---

## 2. Los conceptos, con ejemplos

### 2.1. Intersección (`&`)
Combina dos tipos en uno que exige **todas** sus propiedades:

```typescript
type ITadmin = { access: string[] };
type Employee = { name: string; startDate: Date; skills: string[] };

type AdminEmployee = Employee & ITadmin; // debe tener todo

const emp1: AdminEmployee = {
    name: "John",
    startDate: new Date(),
    skills: ["Cisco", "Python", "Perl"],
    access: ["admin", "user"],
};
```

Si olvidas `access`, TypeScript marca error. Es útil para componer tipos pequeños en lugar de repetir propiedades.

---

### 2.2. Type Guards (`in`)
Una unión (`|`) permite que un valor sea de varios tipos. Para usar propiedades específicas hay que **estrechar** el tipo:

```typescript
interface Human { walkingSpeed: number }
interface Horse { runningSpeed: number }
type Mammal = Human | Horse;

function moveMammal(mammal: Mammal) {
    if ("walkingSpeed" in mammal) {
        console.log(`Human is moving at ${mammal.walkingSpeed} km/h`);
    } else {
        console.log(`Horse is moving at ${mammal.runningSpeed} km/h`);
    }
}
```

> ⚠️ **Errata del libro (Listing 5‑4):** usa comillas simples con `${...}`, por lo que el texto se imprime literal. Aquí se corrigió a **backticks**.

---

### 2.3. Discriminated Unions
Es el patrón más robusto para modelar variantes. Cada interfaz añade una propiedad literal que sirve de etiqueta:

```typescript
interface Human { type: "human"; walkingSpeed: number }
interface Horse { type: "horse"; runningSpeed: number }
type Mammal = Human | Horse;

function moveMammal(mammal: Mammal) {
    switch (mammal.type) {
        case "human":
            console.log(`Human is moving at ${mammal.walkingSpeed} km/h`);
            break;
        case "horse":
            console.log(`Horse is moving at ${mammal.runningSpeed} km/h`);
            break;
        default: {
            const _exhaustive: never = mammal; // si falta un case, error de tipos
        }
    }
}
```

La comprobación `never` es una mejora sobre el libro: si mañana añades `Bird` y olvidas su `case`, el compilador te avisa.

---

### 2.4. Type Casting en el DOM
TypeScript no lee tu HTML, así que `getElementById` devuelve `HTMLElement | null`. Se corrige con `!` y `as`:

```typescript
const inputUser = document.getElementById("input-user")! as HTMLInputElement;

inputUser?.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
});
```

| Operador | Qué hace | Cuidado |
| :--- | :--- | :--- |
| `!` | Afirma que el valor **no es null/undefined**. | Es una promesa al compilador, no una comprobación real. Si el elemento no existe, falla en runtime. |
| `as` | Especializa el tipo (`HTMLElement` → `HTMLInputElement`). | No convierte datos; solo cambia cómo los ve TypeScript. |
| `?.` | Ejecuta solo si el valor no es `null`/`undefined`. | No evita un `!` mal usado. |

> El código del capítulo está protegido con `if (typeof document !== "undefined")` para que también puedas ejecutarlo con Node sin que falle.

---

### 2.5. Index Properties
Permiten objetos con claves dinámicas, pero con un tipo fijo para clave y valor:

```typescript
interface ErrorMessages {
    [key: string]: string;
}

const errorMessages: ErrorMessages = {
    name: "Name is required",
    email: "Email is required",
    password: "Password is required",
};
```

Todos los valores deben ser `string`; si pones un número, error.

---

### 2.6. Function Overloading

**El problema (Listing 5‑9):** sin firmas, el retorno se infiere como `string | number`, así que `split()` no es seguro:

```typescript
type StrOrNum = string | number;

function addElements(a: StrOrNum, b: StrOrNum) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result2 = addElements("Nabendu", " Biswas");
result2.split(""); // ❌ Property 'split' does not exist on type 'number'
```

En el archivo esto se demuestra con `// @ts-expect-error`, que mantiene el build en verde a la vez que documenta el error.

**La solución (Listing 5‑10):** declarar las combinaciones válidas antes de la implementación:

```typescript
function addElements(a: number, b: number): number;
function addElements(a: string, b: string): string;
function addElements(a: string, b: number): string;
function addElements(a: number, b: string): string;
function addElements(a: StrOrNum, b: StrOrNum) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result2 = addElements("Nabendu", " Biswas"); // ahora es string
result2.split(""); // ✅
```

---

### 2.7. Nullish Coalescing (`??`)

| Expresión | Resultado | Por qué |
| :--- | :--- | :--- |
| `"" \|\| "Default"` | `"Default"` | `""` es falsy. |
| `"" ?? "Default 2"` | `""` | `??` solo reacciona a `null`/`undefined`. |
| `null ?? "Default 3"` | `"Default 3"` | `null` sí es nullish. |

> Regla práctica: usa `??` para valores por defecto. `||` esconde bugs cuando `0`, `false` o `""` son valores válidos.

---

## 3. Mapa de archivos

```
chapter05/
├─ index.html                 # h1 + #input-user + scripts de dist/
├─ index.css                  # tema claro/oscuro (CSS puro)
├─ tsconfig.json              # rootDir src + outDir dist + strict
├─ readme.md                  # esta guía
├─ src/
│  ├─ advancedDemo.ts         # Listings 5-3 a 5-11 (todo el capítulo)
│  └─ ejercicios.ts           # 7 ejercicios, uno por concepto
└─ dist/                      # generado por tsc (ignorado por Git)
   ├─ advancedDemo.js(.map)
   └─ ejercicios.js(.map)
```

### Mapa Listing → código

| Listing | Sección en `src/advancedDemo.ts` |
| :---: | :--- |
| 5‑3 | `1. Intersection Types` |
| 5‑4 | `2. Type Guards` |
| 5‑5 | `3. Discriminated Unions` |
| 5‑6 / 5‑7 | `4. Type Casting` |
| 5‑8 | `5. Index Properties` |
| 5‑9 | `6. Problema de Overloading` |
| 5‑10 | `7. Function Overloading` |
| 5‑11 | `8. Nullish Coalescing` |

---

## 4. Cómo ejecutar

Dentro de `chapter05/`:

```bash
# 1. Compilar TypeScript -> dist/
npx tsc

# 2. Modo vigilancia (recompila al guardar)
npx tsc -w

# 3. Servir la carpeta y abrir index.html
npx serve .
# o usa la extensión Live Server de VS Code
```

Abre `index.html` y mira la **consola del navegador** (F12 → Console).

> `dist/advancedDemo.js` también se puede ejecutar con `node dist/advancedDemo.js`: verás todo excepto la sección de DOM, que muestra un aviso y se salta.

### Salida esperada (resumen)

- `emp1` con `name`, `startDate`, `skills`, `access`.
- Mensajes de Human/Horse por partida doble (guard y discriminated union).
- Cada tecla del input se imprime en consola.
- `errorMessages` con los tres mensajes.
- `3`, `Nabendu Biswas`, `Nabendu 2` y el array de `split`.
- `Default`, `""`, `Default 3` en la sección de nullish.

---

## 5. Ejercicios incluidos (`src/ejercicios.ts`)

| # | Concepto | Qué practicas |
| :---: | :--- | :--- |
| 1 | Intersección | `DatosProducto & Stock` |
| 2 | Type Guard | `"ronronea" in mascota` |
| 3 | Discriminated Union | `tipo: "circulo" \| "cuadrado"` + `never` |
| 4 | Type Casting | `getElementById(...)! as HTMLInputElement` |
| 5 | Index Signature | `[clave: string]: string` + fallback |
| 6 | Overloading | `formatear(number)` / `formatear(string)` |
| 7 | Nullish | `??` vs `\|\|` con `0` |

---

## 6. Figuras del libro

- Figure 5‑1: [`fig_27_p61.jpeg`](../book_images/fig_27_p61.jpeg) — salida de `emp1`.
- Figure 5‑2: [`fig_28_p63.jpeg`](../book_images/fig_28_p63.jpeg) — consola de los type guards.
- Figure 5‑3: [`fig_29_p66.jpeg`](../book_images/fig_29_p66.jpeg) — casting del input.
- Figure 5‑4: [`fig_30_p69.jpeg`](../book_images/fig_30_p69.jpeg) — consola del overloading.
- Figure 5‑5: [`fig_31_p70.jpeg`](../book_images/fig_31_p70.jpeg) — consola de `??`.
