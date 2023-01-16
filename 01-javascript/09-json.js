// /09-json
//      09-json.js

// Stringify y Parse

const arregloUsuarios = [
    {
        id: 1,
        nombre: 'Adrian'
    }
];
const arregloGuardado = JSON.stringify(arregloUsuarios);
console.log('arregloGuardado', arregloGuardado);
const usuario = {
    id: 1,
    nombre: 'Adrian'
}
const objetoGuardado = JSON.stringify(usuario);
console.log('objetoGuardado', objetoGuardado);
const arregloRestaurado = JSON.parse(arregloGuardado);
console.log('arregloRestaurado', arregloRestaurado);
