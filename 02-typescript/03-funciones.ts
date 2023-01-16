//03-funciones.ts
function sumarNumeros(
    numeroInicial: number,
    ...numerosASumar: number[]
): number {
    return numeroInicial;
}
function imprimir(mensaje?: string): void { // undefined
    console.log('Hola ' + mensaje ? mensaje : 'bienvenido');
}
const arregloNumeros: number[] = [1, 2, 3, 4, 5, 6];
const arregloNumerosDos: Array<number> = [1, 2, 3, 4, 5, 6];
const arregloNumerosTres: (number | string | boolean)[] = [1, 2, 3, 4, 5, 6, 'a', true, false];
const arregloNumerosCuatro: Array<number | string | boolean> = [1, 2, 3, 4, 5, 6, 'a', true, false];
let arregloNumerosCinco: number[] | string[] = [1, 2, 3, 4, 5, 6];
arregloNumerosCinco = ['a', 'b', 'c'];
