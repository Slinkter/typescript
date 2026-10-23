// ==========================================================
// CAPÍTULO 6: Decoradores (Listings 6-12 a 6-18)
// Libro: TypeScript Basics — Nabendu Biswas (2023)
// Requiere "experimentalDecorators": true en tsconfig.json
// ==========================================================

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

function Helper(constructor: Function) {
    console.log(`Showing constructor: ${constructor.name}`);
    console.log(constructor);
}

@Helper
class DecoratedCar {
    name = "Tata Nexon";

    constructor() {
        console.log(`Car ${this.name} created`);
    }
}

const decoratedCar = new DecoratedCar();
console.log(decoratedCar);

// ----------------------------------------------------------
// Listing 6-14 — Decorator factory
// La función exterior recibe parámetros y devuelve el
// decorador real. Así se puede personalizar el mensaje.
// ----------------------------------------------------------
console.log("\n--- 3. Decorator factory (Listing 6-14) ---");

function HelperFactory(genericString: string) {
    return function (constructor: Function) {
        console.log(genericString);
        console.log(constructor);
    };
}

@HelperFactory("Showing constructor:")
class FactoryCar {
    name = "Tata Nexon";

    constructor() {
        console.log(`Car ${this.name} created`);
    }
}

const factoryCar = new FactoryCar();
console.log(factoryCar);

// ----------------------------------------------------------
// Listing 6-15 / 6-16 — Decorador tipo Angular
// Inyecta HTML dentro de <div id="app"></div>. El guion bajo
// (_) indica que el parámetro existe pero no se usa.
// ----------------------------------------------------------
console.log("\n--- 4. AngularTemplate (Listings 6-15 / 6-16) ---");

function AngularTemplate(template: string, hookId: string) {
    return function (_: Function) {
        // Protegido para que el archivo también se pueda ejecutar con Node,
        // donde no existe el objeto global 'document'.
        if (typeof document === "undefined") return;

        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}

@AngularTemplate("<h4>This is an Angular like Template code</h4>", "app")
class AngularCar {
    name = "Tata Nexon";

    constructor() {
        console.log(`Car ${this.name} created`);
    }
}

const angularCar = new AngularCar();
console.log(angularCar);

// ----------------------------------------------------------
// Listing 6-17 / 6-18 — Decoradores de propiedad, accessor,
// método y parámetro.
// ----------------------------------------------------------
console.log("\n--- 5. Property / accessor / method / parameter decorators ---");

function Log(target: any, propertyName: string | symbol) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(
    target: any,
    name: string | symbol,
    descriptor: PropertyDescriptor,
) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Employee {
    @Log
    title: string;

    private _fullName: string;

    @Log2
    set fullName(name: string) {
        this._fullName = name;
    }

    constructor(title: string, name: string) {
        this.title = title;
        this._fullName = name;
    }

    @Log3
    getNameWithTitle(@Log4 id: number) {
        return `Employee - ${id}, Title - ${this.title}, Name - ${this._fullName}`;
    }
}

const employee = new Employee("Developer", "Luis Cueva");
employee.fullName = "Luis J. Cueva";
console.log(employee.getNameWithTitle(101));
