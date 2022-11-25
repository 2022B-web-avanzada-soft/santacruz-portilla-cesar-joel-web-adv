// /04-funciones
//      04-funciones.js

function soloNumeros(a, b, c){
    return a - b + c; // valor a retornar
}
// JS permiste el uso de funciones sin validaciones
// soloNumeros('v', true, [1,2,3]);
// soloNumeros((a)=>a, (b)=>b, (c)=>c);
// soloNumeros(1,2,3,4,5,6,7,8,9,10);
// soloNumeros();

function soloLetras(a, b, c){ // Sin return -> undefined
    console.log(a, b, c);
}

// Funciones nombradas - named functions
function funcionNombrada(){
    console.log('Hola');
}
// Funciones anonimas - anonymous functions
const funcionAnonima = function(){};
var funcionAnonima2 = function(){};
let funcionAnonima3 = function(){};
// El forEach es una funcion anonima
[].forEach(function(){});
// Como guardamos nuestras funciones en una variable
// podemos usarlas sin problema
funcionAnonima();
funcionAnonima2();
funcionAnonima3();

// Funciones anonimas - Fat arrow functions
// Fat arrow > anonymous
const funcionAnonimaFatArrow = () => {}; // -> =>
let funcionAnonimaFatArrow2 = () => {};
var funcionAnonimaFatArrow3 = () => {};
[].forEach(() => {});
funcionAnonimaFatArrow();
funcionAnonimaFatArrow2();
funcionAnonimaFatArrow3();
// La diferencia es que ahora en vez de la palabra function
// usamos la flecha =>
const funcionAnonimaFatArrow4 = () => {}
const funcionAnonimaFatArrow5 = (parametro) => {
    return parametro + 1;
}
// Siempre y cuando trabajemos en una sola linea
const funcionAnonimaFatArrow6 = (parametro) => parametro + 1;
// Si solo tenemos un parametro, omitimos los parentesis
const funcionAnonimaFatArrow7 = parametro => parametro + 1;
// Si tenemos varios parametros
const funcionAnonimaFatArrow8 = (parametro1, parametro2) => parametro1 + parametro2;

// ... => parametros infinitos => llegan en un arreglo de parametros
// Solo podemos tener un parametro infinito por funcion
// function sumarNumero(a, b, c, d, f...todosNumeros){
function sumarNumero(...todosNumeros){
    let total = 0;
    todosNumero.forEach(
        (numeroActual) => {
            total = total + numeroActual;
        }
    );
    return total;
    // return todosNumeros.reduce((a, b) => a + b, 0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10);
