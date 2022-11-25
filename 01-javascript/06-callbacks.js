// /06-callbacks
//      06-callbacks.js

const fs = require('fs');

// Leer un archivo
console.log('Primero');
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if (errorLecturaPrimerArchivo) {
            console.error('Hubo error', errorLecturaPrimerArchivo);
        } else {
            console.log('Segundo');
        }
    }
);
console.log('Tercero');

// Escribir un archivo
// fs.writeFile(
//     './06-ejemplo.txt',
//     'Este es el nuevo contenido del archivo',
//     (errorEscrituraArchivo) => {
//         if (errorEscrituraArchivo) {
//             console.error('Hubo error', errorEscrituraArchivo);
//         } else {
//             console.log('Se escribió correctamente');
//         }
//     }
// )

// 1) Leer el archivo 06-ejemplo.txt
// luego imprimir en consola
// 2) Despues del paso 1, leer el archivo: 01-variables.js
// e imprimirlo en consola
// 3) Crear un nuevo archivo llamado: 06-nuevo-archivo.txt
// con el contenido de los otros dos archivos

// Leer el archivo 06-ejemplo.txt
let contenidoArchivo = '';
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if (errorLecturaPrimerArchivo) {
            console.error('Hubo error en primer archivo', errorLecturaPrimerArchivo);
        } else {
            // Despues del paso 1, leer el archivo: 01-variables.js
            fs.readFile(
                './01-variables.js',
                'utf-8',
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                    if (errorLecturaSegundoArchivo) {
                        console.error('Hubo error en segundo archivo', errorLecturaSegundoArchivo);
                    } else {
                        // Crear un nuevo archivo llamado: 06-nuevo-archivo.txt
                        // con el contenido de los otros dos archivos
                        contenidoArchivo = contenidoPrimerArchivo + contenidoSegundoArchivo;
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            contenidoArchivo,
                            (errorEscrituraArchivo) => {
                                if (errorEscrituraArchivo) {
                                    console.error('Hubo error al escribir un archivo', errorEscrituraArchivo);
                                } else {
                                    console.log('Se escribió correctamente');
                                }
                            }
                        )
                    }
                }
            );
        }
    }
);




