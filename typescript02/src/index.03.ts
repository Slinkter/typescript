class Persona {
  protected name: string;
  public lastName: string;
  public age: number;

  public constructor(pName: string, pLastName: string, pAge: number) {
    this.name = pName;
    this.lastName = pLastName;
    this.age = pAge;
  }

  public getInfo(): void {
    console.log({
      name: this.name,
      age: this.age,
      last: this.lastName,
    });
  }
}

class User extends Persona {
  constructor(
    pName: string,
    pLastName: string,
    pAge: number,
    protected pEmail: string,
  ) {
    super(pName, pLastName, pAge);
  }

  getInfo(): void {
    console.log({
      name: this.name,
    });
  }
  showEmail() {
    console.log({ email: this.pEmail });
  }
  setEmail(email: string) {
    this.pEmail = email;
  }
  getEmail() {
    return this.pEmail;
  }
  get _email() {
    return this.pEmail;
  }
  set _email(email: string) {
    this.pEmail = email;
  }
}
const angel = new User("Luis", "Cave", 20, "hola@.com");
const ana = new User("ana", "razor", 23, "colito@gmail.com");
angel.setEmail("angel-2@gmail.cm");
angel.showEmail();
angel.getInfo();
ana.getInfo();
console.log(ana.showEmail());

// https://www.youtube.com/watch?v=VI6GzKEl4v4&t=5794s
