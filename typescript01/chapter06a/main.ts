console.log('Decorators Setup');

function identidad<T>(valor: T) {
    return valor
}

const nombre = identidad('luis')
console.log(nombre);
