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
}

ejercicio08('./06-ejemplo.txt', ' Esto esta funcionando')
    .then(
        (contenidoArchivo)=>{
            console.log('Contenido archivo', contenidoArchivo);
        }
    )
    .catch(
        (error)=>{
            console.error('Error', error);
        }
    )