"use strict";
// ==========================================================
// CAPÍTULO 4: Clases en TypeScript (Listings 4-1 a 4-11)
// ==========================================================
console.log("=== DEMO DE CLASES DEL CAPÍTULO 4 ===\n");
// ----------------------------------------------------------
// 1. Clase Base Abstracta 'Room' (Listing 4-10)
// ----------------------------------------------------------
// - 'abstract': No se puede hacer 'new Room()' directamente; sirve de base para sus hijas.
// - 'protected family': Accesible desde 'Room' y desde sus clases hijas ('OyoRoom', 'TreboHotel').
// - 'readonly': Se puede leer desde afuera, pero no modificar.
// - 'constructor(public room: string)': Atajo que crea y asigna 'this.room' automáticamente.
class Room {
    room;
    family = [];
    dobShikha = '1982-12-12';
    dobHriday = '2013-12-12';
    constructor(room) {
        this.room = room;
    }
    addFamilyMember(member) {
        this.family.push(member);
    }
    showFamily() {
        console.log(`Familia en ${this.room}:`, this.family);
    }
}
// ----------------------------------------------------------
// 2. Herencia, Getter/Setter y Static en 'OyoRoom' (Listings 4-5 a 4-10)
// ----------------------------------------------------------
class OyoRoom extends Room {
    roomRent;
    reports = [];
    static currentYear = 2022;
    // Getter: permite leer 'shekar.allReports' sin usar paréntesis ()
    get allReports() {
        return this.reports;
    }
    // Setter: permite asignar 'shekar.newReport = "texto"' como si fuera variable
    set newReport(report) {
        this.reports.push(report);
    }
    constructor(room, roomRent) {
        super(room); // Llama al constructor de la clase madre 'Room'
        this.roomRent = roomRent;
    }
    // Método estático: se usa directo con 'OyoRoom.createRoom()' sin hacer 'new'
    static createRoom(room) {
        return { room: room };
    }
    // Sobrescribimos (override) addFamilyMember de la clase madre
    addFamilyMember(member) {
        if (member === 'Kapil')
            return; // No permite agregar a 'Kapil'
        this.family.push(member);
    }
    changeRoomRent(rent) {
        this.roomRent = rent;
    }
    showRoomRent() {
        console.log(`${this.room}'s room rent is $${this.roomRent}`);
    }
    // Implementación obligatoria del método abstracto cleanRoom
    cleanRoom(soap) {
        console.log(`${this.room}'s Oyo Room cleaned with ${soap}`);
    }
}
// Probando métodos estáticos (sin usar 'new'):
const rohit = OyoRoom.createRoom('Rohit');
console.log("Static createRoom:", rohit, "| Año estático:", OyoRoom.currentYear);
// Probando instancia de OyoRoom:
const shekar = new OyoRoom('Shekar', 1000);
shekar.addFamilyMember('Shekar');
shekar.addFamilyMember('Shobha');
shekar.addFamilyMember('Kapil'); // Ignorado por la validación
shekar.showFamily();
shekar.showRoomRent();
shekar.changeRoomRent(2000);
shekar.showRoomRent();
shekar.cleanRoom('Phenyl');
// Probando Setter y Getter:
shekar.newReport = 'Year End Report';
console.log("Reportes (usando getter):", shekar.allReports);
// ----------------------------------------------------------
// 3. Patrón Singleton con 'TreboHotel' (Listing 4-11)
// ----------------------------------------------------------
// Tiene 'private constructor' para que exista UNA SOLA instancia en toda la app.
class TreboHotel extends Room {
    roomRent;
    static instance;
    constructor(room, roomRent) {
        super(room);
        this.roomRent = roomRent;
    }
    static getInstance() {
        if (!TreboHotel.instance) {
            TreboHotel.instance = new TreboHotel('Trebo', 1000);
        }
        return TreboHotel.instance;
    }
    cleanRoom(soap) {
        console.log(`${this.room}'s Trebo Room cleaned with ${soap}`);
    }
}
const vijay = TreboHotel.getInstance();
const otroAdmin = TreboHotel.getInstance();
console.log("\nSingleton TreboHotel:", vijay);
console.log("¿vijay y otroAdmin son exactamente el mismo objeto?:", vijay === otroAdmin);
