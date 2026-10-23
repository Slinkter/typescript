"use strict";
// ==========================================================
// CAPÍTULO 6: Decoradores (Listings 6-12 a 6-18)
// Libro: TypeScript Basics — Nabendu Biswas (2023)
// Requiere "experimentalDecorators": true en tsconfig.json
// ==========================================================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("=== CAPÍTULO 6: DECORADORES ===\n");
// ----------------------------------------------------------
// Listing 6-12 — Clase Car sin decoradores
// ----------------------------------------------------------
console.log("--- 1. Clase Car (Listing 6-12) ---");
class Car {
    name = "Tata Nexon";
    constructor() {
        console.log(`Car ${this.name} created`);
    }
}
const car1 = new Car();
console.log(car1);
// ----------------------------------------------------------
// Listing 6-13 — Decorador de clase
// Un decorador es una función que recibe el constructor de
// la clase. Se ejecuta cuando la clase se define, no cuando
// se crea una instancia.
// ----------------------------------------------------------
console.log("\n--- 2. Decorador simple (Listing 6-13) ---");
function Helper(constructor) {
    console.log(`Showing constructor: ${constructor.name}`);
    console.log(constructor);
}
let DecoratedCar = class DecoratedCar {
    name = "Tata Nexon";
    constructor() {
        console.log(`Car ${this.name} created`);
    }
};
DecoratedCar = __decorate([
    Helper
], DecoratedCar);
const decoratedCar = new DecoratedCar();
console.log(decoratedCar);
// ----------------------------------------------------------
// Listing 6-14 — Decorator factory
// La función exterior recibe parámetros y devuelve el
// decorador real. Así se puede personalizar el mensaje.
// ----------------------------------------------------------
console.log("\n--- 3. Decorator factory (Listing 6-14) ---");
function HelperFactory(genericString) {
    return function (constructor) {
        console.log(genericString);
        console.log(constructor);
    };
}
let FactoryCar = class FactoryCar {
    name = "Tata Nexon";
    constructor() {
        console.log(`Car ${this.name} created`);
    }
};
FactoryCar = __decorate([
    HelperFactory("Showing constructor:")
], FactoryCar);
const factoryCar = new FactoryCar();
console.log(factoryCar);
// ----------------------------------------------------------
// Listing 6-15 / 6-16 — Decorador tipo Angular
// Inyecta HTML dentro de <div id="app"></div>. El guion bajo
// (_) indica que el parámetro existe pero no se usa.
// ----------------------------------------------------------
console.log("\n--- 4. AngularTemplate (Listings 6-15 / 6-16) ---");
function AngularTemplate(template, hookId) {
    return function (_) {
        // Protegido para que el archivo también se pueda ejecutar con Node,
        // donde no existe el objeto global 'document'.
        if (typeof document === "undefined")
            return;
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
let AngularCar = class AngularCar {
    name = "Tata Nexon";
    constructor() {
        console.log(`Car ${this.name} created`);
    }
};
AngularCar = __decorate([
    AngularTemplate("<h4>This is an Angular like Template code</h4>", "app")
], AngularCar);
const angularCar = new AngularCar();
console.log(angularCar);
// ----------------------------------------------------------
// Listing 6-17 / 6-18 — Decoradores de propiedad, accessor,
// método y parámetro.
// ----------------------------------------------------------
console.log("\n--- 5. Property / accessor / method / parameter decorators ---");
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Employee {
    title;
    _fullName;
    set fullName(name) {
        this._fullName = name;
    }
    constructor(title, name) {
        this.title = title;
        this._fullName = name;
    }
    getNameWithTitle(id) {
        return `Employee - ${id}, Title - ${this.title}, Name - ${this._fullName}`;
    }
}
__decorate([
    Log
], Employee.prototype, "title", void 0);
__decorate([
    Log2
], Employee.prototype, "fullName", null);
__decorate([
    Log3,
    __param(0, Log4)
], Employee.prototype, "getNameWithTitle", null);
const employee = new Employee("Developer", "Luis Cueva");
employee.fullName = "Luis J. Cueva";
console.log(employee.getNameWithTitle(101));
//# sourceMappingURL=decoratorsDemo.js.map