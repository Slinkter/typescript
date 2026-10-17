// ==========================================================
// EJERCICIOS PRÁCTICOS — CAPÍTULO 3: The TypeScript Compiler
// ==========================================================

console.log("=== EJERCICIOS DEL CAPÍTULO 3 ===\n");

// ----------------------------------------------------------
// EJERCICIO 1: Comprobar que rootDir y outDir funcionan
// Enunciado: Crea una interfaz 'ConfiguracionCompilador' que
// describa las carpetas de entrada y salida de este capítulo.
// ----------------------------------------------------------
interface ConfiguracionCompilador {
    carpetaEntrada: string;
    carpetaSalida: string;
    modoEstricto: boolean;
}

const miConfig: ConfiguracionCompilador = {
    carpetaEntrada: "./src",
    carpetaSalida: "./dist",
    modoEstricto: true
};

console.log(`Ejercicio 1 -> Compilando desde '${miConfig.carpetaEntrada}' hacia '${miConfig.carpetaSalida}' (strict: ${miConfig.modoEstricto})`);


// ----------------------------------------------------------
// EJERCICIO 2: Simulador de filtro include / exclude
// Enunciado: Crea una función que reciba una lista de archivos
// y devuelva solo los que NO terminen en '.ignore.ts'.
// ----------------------------------------------------------
const archivosEnSrc: string[] = [
    "src/main.ts",
    "src/ejercicios.ts",
    "src/roto.ignore.ts"
];

function filtrarArchivosParaCompilar(archivos: string[]): string[] {
    return archivos.filter(archivo => !archivo.endsWith(".ignore.ts"));
}

const archivosCompilados = filtrarArchivosParaCompilar(archivosEnSrc);
console.log("Ejercicio 2 -> Archivos que tsc sí compila:", archivosCompilados);


// ----------------------------------------------------------
// EJERCICIO 3: Comandos del compilador
// Enunciado: Usa un tipo literal para representar los 3 comandos
// aprendidos en el Capítulo 3 y muestra qué hace cada uno.
// ----------------------------------------------------------
type ComandoTSC = 'tsc --init' | 'tsc' | 'tsc -w';

function explicarComando(cmd: ComandoTSC): string {
    if (cmd === 'tsc --init') return "Crea el archivo tsconfig.json";
    if (cmd === 'tsc') return "Compila todos los archivos .ts del proyecto una vez";
    return "Se queda vigilando cambios y recompila automáticamente";
}

console.log("Ejercicio 3 -> 'tsc -w':", explicarComando('tsc -w'));
