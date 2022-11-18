// /02-arreglos
//      02-arreglos.js

let arreglo = [1,2,3,4,5,6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = "Cesar";
arreglo = null;
arreglo = undefined;
arreglo = {};
arreglo = [true, 1, 1.2, "Cesar", 'Joel', null, undefined, {}, [1, 2]];
arreglo = [6, 7, 8, 9, 10];
//for of
for (let numero of arreglo) {
    console.log('numero', numero);
}
//for in
for (let indice in arreglo) {
    arreglo[indice];
    console.log('indice', indice);
}
let objetoPrueba = {a: '1', b: '2', c: '3'};
for (let llave in objetoPrueba) {
    console.log('llave', llave);
    console.log('valor', objetoPrueba[llave]);
}
arreglo.push(11); // Agregar al final
console.log('push', arreglo);
// [6, 7, 8, 9, 10, 11]
arreglo.pop(); // Eliminar al final
console.log('pop', arreglo);
// [6, 7, 8, 9, 10]
arreglo.unshift(5); // Agregar al inicio
console.log('unshift', arreglo);
// [5, 6, 7, 8, 9, 10]
arreglo.shift(); // Eliminar al inicio
console.log('shift', arreglo);
// [6, 7, 8, 9, 10]
arreglo.splice(1, 0, 1, 2, 3, 4); // Agregar en posicion
console.log('splice', arreglo);
// [6, 1, 2, 3, 4, 7, 8, 9, 10]
arreglo.splice(1, 4); // Eliminar en posicion
console.log('splice', arreglo);
// [6, 7, 8, 9, 10]

// Encontrar indices
const indiceNueve = arreglo.indexOf(9); // Encuentra el primer elemento y devuelve el indice
console.log('indiceNueve', indiceNueve);
arreglo.splice(indiceNueve, 2);
// [6, 7, 8]
console.log('splice', arreglo);