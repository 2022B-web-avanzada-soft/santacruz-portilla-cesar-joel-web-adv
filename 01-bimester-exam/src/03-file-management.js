// src/03-file-management.js
import fs from 'fs';

/**
 * The following code is used to read a file
 *     1. We create a new Promise
 *     2. We use the fs.readFile function to read the file
 *     3. We use the callback function to resolve or reject the Promise
 *     4. If the file does not exist, we create it
 *     5. We return the Promise
 * @param {string} path - Path to the file.
 */
export async function asyncReadFile(path) {
    return await new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                async (readFileError, readFileContent) => {
                    if (readFileError) {
                        if (readFileError.code === 'ENOENT') {
                            await asyncWriteFile(path, '[]')
                            resolve('[]')
                        }
                        reject('There was an unexpected error reading the file.');
                    } else {
                        resolve(readFileContent);
                    }
                }
            );
        }
    )
}

/**
 * The following code is used to write a file
 *     1. We create a new Promise
 *     2. We use the fs.writeFile function to write the file
 *     3. We use the callback function to resolve or reject the Promise
 *     4. We return the Promise
 * @param {string} path - Path to the file.
 * @param {string} newContent - Content to write in the file.
 */
export async function asyncWriteFile(path, newContent) {
    return await new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                newContent,
                (writeFileError) => {//callback
                    if (writeFileError) {
                        reject('There was an unexpected error writing the file.');
                    } else {
                        resolve(newContent);
                    }
                }
            );
        }
    )
}

/**
 * The following code is used to add a new data to a JSON file
 *    1. We read the file
 *    2. We parse the file content to JSON
 *    3. We add the new data to the JSON
 *    4. We stringify the JSON
 *    5. We write the file
 *    6. We return the Promise
 *    7. If the file does not exist, we create it
 *    8. We return the Promise
 *    9. If there is an error, we return the error
 *    10. We return the Promise
 * @param {string} path - Path to the file.
 * @param {string} newContent - Content to write in the file.
 */
export async function asyncAddToJSON(path, newContent) {
    return asyncReadFile(path).then(
        /**
         * @param {string} actualFileData - Actual content of the file.
         */
        (actualFileData) => {
            if (actualFileData === "") {
                actualFileData = '[]'
            }
            const actualFileDataJSON = JSON.parse(actualFileData);
            actualFileDataJSON.push(newContent)
            const newFileData = JSON.stringify(actualFileDataJSON);
            return asyncWriteFile(path, newFileData);
        }
    ).catch(
        async (error) => {
            return console.log(
                "#####################################################" +
                "Error: " + error + "\n" +
                "No hemos podido obtener la información por problemas " +
                "con el archivo de registro. Por favor vuelva a " +
                "intentar la operación." +
                "#####################################################"
            )
        }
    )
}