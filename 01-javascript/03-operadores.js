// /03-operadores
//      03-operadores.js

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// Funciones como parámetros
// Find
// enviamos una expresión -> TRUTY FALSY
// devuelve el primero que cumpla con la condición
const respuestaFind = arreglo.find(
    function (valorActual, indiceActual, arregloCompleto){
        console.log('valorActual', valorActual)
        console.log('indiceActual', indiceActual)
        console.log('arregloCompleto', arregloCompleto)
        return valorActual.nota < 5; // Expresión ===
    }
);
console.log('respuestaFind', respuestaFind); // El primero que encuentre // undefined

// findIndex
// enviamos una expresión -> TRUTY FALSY
// devuelve el índice del primero que cumpla con la condición
const respuestaFindIndex = arreglo.findIndex(
    function (valorActual, indiceActual, arregloCompleto){
        return valorActual.nombre === "Cristian"; // Expresión ===
    }
);
console.log('respuestaFindIndex', respuestaFindIndex); // El primero que encuentre // -1

// forEach
// Itera el arreglo
// No devuelve nada
respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arregloCompleto){
        console.log('valorActual', valorActual)
    }
);
console.log('respuestaForEach', respuestaForEach); // undefined

// map (Modificar o mutar el arreglo y devuelve uno nuevo)
// Enviamos los datos del nuevo arreglo
// Devuelve un nuevo arreglo
const respuestaMap = arreglo.map(
    function (valorActual, indiceActual, arregloCompleto){
        const notaActual = valorActual.nota + 1;
        return {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: notaActual,
            estaAprobado: notaActual >= 14,
            casado: false,
        };
    }
);
console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);

// filter (Filtrar el arreglo y devuelve uno nuevo)
// Enviamos una expresión -> TRUTY FALSY
// Devuelve un nuevo arreglo
const respuestaFilter = arreglo.filter(
    function (valorActual, indiceActual, arregloCompleto){
        return valorActual.nota >= 14;
    }
);
console.log('respuestaFilter', respuestaFilter);

// some (Alguno cumple la condición)
// Devuelve un booleano
const respuestaSome = arreglo.some(
    function (valorActual, indiceActual, arregloCompleto){
        return valorActual.nota < 9;
    }
);
console.log('respuestaSome', respuestaSome);

// every (Todos cumplen la condición)
// Devuelve un booleano
const respuestaEvery = arreglo.every(
    function (valorActual, indiceActual, arregloCompleto){
        return valorActual.nota > 14;
    }
);
console.log('respuestaEvery', respuestaEvery);
