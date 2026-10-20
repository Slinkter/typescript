"use strict";
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
let descuento;
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
const libro = {
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
const calcularAreaRectangulo = (base, altura) => {
    return base * altura;
};
const imprimirResultado = (etiqueta, valor) => {
    console.log(`Ejercicio 3 -> ${etiqueta}: ${valor} m²`);
};
const area = calcularAreaRectangulo(8, 5);
imprimirResultado("Área del rectángulo (8x5)", area);
var MetodoPago;
(function (MetodoPago) {
    MetodoPago[MetodoPago["EFECTIVO"] = 0] = "EFECTIVO";
    MetodoPago[MetodoPago["TARJETA"] = 1] = "TARJETA";
    MetodoPago[MetodoPago["YAPE"] = 2] = "YAPE";
})(MetodoPago || (MetodoPago = {}));
const miCafe = 'mediano';
const pagoElegido = MetodoPago.YAPE;
let idPedido = "PED-101";
console.log(`Ejercicio 4 -> Pedido ${idPedido}: Café ${miCafe} (Método de pago #${pagoElegido})`);
const carrito = [
    { nombre: "Teclado Mecánico", precio: 50 },
    { nombre: "Mouse Inalámbrico", precio: 25 },
    { nombre: "Pad de Escritorio", precio: 15 }
];
let totalCarrito = 0;
for (const item of carrito) {
    totalCarrito += item.precio;
}
console.log("Ejercicio 5 -> Productos en carrito:", carrito.length, "| Total a pagar: $" + totalCarrito);
/*  */
