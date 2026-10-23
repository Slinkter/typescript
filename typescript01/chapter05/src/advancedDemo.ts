// ==========================================================
// CAPÍTULO 5: Tipos Avanzados (Listings 5-3 a 5-11)
// Libro: TypeScript Basics — Nabendu Biswas (2023)
// Ejecutar en el navegador: index.html carga dist/advancedDemo.js
// ==========================================================

console.log("=== CAPÍTULO 5: TIPOS AVANZADOS ===\n");

// ----------------------------------------------------------
// Listing 5-3 — Intersection Types (&)
// Un tipo intersección exige TODAS las propiedades de los tipos combinados.
// ----------------------------------------------------------
console.log("--- 1. Intersection Types (Listing 5-3) ---");

type ITadmin = {
    access: string[];
};

type Employee = {
    name: string;
    startDate: Date;
    skills: string[];
};

type AdminEmployee = Employee & ITadmin;

const emp1: AdminEmployee = {
    name: "John",
    startDate: new Date(),
    skills: ["Cisco", "Python", "Perl"],
    access: ["admin", "user"],
};

console.log(emp1);

// ----------------------------------------------------------
// Listing 5-4 — Type Guards con el operador `in`
// `Mammal` puede ser Human o Horse. Con `in` comprobamos qué
// propiedad existe para que TypeScript estreche el tipo.
// Nota: usamos un bloque { } porque el libro reutiliza los
// nombres Human/Horse en el Listing 5-5.
// ----------------------------------------------------------
console.log("\n--- 2. Type Guards (Listing 5-4) ---");

{
    interface Human {
        walkingSpeed: number;
    }

    interface Horse {
        runningSpeed: number;
    }

    type Mammal = Human | Horse;

    function moveMammal(mammal: Mammal) {
        if ("walkingSpeed" in mammal) {
            // Corregido del libro: comillas simples -> backticks para interpolar
            console.log(`Human is moving at ${mammal.walkingSpeed} km/h`);
        } else {
            console.log(`Horse is moving at ${mammal.runningSpeed} km/h`);
        }
    }

    moveMammal({ walkingSpeed: 10 });
    moveMammal({ runningSpeed: 40 });
}

// ----------------------------------------------------------
// Listing 5-5 — Discriminated Unions
// Cada interfaz añade una propiedad literal `type` que sirve
// como "etiqueta" para el switch. Es más explícito que `in`.
// ----------------------------------------------------------
console.log("\n--- 3. Discriminated Unions (Listing 5-5) ---");

{
    interface Human {
        type: "human";
        walkingSpeed: number;
    }

    interface Horse {
        type: "horse";
        runningSpeed: number;
    }

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
                // Comprobación de exhaustividad: si añades un tercer
                // animal y olvidas su case, TypeScript te avisa aquí.
                const _exhaustive: never = mammal;
                console.log("Tipo no contemplado:", _exhaustive);
            }
        }
    }

    moveMammal({ type: "human", walkingSpeed: 10 });
    moveMammal({ type: "horse", runningSpeed: 40 });
}

// ----------------------------------------------------------
// Listings 5-6 / 5-7 — Type Casting en el DOM
// - `!`  : afirma que getElementById NO devuelve null.
// - `as` : le dice a TypeScript el tipo concreto del elemento.
// - `?.` : solo ejecuta si el elemento existe.
// El bloque evita que el script falle si se ejecuta con Node.
// ----------------------------------------------------------
console.log("\n--- 4. Type Casting (Listings 5-6 / 5-7) ---");

if (typeof document !== "undefined") {
    const inputUser = document.getElementById("input-user")! as HTMLInputElement;

    inputUser?.addEventListener("input", (event) => {
        const target = event.target as HTMLInputElement;
        console.log("Input del usuario:", target.value);
    });
} else {
    console.log("(Sin DOM: esta sección solo se ejecuta en el navegador)");
}

// ----------------------------------------------------------
// Listing 5-8 — Index Properties
// La firma [key: string]: string obliga a que TODAS las claves
// sean strings y TODOS los valores también.
// ----------------------------------------------------------
console.log("\n--- 5. Index Properties (Listing 5-8) ---");

interface ErrorMessages {
    [key: string]: string;
}

const errorMessages: ErrorMessages = {
    name: "Name is required",
    email: "Email is required",
    password: "Password is required",
};

console.log(errorMessages);

// ----------------------------------------------------------
// Listing 5-9 — El problema que motiva el Function Overloading
// Sin firmas, el retorno se infiere como `string | number`, así
// que TypeScript no permite llamar a split() con seguridad.
// ----------------------------------------------------------
console.log("\n--- 6. Problema de Overloading (Listing 5-9) ---");

{
    type StrOrNum = string | number;

    function addElements(a: StrOrNum, b: StrOrNum) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }

    const result = addElements(1, 2);
    const result2 = addElements("Nabendu", " Biswas");
    const result3 = addElements("Nabendu ", 2);

    console.log(result, "|", result2, "|", result3);

    // @ts-expect-error: el retorno es `string | number`, y split() no existe en number.
    result2.split("");
}

// ----------------------------------------------------------
// Listing 5-10 — Function Overloading
// Las firmas declaran qué combinaciones son válidas y qué tipo
// devuelve cada una. La implementación es una sola.
// ----------------------------------------------------------
console.log("\n--- 7. Function Overloading (Listing 5-10) ---");

{
    type StrOrNum = string | number;

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

    const result = addElements(1, 2);
    const result2 = addElements("Nabendu", " Biswas");
    const result3 = addElements("Nabendu ", 2);

    console.log(result);
    console.log(result2);
    console.log(result3);
    // Ahora result2 está tipado como string gracias a las firmas:
    console.log(result2.split(""));
}

// ----------------------------------------------------------
// Listing 5-11 — Nullish Coalescing (??)
// `||` usa cualquier valor falsy ("" , 0, false, null, undefined).
// `??` solo usa el valor por defecto con null o undefined.
// ----------------------------------------------------------
console.log("\n--- 8. Nullish Coalescing (Listing 5-11) ---");

{
    const theInput = "";
    const storedInput = theInput || "Default";
    console.log(`Con || ("" es falsy):`, storedInput);

    const theInput2 = "";
    const storedInput2 = theInput2 ?? "Default 2";
    console.log(`Con ?? ("" se conserva):`, `"${storedInput2}"`);

    const theInput3 = null;
    const storedInput3 = theInput3 ?? "Default 3";
    console.log(`Con ?? (null usa el default):`, storedInput3);
}

console.log("\n=== FIN DEL DEMO DEL CAPÍTULO 5 ===");
