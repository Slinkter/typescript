"use strict";
class User {
    static countUser = 0;
    name = "";
    age = 0;
    constructor(name, age) {
        this.age = age;
        this.name = name;
        // this.countUser = this.countUser + 1;
        User.countUser++;
    }
    static isAdult(user) {
        if (user.age > 18)
            return true;
        return false;
    }
}
const luis = new User("Luis", 10);
const ana = new User("ana", 20);
const jorge = new User("jorge", 20);
const lisa = new User("lisa", 20);
console.log(User.countUser);
console.log(User.isAdult(luis));
