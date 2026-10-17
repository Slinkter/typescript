// ==========================================================
// EJERCICIOS PRÁCTICOS — CAPÍTULO 2: TypeScript Basics
// ==========================================================

console.log("=== EJERCICIOS DEL CAPÍTULO 2 ===\n");

// ----------------------------------------------------------
// EJERCICIO 1: Inferencia y Variables Vacías
// Enunciado:
// Declara una variable 'descuento' sin valor inicial que solo
// permita números, y luego asígnale el valor 15.
// ----------------------------------------------------------
let descuento: number;
descuento = 15;
console.log(`Ejercicio 1 -> Descuento aplicado: ${descuento}%`);


// ----------------------------------------------------------
// EJERCICIO 2: Objetos con Propiedades Opcionales (?)
// Enunciado:
// Crea un objeto 'libro' con:
// - titulo (string)
// - paginas (number)
// - subtitulo (string opcional usando '?')
// ----------------------------------------------------------
const libro: { titulo: string; paginas: number; subtitulo?: string } = {
    titulo: "TypeScript Basics",
    paginas: 170
    // Como 'subtitulo' tiene '?', no es obligatorio ponerlo
};
console.log("Ejercicio 2 -> Libro:", libro);


// ----------------------------------------------------------
// EJERCICIO 3: Funciones Tipadas (: number y : void)
// Enunciado:
// 1. Crea una función 'calcularAreaRectangulo' que reciba base y altura (números)
//    y devuelva el área (number).
// 2. Crea otra función 'imprimirResultado' que reciba un texto y un número
//    y solo lo muestre en consola (: void).
// ----------------------------------------------------------
const calcularAreaRectangulo = (base: number, altura: number): number => {
    return base * altura;
};

const imprimirResultado = (etiqueta: string, valor: number): void => {
    console.log(`Ejercicio 3 -> ${etiqueta}: ${valor} m²`);
};

const area = calcularAreaRectangulo(8, 5);
imprimirResultado("Área del rectángulo (8x5)", area);


// ----------------------------------------------------------
// EJERCICIO 4: Union Types, Literal Types y Enum
// Enunciado:
// 1. Crea un tipo literal 'TamañoCafe' que solo permita: 'pequeño' | 'mediano' | 'grande'.
// 2. Crea un enum 'MetodoPago' con EFECTIVO, TARJETA y YAPE.
// 3. Crea una variable 'idPedido' que pueda ser number | string.
// ----------------------------------------------------------
type TamañoCafe = 'pequeño' | 'mediano' | 'grande';
enum MetodoPago { EFECTIVO, TARJETA, YAPE }

const miCafe: TamañoCafe = 'mediano';
const pagoElegido: MetodoPago = MetodoPago.YAPE;
let idPedido: number | string = "PED-101";

console.log(`Ejercicio 4 -> Pedido ${idPedido}: Café ${miCafe} (Método de pago #${pagoElegido})`);


// ----------------------------------------------------------
// EJERCICIO 5: Interface vs Type con un Carrito de Compras
// Enunciado:
// 1. Crea una 'interface Producto' con: nombre (string) y precio (number).
// 2. Crea una lista 'carrito' de tipo 'Producto[]' con 3 productos.
// 3. Calcula el total sumando los precios.
// ----------------------------------------------------------
interface Producto {
    nombre: string;
    precio: number;
}

const carrito: Producto[] = [
    { nombre: "Teclado Mecánico", precio: 50 },
    { nombre: "Mouse Inalámbrico", precio: 25 },
    { nombre: "Pad de Escritorio", precio: 15 }
];

let totalCarrito = 0;
for (const item of carrito) {
    totalCarrito += item.precio;
}

console.log("Ejercicio 5 -> Productos en carrito:", carrito.length, "| Total a pagar: $" + totalCarrito);
