// ==========================================================
// ARCHIVO EXCLUIDO EN tsconfig.json ("exclude": ["src/roto.ignore.ts"])
// ==========================================================
// Igual que el libro excluye 'index.ts' en la Figura 3-4 porque tenía errores
// del Capítulo 2, este archivo tiene un error intencional pero NO impide
// que 'npx tsc' compile el resto del proyecto sin fallar.

let numeroConError: number = "Esto daría error si no estuviera en exclude";
