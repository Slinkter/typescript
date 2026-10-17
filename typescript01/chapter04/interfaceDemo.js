"use strict";
// ==========================================================
// CAPÍTULO 4: Interfaces con Clases (Listings 4-14 a 4-16)
// ==========================================================
console.log("=== DEMO DE INTERFACES DEL CAPÍTULO 4 ===\n");
// 3. Clase Person: implementa Greeting (sin usar la propiedad opcional nickName)
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet(sentence) {
        console.log(`${sentence} ${this.name}`);
    }
}
// 4. Clase Dog: implementa Greeting y SÍ usa la propiedad opcional nickName
class Dog {
    name;
    nickName = "Doggy";
    constructor(name) {
        this.name = name;
    }
    greet(sentence) {
        console.log(`${sentence} ${this.name} (${this.nickName})`);
    }
}
// Probando Person:
let developer = new Person('Kapil');
// developer.name = 'Rohit'; // ❌ Error: 'name' es readonly en la interfaz Naming
developer.greet('Hello from');
// Probando Dog:
let dog = new Dog('Rocket');
console.log("Apodo opcional del perro:", dog.nickName);
dog.greet('Woof from');
