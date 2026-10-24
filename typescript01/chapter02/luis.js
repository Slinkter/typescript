"use strict";
const listCarrito = [
    {
        nombre: "jabon",
        precio: 1,
    },
    {
        nombre: "papel",
        precio: 2,
    },
    {
        nombre: "cafe",
        precio: 3,
    },
];
let total = 0;
for (const x of listCarrito) {
    total = total + x.precio;
}
console.log(total);
