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
