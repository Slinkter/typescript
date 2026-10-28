function sleep(delay: number) {
  return new Promise((resolve) => {
    return setTimeout(resolve, delay);
  });
}

async function getPokemons() {
  const url: string = "https://pokeapi.co/api/v2/pokemon/ditto";
  const pokemon = await fetch(url);
  throw new Error("Error de conexion");
  console.log(pokemon);
}

async function main() {
  console.log("inicio");
  await sleep(1000);

  try {
    const rpta = await getPokemons();
    console.log(rpta);
  } catch (error) {
    console.log("error: error en la funcion de getpokmeon");
  }
  console.log("fin");
}

console.log("hola mundo clase 05");
main();
