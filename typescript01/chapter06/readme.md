# 📘 Guía de Estudio — Capítulo 6: Genéricos y Decoradores (Parte 1: Genéricos)

Este capítulo ([`LIBRO-REACT-2023.md`](../LIBRO-REACT-2023.md#L1211-L1593)) cubre dos temas avanzados:

1. **Genéricos** (`<T>`, `Array<T>`, `Promise<T>`, constraints) → esta carpeta.
2. **Decoradores** (`@Helper`, factories, AngularTemplate, property decorators) → [`chapter06a/`](../chapter06a/).

---

## 1. ¿Qué es un genérico en palabras simples?

Un genérico es un **tipo que se rellena después**, como un molde con un hueco:

```typescript
function identidad<T>(valor: T): T {
    return valor;
}

identidad<string>("Hola"); // T = string
identidad<number>(42);     // T = number
```

En lugar de escribir una función distinta para cada tipo (o usar `any` y perder la seguridad), escribes **una sola** y TypeScript deduce el tipo real.

---

## 2. Mapa de Listings → código (`genericDemo.ts`)

| Listing | Concepto | Sección en [`genericDemo.ts`](./genericDemo.ts) |
| :---: | :--- | :--- |
| 6-3 | `Array<string>` y `Promise<string>` | `1. Array y Promise` |
| 6-4 | Función con `object` y el problema de las propiedades | `2. Problema sin genéricos` |
| 6-5 | `mergeObject<T, U>` | `3. Genéricos T y U` |
| 6-6 / 6-7 | `extends object` y el error al pasar un número | `4. Type constraints` |
| 6-8 | `StoreData<T extends string | number>` | `5. Clase genérica StoreData` |
| 6-9 | `Readonly<string[]>` | `6. Readonly` |

---

## 3. Conceptos clave

### 3.1. `Array<T>` y `Promise<T>`
- `Array<string>` es equivalente a `string[]`.
- `Promise<string>` obliga a que `resolve` reciba un string y permite usar `split()` en el `.then()`.

### 3.2. El problema de `object`
```typescript
function mergeObject(obj1: object, obj2: object) {
    return { ...obj1, ...obj2 };
}
const merged = mergeObject({ name: "John" }, { age: 30 });
merged.name; // ❌ Property 'name' does not exist on type '{}'
```
`object` no dice **qué** propiedades tiene. Los genéricos sí.

### 3.3. Constraints (`extends`)
```typescript
function mergeObject<T extends object, U extends object>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 };
}
mergeObject({ name: "John" }, 30); // ❌ 30 no es un objeto
```
Sin la restricción, el número se acepta y el spread lo pierde silenciosamente.

### 3.4. Clases genéricas
`StoreData<T extends string | number>` solo acepta strings o números. Un objeto produce error de compilación.

> **Mejora sobre el libro:** `removeData` comprueba que `indexOf` no devuelva `-1`. El libro hace `splice(indexOf(item), 1)`, que borraría el último elemento cuando el ítem no existe.

### 3.5. `Readonly`
`Readonly<string[]>` elimina `push`, `pop`, `splice`, etc. En el archivo se demuestra con `@ts-expect-error`.

---

## 4. Errores intencionales y `@ts-expect-error`

El libro muestra errores a propósito. Para que `tsc` siga en verde, el archivo usa:

```typescript
// @ts-expect-error - explicación del error esperado
family.push("Raj");
```

Regla: si el error desaparece, TypeScript avisa de que el `@ts-expect-error` ya no es necesario. Eso mantiene la demo honesta.

---

## 5. Cómo ejecutar

Dentro de `chapter06/`:

```bash
# Compilar TypeScript -> JavaScript
npx tsc

# Opción con Node (la promesa tarda 2 segundos)
node genericDemo.js
```

O abre [`index.html`](./index.html) con Live Server y mira la consola (F12).

**Salida esperada (resumen):**
- Array de ocupaciones.
- Promesa resuelta/rechazada con `split`.
- `merged.name` / `merged.age`.
- Datos de `StoreData`.
- Error controlado al intentar mutar `Readonly`.

---

## 6. Decoradores

Continúa en [`chapter06a/readme.md`](../chapter06a/readme.md): clase `Car`, decorador `Helper`, factory, `AngularTemplate` y decoradores de propiedad/accessor/método/parámetro.

---

## 7. Erratas del libro en este capítulo

- El libro llama al archivo `genericsDemo.ts`; aquí se mantiene `genericDemo.ts` (el nombre que ya usaba el proyecto y el `index.html`).
- Varios listings usan saltos de línea dentro de strings (OCR del libro); el código de esta carpeta está normalizado.
- El Listing 6-16 cierra el string de plantilla antes de tiempo en el PDF; aquí está corregido.
