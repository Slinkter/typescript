// ==========================================================
// CAPÍTULO 6: Genéricos (Listings 6-3 a 6-9)
// Libro: TypeScript Basics — Nabendu Biswas (2023)
// Ejecutar en el navegador: index.html carga genericDemo.js
// ==========================================================

console.log("=== CAPÍTULO 6: GENÉRICOS ===\n");

// ----------------------------------------------------------
// Listing 6-3 — Tipos genéricos Array y Promise
// El tipo entre <> indica qué contiene el array o qué valor
// resuelve la promesa. Así TypeScript conoce los métodos
// disponibles (por ejemplo, split en un string).
// ----------------------------------------------------------
console.log("--- 1. Array y Promise (Listing 6-3) ---");

const occupation: Array<string> = [];
occupation.push("Software Engineer");
occupation.push("TypeScript Developer");
console.log("Ocupaciones:", occupation);

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.random();
        num > 0.5 ? resolve("It is Success") : reject("It is Fail");
    }, 2000);
});

promise
    .then((data) => console.log("Promise resuelta:", data.split("")))
    .catch((err) => console.log("Promise rechazada:", err));

// ----------------------------------------------------------
// Listing 6-4 — El problema de los objetos sin genéricos
// La función acepta object y devuelve object, así que
// TypeScript no sabe que existen las propiedades name/age.
// ----------------------------------------------------------
console.log("\n--- 2. Problema sin genéricos (Listing 6-4) ---");

function mergeObjectSinGenericos(obj1: object, obj2: object) {
    return { ...obj1, ...obj2 };
}

const mergedSinGenericos = mergeObjectSinGenericos(
    { name: "John" },
    { age: 30 },
);

// @ts-expect-error - La propiedad 'name' no existe en el tipo '{}'.
console.log(mergedSinGenericos.name);
// @ts-expect-error - La propiedad 'age' no existe en el tipo '{}'.
console.log(mergedSinGenericos.age);

// ----------------------------------------------------------
// Listing 6-5 — Solución con genéricos <T, U>
// TypeScript infiere T y U a partir de los argumentos y el
// retorno se convierte en la intersección T & U.
// ----------------------------------------------------------
console.log("\n--- 3. Genéricos T y U (Listing 6-5) ---");

function mergeObject<T, U>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 };
}

const merged = mergeObject({ name: "John" }, { age: 30 });
console.log("Nombre:", merged.name, "| Edad:", merged.age);

// ----------------------------------------------------------
// Listing 6-6 y 6-7 — Restricciones con extends object
// Sin la restricción se puede pasar un número y el spread
// produce un objeto vacío sin avisar. Con extends object,
// TypeScript rechaza el número en el editor.
// ----------------------------------------------------------
console.log("\n--- 4. Type constraints (Listings 6-6 / 6-7) ---");

function mergeObjectConRestriccion<T extends object, U extends object>(
    obj1: T,
    obj2: U,
) {
    return { ...obj1, ...obj2 };
}

// @ts-expect-error - 30 no cumple la restricción 'extends object'.
const mergedInvalido = mergeObjectConRestriccion({ name: "John" }, 30);
console.log(
    "Resultado al pasar un número (el libro muestra que se pierde el 30):",
    mergedInvalido,
);

const mergedValido = mergeObjectConRestriccion(
    { name: "John" },
    { age: 30 },
);
console.log("Resultado válido:", mergedValido);

// ----------------------------------------------------------
// Listing 6-8 — Clases genéricas
// StoreData solo acepta string o number. El método
// removeData busca el elemento y lo elimina si existe.
// ----------------------------------------------------------
console.log("\n--- 5. Clase genérica StoreData (Listing 6-8) ---");

class StoreData<T extends string | number> {
    constructor(public data: T[]) {}

    removeData(item: T) {
        const index = this.data.indexOf(item);
        // Mejora sobre el libro: si no existe, indexOf devuelve -1
        // y splice(-1, 1) borraría el último elemento por error.
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }

    getData() {
        return this.data;
    }
}

const stringData = new StoreData<string>(["John", "Doe", "Smith"]);
const numberData = new StoreData<number>([21, 12, 31]);

stringData.removeData("John");
stringData.removeData("NoExiste");
console.log("Datos string:", stringData.getData());
console.log("Datos number:", numberData.getData());

// @ts-expect-error - Un objeto no cumple 'T extends string | number'.
const datosInvalidos = new StoreData<object>([{ name: "John" }]);
console.log("Esto no debería compilar:", datosInvalidos);

// ----------------------------------------------------------
// Listing 6-9 — Utilidad genérica Readonly
// Readonly<string[]> impide mutar el array: push y pop
// producen error de compilación.
// ----------------------------------------------------------
console.log("\n--- 6. Readonly (Listing 6-9) ---");

const family: Readonly<string[]> = ["Nabendu", "Shikha", "Hriday"];

// @ts-expect-error - Un array Readonly no tiene push.
family.push("Raj");
// @ts-expect-error - Un array Readonly no tiene pop.
family.pop();

console.log("Familia (solo lectura):", family);
