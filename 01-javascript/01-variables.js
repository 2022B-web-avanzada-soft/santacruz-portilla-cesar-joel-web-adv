// /01-javascript
//      01-variables.js

// mutables (re asignadas)
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';
// Vamos a preferir CONST > LET > NUNCA VAR!

// Variables primitivas
const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Cesar"; //string
const apellidos = 'Santacruz'; //string
const booleano = true; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

// Repo path
// cd E:\GitKraken\santacruz-portilla-cesar-joel-web-adv\
// cd 01-javascript
// Run command
// node 01-variables.js