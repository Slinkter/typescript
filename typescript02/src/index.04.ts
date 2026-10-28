class User {
  public static countUser = 0;
  public name: string = "";
  public age: number = 0;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
    // this.countUser = this.countUser + 1;
    User.countUser++;
  }
  public static isAdult(user: User): boolean {
    if (user.age > 18) return true;
    return false;
  }
}

const luis = new User("Luis", 10);
const ana = new User("ana", 20);
const jorge = new User("jorge", 20);
const lisa = new User("lisa", 20);
console.log(User.countUser);
console.log(User.isAdult(luis));
