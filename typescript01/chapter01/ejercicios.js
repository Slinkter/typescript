"use strict";
// ==========================================================
// EJERCICIOS PRÁCTICOS — CAPÍTULO 1: Empezando con TypeScript
// ==========================================================
console.log("=== EJERCICIOS DEL CAPÍTULO 1 ===");
// ----------------------------------------------------------
// EJERCICIO 1: Mi primer saludo con tipos
// Enunciado: Crea una variable 'nombre' de tipo texto (string)
// y muéstrala en consola con un saludo.
// ----------------------------------------------------------
const nombreEstudiante = "Luis";
console.log(`Ejercicio 1 -> ¡Bienvenido al curso de TypeScript, ${nombreEstudiante}!`);
// ----------------------------------------------------------
// EJERCICIO 2: Evitar el error clásico de JavaScript
// Enunciado: Crea una función 'calcularPrecioTotal' que reciba
// el precio (number) y la cantidad (number) y devuelva el total.
// ----------------------------------------------------------
function calcularPrecioTotal(precio, cantidad) {
    return precio * cantidad;
}
const totalCompra = calcularPrecioTotal(25, 3);
console.log(`Ejercicio 2 -> Total a pagar (25 x 3): $${totalCompra}`);
// ❌ Si descomentas la siguiente línea, verás cómo TypeScript te protege:
// calcularPrecioTotal(25, "tres"); // Error: "tres" no es un 'number'
// ----------------------------------------------------------
// EJERCICIO 3: Presentación completa
// Enunciado: Declara 3 variables con su tipo explícito:
// - curso (string)
// - capitulo (number)
// - completado (boolean)
// e imprímelas en consola.
// ----------------------------------------------------------
const curso = "TypeScript Basics";
const capitulo = 1;
const completado = true;
console.log(`Ejercicio 3 -> Curso: ${curso} | Capítulo: ${capitulo} | ¿Completado?: ${completado}`);
