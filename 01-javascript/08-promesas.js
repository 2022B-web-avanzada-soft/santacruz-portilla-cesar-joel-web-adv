// /08-promesas
//      08-promesas.js

const fs = require('fs');

function leerArchivo(path){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (errorLecturaArchivo, contenidoArchivo) => {
                    if (errorLecturaArchivo) {
                        reject(errorLecturaArchivo);
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    )
}

function escribirArchivo(path, contenidoArchivo) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscrituraArchivo) => {
                    if (errorEscrituraArchivo) {
                        reject(errorEscrituraArchivo);
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    )
}
function ejercicio08(path, contenidoArchivo) {
    return leerArchivo(path)
        .then((contenidoActual)=>{
            return escribirArchivo(path, contenidoActual + contenidoArchivo)
        })
        .catch((error)=>{
            return escribirArchivo(path, contenidoArchivo)
        }
        )
}

// ejercicio08('./06-ejemplo.txt', ' Esto esta funcionando')
//     .then(
//         (contenidoArchivo)=>{
//             console.log('Contenido archivo', contenidoArchivo);
//         }
//     )
//     .catch(
//         (error)=>{
//             console.error('Error', error);
//         }
//     )

// ASYNC AWAIT
// Reglas:
// 1) Debe estar dentro de una funcion (nombrada o anonima)
// 2) Agregar la palabra 'async' antes de la declaracion de la funcion
// 3) Agregar la palabra 'await' antes de la declaracion de la promesa
async function asyncAwaitUno(path, nuevoContenido) {
    // Si sabemos que en la promesa puede haber un reject usamos try catch
    try{
        const respuestaContenidoArchivo = await leerArchivo(path);
        console.log('Contenido archivo', respuestaContenidoArchivo);
        await escribirArchivo(path, respuestaContenidoArchivo + nuevoContenido);
        // leerArchivo(path) // async queda siempre para el final
    } catch (e) {
        console.error('Error', e);
    }
}

const asyncAwaitDos = async function () {

}

const asyncAwaitTres = async () => {

}
asyncAwaitUno('./06-ejemplo.txt', ' Esto esta funcionando async await').then(r => console.log(r));

/*

Proyecto (entre 2 personas)
- Historias de usuario (trello)
    - Definition of ready
        - Yo como ROL, quiero XXXXXX para XXXX
        - Existen varias interpretaciones para esto nos sirve los criterios de aceptacion
        - Criterios de aceptacion
            - Debe tener un boton
            - Debe tener un input
            - Debe salir en PDF
        - Discutido
        - Esfuerzo - Story points
        - Prioridad
        - Prototipo

- Modelo Base de datos relacional
- Prototipos (figma)

 */
