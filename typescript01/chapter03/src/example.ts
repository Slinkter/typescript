type Comandos = "npx tsc" | "tsc --init" | "tsc --watch";

const ShowCMD = (exec: Comandos) => {
  if (exec === "npx tsc") {
    return "ejecuta typescript";
  } else if (exec === "tsc --init") {
    return "ejecuta la iniciacion de typescript";
  } else {
    return "ejecuta y comila y vigila en tiempo reall";
  }
};
