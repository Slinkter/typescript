// ==========================================================
// EJERCICIOS PRÁCTICOS — CAPÍTULO 5: Tipos Avanzados
// Un ejercicio por concepto del capítulo.
// Se cargan en el navegador después de advancedDemo.ts.
// ==========================================================

console.log("\n\n=== EJERCICIOS DEL CAPÍTULO 5 ===\n");

// ----------------------------------------------------------
// EJERCICIO 1: Intersección (&)
// Enunciado:
// Combina 'DatosProducto' y 'Stock' en un tipo 'Producto'
// y crea un producto con todas las propiedades.
// ----------------------------------------------------------
type DatosProducto = {
    nombre: string;
    precio: number;
};

type Stock = {
    cantidad: number;
    disponible: boolean;
};

type Producto = DatosProducto & Stock;

const producto: Producto = {
    nombre: "Teclado mecánico",
    precio: 79.99,
    cantidad: 12,
    disponible: true,
};

console.log("[Ejercicio 1] Producto:", producto);

// ----------------------------------------------------------
// EJERCICIO 2: Type Guard con `in`
// Enunciado:
// Crea 'Gato' y 'Perro', únelos en 'Mascota' y escribe
// 'describirMascota' usando el operador `in`.
// ----------------------------------------------------------
interface Gato {
    ronronea: boolean;
}

interface Perro {
    ladra: boolean;
}

type Mascota = Gato | Perro;

function describirMascota(mascota: Mascota): void {
    if ("ronronea" in mascota) {
        console.log(`[Ejercicio 2] El gato ronronea: ${mascota.ronronea}`);
    } else {
        console.log(`[Ejercicio 2] El perro ladra: ${mascota.ladra}`);
    }
}

describirMascota({ ronronea: true });
describirMascota({ ladra: true });

// ----------------------------------------------------------
// EJERCICIO 3: Discriminated Union
// Enunciado:
// Crea 'Circulo' y 'Cuadrado' con una propiedad literal 'tipo',
// únelos en 'Figura' y calcula el área con un switch exhaustivo.
// ----------------------------------------------------------
type Circulo = {
    tipo: "circulo";
    radio: number;
};

type Cuadrado = {
    tipo: "cuadrado";
    lado: number;
};

type Figura = Circulo | Cuadrado;

function calcularArea(figura: Figura): number {
    switch (figura.tipo) {
        case "circulo":
            return Math.PI * figura.radio ** 2;
        case "cuadrado":
            return figura.lado ** 2;
        default: {
            const _exhaustive: never = figura;
            return _exhaustive;
        }
    }
}

console.log(`[Ejercicio 3] Área círculo (r=3): ${calcularArea({ tipo: "circulo", radio: 3 }).toFixed(2)}`);
console.log(`[Ejercicio 3] Área cuadrado (l=4): ${calcularArea({ tipo: "cuadrado", lado: 4 })}`);

// ----------------------------------------------------------
// EJERCICIO 4: Type Casting en el DOM
// Enunciado:
// Selecciona '#input-user' con getElementById, afirma que no es
// null con '!', castea a HTMLInputElement y muestra la longitud
// del texto mientras se escribe.
// ----------------------------------------------------------
if (typeof document !== "undefined") {
    const inputUser = document.getElementById("input-user")! as HTMLInputElement;

    inputUser?.addEventListener("input", (event) => {
        const target = event.target as HTMLInputElement;
        console.log(`[Ejercicio 4] Longitud del texto: ${target.value.length}`);
    });
}

// ----------------------------------------------------------
// EJERCICIO 5: Index Properties
// Enunciado:
// Crea una interfaz 'Traducciones' con firma de índice
// [clave: string]: string y una función 'traducir' con fallback.
// ----------------------------------------------------------
interface Traducciones {
    [clave: string]: string;
}

const traducciones: Traducciones = {
    hola: "hello",
    adios: "goodbye",
    gracias: "thanks",
};

function traducir(clave: string): string {
    return traducciones[clave] ?? "[sin traducción]";
}

console.log(`[Ejercicio 5] hola -> ${traducir("hola")}`);
console.log(`[Ejercicio 5] luna -> ${traducir("luna")}`);

// ----------------------------------------------------------
// EJERCICIO 6: Function Overloading
// Enunciado:
// Sobrecarga 'formatear' para números (2 decimales) y strings
// (mayúsculas). La implementación debe ser una sola función.
// ----------------------------------------------------------
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: number | string): string {
    return typeof valor === "number" ? valor.toFixed(2) : valor.toUpperCase();
}

console.log(`[Ejercicio 6] número -> ${formatear(12.5)}`);
console.log(`[Ejercicio 6] string -> ${formatear("typescript")}`);

// ----------------------------------------------------------
// EJERCICIO 7: Nullish Coalescing (??)
// Enunciado:
// Usa '??' para aplicar valores por defecto y demuestra la
// diferencia con '||' cuando el valor es 0.
// ----------------------------------------------------------
const nombre: string | null = null;
const edad: number | undefined = 0;

const nombreMostrado = nombre ?? "Anónimo";
const edadConNullish = edad ?? 18;
const edadConOr = edad || 18;

console.log(`[Ejercicio 7] Nombre: ${nombreMostrado}`);
console.log(`[Ejercicio 7] Edad con ??: ${edadConNullish}`);
console.log(`[Ejercicio 7] Edad con ||: ${edadConOr} (0 es falsy)`);
