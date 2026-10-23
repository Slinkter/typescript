"use strict";
// ==========================================================
// EJERCICIOS PRÁCTICOS — CAPÍTULO 4: Clases e Interfaces
// ==========================================================
console.log("=== EJERCICIOS DEL CAPÍTULO 4 ===\n");
// ----------------------------------------------------------
// EJERCICIO 1: Clase con Atajo de Constructor, Public, Private y Readonly
// Enunciado:
// Crea una clase 'CuentaBancaria' con:
// - readonly banco: string = "Banco TS"
// - public titular (en el constructor)
// - private saldo (en el constructor)
// Y métodos 'depositar(monto)' y 'verSaldo()'.
// ----------------------------------------------------------
class CuentaBancaria {
    titular;
    saldo;
    banco = "Banco TS";
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(monto) {
        this.saldo += monto;
    }
    verSaldo() {
        return `[${this.banco}] Titular: ${this.titular} | Saldo: $${this.saldo}`;
    }
}
const miCuenta = new CuentaBancaria("Luis", 500);
miCuenta.depositar(200);
console.log("Ejercicio 1 ->", miCuenta.verSaldo());
// ----------------------------------------------------------
// EJERCICIO 2: Herencia (extends), Protected y Getter/Setter
// Enunciado:
// Crea una clase madre 'Empleado' con 'protected bono: number = 100'
// y una clase hija 'Programador' que sume ese bono a su sueldo usando un getter.
// ----------------------------------------------------------
class Empleado {
    nombre;
    sueldoBase;
    bono = 100;
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
}
class Programador extends Empleado {
    lenguaje;
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }
    // Getter para obtener el pago total sin llamar con ()
    get pagoTotal() {
        return this.sueldoBase + this.bono;
    }
    // Setter para actualizar el bono protegido
    set nuevoBono(valor) {
        this.bono = valor;
    }
}
const dev = new Programador("Ana", 1500, "TypeScript");
dev.nuevoBono = 250; // Usa el setter
console.log(`Ejercicio 2 -> ${dev.nombre} (${dev.lenguaje}) gana en total: $${dev.pagoTotal}`);
// ----------------------------------------------------------
// EJERCICIO 3: Clase Abstracta (abstract class)
// Enunciado:
// Crea una clase abstracta 'Figura' con el método abstracto 'calcularArea(): number'.
// Crea la clase hija 'Cuadrado' que implemente 'calcularArea()'.
// ----------------------------------------------------------
class Figura {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Cuadrado extends Figura {
    lado;
    constructor(lado) {
        super("Cuadrado");
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
const miCuadrado = new Cuadrado(6);
console.log(`Ejercicio 3 -> Área del ${miCuadrado.nombre} de lado 6: ${miCuadrado.calcularArea()}`);
// ----------------------------------------------------------
// EJERCICIO 4: Patrón Singleton (private constructor + getInstance)
// Enunciado:
// Crea una clase 'ConfiguracionTema' donde solo pueda existir
// una única instancia en toda la aplicación.
// ----------------------------------------------------------
class ConfiguracionTema {
    modo;
    static instancia;
    constructor(modo) {
        this.modo = modo;
    }
    static getInstance() {
        if (!ConfiguracionTema.instancia) {
            ConfiguracionTema.instancia = new ConfiguracionTema("oscuro");
        }
        return ConfiguracionTema.instancia;
    }
}
const config1 = ConfiguracionTema.getInstance();
const config2 = ConfiguracionTema.getInstance();
console.log(`Ejercicio 4 -> Modo actual: ${config1.modo} | ¿config1 === config2?: ${config1 === config2}`);
class Cancion {
    titulo;
    autor;
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    reproducir() {
        const infoAutor = this.autor ? `de ${this.autor}` : "(Autor desconocido)";
        console.log(`Ejercicio 5 -> 🎵 Reproduciendo: "${this.titulo}" ${infoAutor}`);
    }
}
const tema1 = new Cancion("Bohemian Rhapsody", "Queen");
tema1.reproducir();
