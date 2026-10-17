// ==========================================================
// CAPÍTULO 1: Getting Started (main.ts)
// ==========================================================
// Este archivo es TypeScript (.ts).
// Para convertirlo a JavaScript (.js), se ejecuta: tsc main.ts

const mensaje: string = "¡Hola desde TypeScript en el Capítulo 1!";
console.log(mensaje);

// Ejemplo sencillo de por qué sirve TypeScript:
// En JavaScript normal, sumar 10 + "5" daría el texto "105" por error.
// En TypeScript le decimos que 'a' y 'b' DEBEN ser números:
function sumar(a: number, b: number) {
    return a + b;
}

console.log("La suma de 10 + 5 es:", sumar(10, 5));

// Si intentáramos escribir: sumar(10, "5")
// TypeScript nos subrayaría en rojo "5" inmediatamente antes de ejecutar nada.
