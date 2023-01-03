// /09-inquirer
//      09-inquirer.js

// nmp init -> package.json -> dependencias -> scripts
// npm install inquirer -> npm i inquirer
// node_modules -> estan las dependencias

const inquirer = require('inquirer');
async function main() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa tu nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa tu edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    } catch (error) {
        console.error('Error', error);
    }
}
main();
