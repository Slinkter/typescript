console.log("example 123");

{
  interface Human {
    type: "human";
    walking: number;
  }
  interface Horse {
    type: "horse";
    running: number;
  }
  type Mammal = Human | Horse;

  function move(elemento: Mammal) {
    switch (elemento.type) {
      case "human":
        console.log(` human is moving at ${elemento.walking} km/h`);
        break;
      case "horse":
        console.log(` horse is moving at ${elemento.running} km/h`);
        break;
      default:
        break;
    }
  }

  move({ type: "horse", running: 20 });
  move({ type: "human", walking: 20 });
}
