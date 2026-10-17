"use strict";
// ==========================================================
// CAPÍTULO 2: Ejemplos del Libro Explicados (Listings 2-1 a 2-18)
// ==========================================================
console.log("=== DEMO DEL CAPÍTULO 2: TYPESCRIPT BASICS ===\n");
// ----------------------------------------------------------
// 1. Números, Textos y Booleanos (Listings 2-1 y 2-2)
// ----------------------------------------------------------
let myNum = 10; // Inferido automáticamente como 'number'
let anotherNum = 20; // Tipo 'number' explícito
myNum = 12;
// myNum = '12';      // ❌ Error: 'string' no se puede asignar a 'number'
// anotherNum = false; // ❌ Error: 'boolean' no se puede asignar a 'number'
let myStr = 'Hello';
let anotherStr = 'World';
// myStr = true;      // ❌ Error
let myBool = true;
let anotherBool = false;
// myBool = 'true';   // ❌ Error
// ----------------------------------------------------------
// 2. Inferencia al declarar sin valor (Listings 2-3 y 2-4)
// ----------------------------------------------------------
// Si declaras una variable vacía para asignarle valor después, ponle el tipo:
let salary;
salary = 12000;
// salary = '12000'; // ❌ Error porque le indicamos ': number'
// ----------------------------------------------------------
// 3. Objetos (Listings 2-5 y 2-6)
// ----------------------------------------------------------
// Objeto con tipos inferidos automáticamente:
const developer = {
    firstName: 'Nabendu',
    lastName: 'Biswas',
    age: 40,
    isTrainer: true
};
// Objeto con tipos declarados explícitamente:
const newDeveloper = {
    name: 'Mousam',
    age: 39,
    isDev: true
};
newDeveloper.name = 'Mousam Mishra';
// newDeveloper.age = 'Forty';       // ❌ Error: 'age' debe ser number
// newDeveloper.firstName = 'Mousam'; // ❌ Error: 'firstName' no existe en el molde
// ----------------------------------------------------------
// 4. Arreglos Simples y Complejos (Listings 2-7, 2-8 y 2-9)
// ----------------------------------------------------------
const languages = ['React', 'Angular', 'Vue'];
languages.push('TypeScript');
// languages.push(56); // ❌ Error: solo acepta strings
const numbers = [51, 22, 33];
numbers.push(56);
// Arreglo de Objetos (Listing 2-8):
const arrOfObj = [
    { name: 'Nabendu', age: 40 },
    { name: 'Mousam', age: 39 }
];
arrOfObj.push({ name: 'Shikha', age: 39 });
// Arreglo de Arreglos / Matriz (Listing 2-9):
const arrOfArrays = [
    [11, 32, 43],
    [34, 75, 64]
];
arrOfArrays.push([21, 32, 13]);
// ----------------------------------------------------------
// 5. Funciones (Listings 2-10 y 2-11)
// ----------------------------------------------------------
// Función que recibe números y devuelve un número:
const multiNums = (num1, num2) => {
    return num1 * num2;
};
// Función que NO devuelve nada (void):
const printSum = (num1, num2) => {
    console.log(`Suma en printSum: ${num1 + num2}`);
};
console.log("Multiplicación (10 * 20):", multiNums(10, 20));
printSum(10, 20);
// ----------------------------------------------------------
// 6. Union Types y Literal Types (Listings 2-12 y 2-13)
// ----------------------------------------------------------
// Union Type: acepta número O texto
let numOrStr;
numOrStr = 10;
numOrStr = 'Ten';
let arrUnion = [10, 'Ten'];
// Literal Type: solo acepta exactamente uno de estos 4 nombres
let myLiteral = 'Nabendu';
myLiteral = 'Mousam';
// myLiteral = 'Parag'; // ❌ Error: 'Parag' no está en la lista permitida
// ----------------------------------------------------------
// 7. Enum y Propiedades Opcionales '?' (Listings 2-14 y 2-15)
// ----------------------------------------------------------
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const myRole = Role.ADMIN;
const hridayRole = Role.AUTHOR;
console.log("Roles Enum -> myRole:", myRole, "| hridayRole:", hridayRole);
// Propiedad opcional con '?': no hace falta pasar 'age' si no la tenemos
let betterOptObj = {
    name: 'Nabendu'
};
const person1 = { name: 'Nabendu', age: 40, isDev: true };
const person2 = { name: 'Mousam', age: 39, isDev: true };
const person4 = 'Nabendu';
const coder1 = [
    { name: 'Nabendu', category: 'frontend', age: 40 },
    { name: 'Mousam', category: 'backend', age: 39 }
];
console.log(`${person1.name} is a ${person1.isDev} Dev and is ${person1.age} years old`);
console.log("Lista de coders:", coder1);
