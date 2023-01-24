// src/04-main.js
import inquirer from 'inquirer';
import chalk from "chalk";
import {asyncReadFile, asyncWriteFile, asyncAddToJSON} from "./03-file-management.js";
import {Country} from "./01-country.js";
import {City} from "./02-city.js";

const dataPath = './data/json/all_data.json'
const mainMenuMessage = chalk.blue.italic('What do you want to do in the country menu?')
const mainMenuOptions = [
    'Add new country',
    'Delete country',
    'Update country',
    'Show all countries',
    'Manage cities',
    'Exit'
]
const cityMenuMessage = chalk.blue.italic('What do you want to do in the city menu?')
const cityMenuOptions = [
    'Add new city',
    'Delete city',
    'Update city',
    'Show all cities',
    'Back to main menu'
]

/**
 * This function shows the main menu
 */
export function main() {
    const mainMenuQuestions = [
        {
            type: 'list',
            name: 'mainOption',
            message: mainMenuMessage,
            choices: mainMenuOptions
        }
    ]
    return inquirer.prompt(mainMenuQuestions).then(
        /**
         * @param {{
         *     mainOption: string
         * }} answer
         */
        async (answer) => {
            switch (answer.mainOption) {
                case 'Add new country':
                    await mainAddCountry()
                    break
                case 'Delete country':
                    await mainDeleteCountry()
                    break
                case 'Update country':
                    await mainUpdateCountry()
                    break
                case 'Show all countries':
                    await mainShowAllCountries()
                    break
                case 'Manage cities':
                    await mainManageCities()
                    break
                case 'Exit':
                    await mainExit()
                    break

            }
        }
    );
}

/**
 * This function creates a new country and adds it to the JSON file
 */
function mainAddCountry() {
    Country.addCountry().then(
        /**
         * @param {string} newCountry
         */
        (newCountry) => {
            asyncAddToJSON(dataPath, newCountry).then(
                () => {
                    console.log(chalk.magenta.bgCyan('Country added successfully'))
                    main()
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }
    )
}

/**
 * This function deletes a country from the JSON file
 */
function mainDeleteCountry() {
    asyncReadFile(dataPath).then(
        /**
         * @param {string} fileCountryList
         */
        fileCountryList => {
            const countryList = JSON.parse(fileCountryList)
            Country.deleteCountry(countryList).then(
                newCountryList => {
                    asyncWriteFile(dataPath, JSON.stringify(newCountryList)).then(
                        () => {
                            main()
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                        }
                    )
                }
            )
        }
    )
}

/**
 * This function updates a country from the JSON file
 */
function mainUpdateCountry() {
    asyncReadFile(dataPath).then(
        /**
         * @param {string} fileCountryList
         */
        fileCountryList => {
            const countryList = JSON.parse(fileCountryList)
            Country.updateCountry(countryList).then(
                newCountryData => {
                    asyncWriteFile(dataPath, JSON.stringify(newCountryData)).then(
                        () => {
                            main()
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                        }
                    )
                }
            )
        }
    )
}

/**
 * This function shows all the countries in the JSON file
 */
function mainShowAllCountries() {
    asyncReadFile(dataPath).then(
        /**
         * @param {string} fileCountryList
         */
        fileCountryList => {
            const countryList = JSON.parse(fileCountryList)
            countryList.map(
                (country, index) => {
                    Country.printCountry(country, index)
                }
            )
            main()
        }
    )
}

/**
 * This function shows the city management menu
 */
function mainManageCities() {
    asyncReadFile(dataPath).then(
        /**
         * @param {string} fileCountryList
         */
        async fileCountryList => {
            const countryList = await JSON.parse(fileCountryList)
            await Country.findCountry(countryList).then(
                /**
                 * @param {number} countryIndex
                 */
                countryIndex => {
                    if (countryIndex !== -1) {
                        cityManagement(countryIndex, countryList);
                    } else {
                        console.log(chalk.magenta.bgCyan("There are no countries with that name"))
                        main()
                    }
                }
            )
        }
    )
}

/**
 * This function shows the exit message
 */
function mainExit() {
    console.log(chalk.green.bgWhiteBright.bold('Thanks for using our system!'))
    console.log(chalk.green.bgWhiteBright.bold('Developed by: Cesar J. Santacruz'))
    console.log(chalk.green.bgWhiteBright.bold('Contact: cesarjsantacruz2000@gmail.com'))
}

/**
 * This function shows the city management menu
 * @param {number} countryIndex - The index of the country in the country list
 * @param {Array} countryList - The list of countries
 */
function cityManagement(countryIndex, countryList) {

    const cityManagementQuestions = [
        {
            type: 'list',
            name: 'cityManagementOption',
            message: cityMenuMessage,
            choices: cityMenuOptions
        }
    ]
    inquirer.prompt(cityManagementQuestions).then(
        /**
         * @param {{
         *     cityManagementOption: string
         * }} answers
         */
        async (answers) => {
            switch (answers.cityManagementOption) {
                case 'Add new city':
                    await cityManagementAddCity(countryIndex, countryList)
                    break
                case 'Delete city':
                    await cityManagementDeleteCity(countryIndex, countryList)
                    break
                case 'Update city':
                    await cityManagementUpdateCity(countryIndex, countryList)
                    break
                case 'Show all cities':
                    await cityManagementShowAllCities(countryIndex, countryList)
                    break
                case 'Back to main menu':
                    main()
                    break
            }
        });
}

/**
 * This function adds a new city to a country in the JSON file
 * @param {number} countryIndex - The index of the country in the country list
 * @param {Array} countryList - The list of countries
 */
function cityManagementAddCity(countryIndex, countryList) {
    City.addCity().then(
        (newCity) => {
            countryList[countryIndex].visitedCities.push(newCity)
            asyncWriteFile(dataPath, JSON.stringify(countryList)).then(
                () => {
                    console.log(chalk.magenta.bgCyan('City added successfully'))
                    cityManagement(countryIndex, countryList)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }
    )
}

/**
 * This function deletes a city from a country in the JSON file
 * @param {number} countryIndex
 * @param {Array} countryList
 */
function cityManagementDeleteCity(countryIndex, countryList) {
    City.deleteCity(countryList, countryIndex).then(
        /**
         * @param {Array} newCountryList
         */
        newCountryList => {
            asyncWriteFile(dataPath, JSON.stringify(newCountryList)).then(
                () => {
                    cityManagement(countryIndex, newCountryList)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }
    )
}

/**
 * This function updates a city from a country in the JSON file
 * @param {number} countryIndex
 * @param {Array} countryList
 */
function cityManagementUpdateCity(countryIndex, countryList) {
    City.updateCity(countryList, countryIndex).then(
        /**
         * @param {Array} newCountryList
         */
        newCountryList => {
            asyncWriteFile(dataPath, JSON.stringify(newCountryList)).then(
                () => {
                    cityManagement(countryIndex, newCountryList)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }
    )
}

/**
 * This function shows all the cities from a country in the JSON file
 * @param {number} countryIndex
 * @param {Array} countryList
 */
function cityManagementShowAllCities(countryIndex, countryList) {
    if (countryList[countryIndex].visitedCities.length > 0) {
        City.printCity(countryList[countryIndex].visitedCities)
    } else {
        console.log(chalk.magenta.bgCyan("There are no cities in this country"))
    }
    cityManagement(countryIndex, countryList)
}
