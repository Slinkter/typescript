# 📘 Guía de Estudio — Capítulo 6: Decoradores (`chapter06a/`)

Esta carpeta complementa el [Capítulo 6](../chapter06/) y cubre los **decoradores** del libro ([`LIBRO-REACT-2023.md`](../LIBRO-REACT-2023.md#L1211-L1593), Listings 6-10 a 6-18).

> Los decoradores son una característica experimental. Se habilitan con `"experimentalDecorators": true` en [`tsconfig.json`](./tsconfig.json), ya configurado en esta carpeta.

---

## 1. ¿Qué es un decorador?

Un decorador es una **función que modifica o inspecciona** una clase, método, propiedad, accessor o parámetro. Se escribe con `@`:

```typescript
function Helper(constructor: Function) {
    console.log(`Showing constructor: ${constructor.name}`);
}

@Helper
class Car {
    name = "Tata Nexon";
}
```

El decorador se ejecuta **cuando se define la clase**, antes de crear instancias. Por eso el log del decorador aparece antes que el del constructor.

---

## 2. Mapa de Listings → código (`decoratorsDemo.ts`)

| Listing | Concepto | Sección en [`decoratorsDemo.ts`](./decoratorsDemo.ts) |
| :---: | :--- | :--- |
| 6-12 | Clase `Car` sin decoradores | `1. Clase Car` |
| 6-13 | Decorador de clase `@Helper` | `2. Decorador simple` |
| 6-14 | Decorator factory (`HelperFactory`) | `3. Decorator factory` |
| 6-15 / 6-16 | `AngularTemplate` + `<div id="app">` | `4. AngularTemplate` |
| 6-17 / 6-18 | `@Log`, `@Log2`, `@Log3`, `@Log4` | `5. Property / accessor / method / parameter decorators` |

---

## 3. Tipos de decoradores

| Tipo | Dónde se coloca | Firma típica |
| :--- | :--- | :--- |
| **Clase** | Antes de `class` | `(constructor: Function) => void` |
| **Propiedad** | Antes de un campo | `(target, propertyName) => void` |
| **Accessor** | Antes de `get`/`set` | `(target, name, descriptor) => void` |
| **Método** | Antes de un método | `(target, name, descriptor) => void` |
| **Parámetro** | Antes de un parámetro | `(target, name, position) => void` |

### Decorator factory
Es una función que **devuelve** el decorador, lo que permite pasarle parámetros:

```typescript
function HelperFactory(genericString: string) {
    return function (constructor: Function) {
        console.log(genericString);
        console.log(constructor);
    };
}

@HelperFactory("Showing constructor:")
class Car { /* ... */ }
```

### `AngularTemplate`
Inyecta HTML en un elemento existente. Es el mismo patrón que usan frameworks como Angular:

```typescript
function AngularTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) hookEl.innerHTML = template;
    };
}
```

---

## 4. La clase `Employee`

Combina cuatro decoradores:

```typescript
class Employee {
    @Log title: string;

    @Log2
    set fullName(name: string) { /* ... */ }

    @Log3
    getNameWithTitle(@Log4 id: number) { /* ... */ }
}
```

- `@Log` → propiedad.
- `@Log2` → setter.
- `@Log3` → método.
- `@Log4` → parámetro `id`.

En la consola verás el orden en que TypeScript aplica cada uno.

---

## 5. Erratas corregidas del libro

- El libro pide `target: es2016`; aquí se usa `ES2022`, que también soporta decoradores con `experimentalDecorators`.
- El método `getNameWithTitle` del libro usa comillas simples con `${...}`; aquí usa **backticks** para interpolar de verdad.
- Se añadió `experimentalDecorators` al `tsconfig.json` (el libro lo muestra en una captura, no en texto).

---

## 6. Cómo ejecutar

Dentro de `chapter06a/`:

```bash
npx tsc
```

Abre [`index.html`](./index.html) con Live Server y revisa la consola. También puedes ejecutar:

```bash
node main.js
node decoratorsDemo.js
```

> `decoratorsDemo.js` necesita un DOM para la parte de `AngularTemplate`; con Node se salta ese bloque porque `document` no existe. En el navegador sí se inyecta el `<h4>` dentro de `#app`.
