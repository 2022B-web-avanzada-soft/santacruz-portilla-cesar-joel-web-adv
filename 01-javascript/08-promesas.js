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
        // asyncReadFile(path) // async queda siempre para el final
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
(Tres entregables, subir entregables al repositorio)
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

- Modelo Base de datos relacional (diagrama, decimos tal tabla tiene tal campo, tipo de dato, etc. Y se relaciona con tal tabla Z)
- Prototipos (figma)

Examen

Escribir un programa CRUD (Create, Read, Update, Delete). Estas operaciones deben realizarce en las dos entidades.
Las entidades deben tener 5 datos cada una Entre los 10 datos de las entidades deben haber las siguientes variables
de JavasScript: Fechas, Booleano, String, Number.
Las entidades estan relacionadas de UNO a MUCHOS. En el ejemplo 1 Receta contiene un arreglo de ingredientes.

Ej:
Receta 1
5 datos
- Nombre (string)
- Numero de ingredientes (int)
- etc
Ingrediente N
5 datos
Toda la informacion se va a guardar en archivos, si cierro o abro el programa la informacion debe seguir estando.
Vamos a usar inquirer
Mi tema es Country, Ciudad
Examen 24 de enero.
Subir video, entidades usadas, ejecucion, operaciones crud, cerrar volver a abrir y que siga funcionando.

Esto no -----------------------
http - receta
Get /receta (todas las recetas)
Post /receta (crear una receta)
Put /receta/:id (actualizar una receta)
Get /receta/:id (obtener una receta)
Delete /receta/:id (eliminar una receta)
--------------------------------

 */
