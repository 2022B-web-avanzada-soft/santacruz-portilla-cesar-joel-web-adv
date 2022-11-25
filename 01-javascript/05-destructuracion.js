// /05-destructuracion
//      05-destructuracion.js

// Destructuración de objetos
// El orden si importa
const cesar = {
    nombre: 'Cesar',
};
const carolina = {
    nombre: 'Carolina',
    apellido: 'Santacruz',
};
const cesarCarolina = { // Crea una nueva referencia (valor)
    ...carolina,
    ...cesar,
}
console.log(cesarCarolina);

// Destructuración de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno,
    ...arregloDos,
]; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(superArreglo);

