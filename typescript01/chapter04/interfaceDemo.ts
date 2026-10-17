// ==========================================================
// CAPÍTULO 4: Interfaces con Clases (Listings 4-14 a 4-16)
// ==========================================================

console.log("=== DEMO DE INTERFACES DEL CAPÍTULO 4 ===\n");

// 1. Interfaz base con 'readonly' y propiedad opcional '?'
interface Naming {
    readonly name: string;
    nickName?: string; // Opcional: las clases no están obligadas a incluirla
}

// 2. Herencia entre interfaces: Greeting hereda todo lo de Naming
interface Greeting extends Naming {
    greet(sentence: string): void;
}

// 3. Clase Person: implementa Greeting (sin usar la propiedad opcional nickName)
class Person implements Greeting {
    constructor(public name: string) {}

    greet(sentence: string): void {
        console.log(`${sentence} ${this.name}`);
    }
}

// 4. Clase Dog: implementa Greeting y SÍ usa la propiedad opcional nickName
class Dog implements Greeting {
    nickName: string = "Doggy";

    constructor(public name: string) {}

    greet(sentence: string): void {
        console.log(`${sentence} ${this.name} (${this.nickName})`);
    }
}

// Probando Person:
let developer: Greeting = new Person('Kapil');
// developer.name = 'Rohit'; // ❌ Error: 'name' es readonly en la interfaz Naming
developer.greet('Hello from');

// Probando Dog:
let dog: Greeting = new Dog('Rocket');
console.log("Apodo opcional del perro:", dog.nickName);
dog.greet('Woof from');
