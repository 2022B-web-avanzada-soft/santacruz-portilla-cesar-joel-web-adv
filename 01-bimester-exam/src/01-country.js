// src/01-country.js
import inquirer from 'inquirer';
import chalk from "chalk";
import {City} from "./02-city.js";

const countryFields = [
    'Name',
    'Continent',
    'Official Coin',
    'Have you visited the country multiple times',
    'Number of cities you want to visit',
    'Return to main menu'
]

export class Country {

    /**
     * @param {string} name - Country name
     * @param {string} continent - Continent to which the country belongs
     * @param {string} officialCoin - Official coin
     * @param {boolean} isCountryVisitedMultipleTimes - Official isCountryVisitedMultipleTimes
     * @param {number} qtyCitiesToVisit - Quantity of cities to visit
     * @param {Array} visitedCities - Visited cities in the country
     */
    constructor(name, continent, officialCoin, isCountryVisitedMultipleTimes, qtyCitiesToVisit, visitedCities) {
        this.name = name
        this.continent = continent
        this.officialCoin = officialCoin
        this.isCountryVisitedMultipleTimes = isCountryVisitedMultipleTimes
        this.qtyCitiesToVisit = qtyCitiesToVisit
        this.visitedCities = visitedCities
    }

    /**
     * This function creates a new country
     *  1. Ask the user for the country information
     *  2. Create a new country
     *  3. Return the new country
     */
    static addCountry() {
        const questions = [
            {
                type: "input",
                name: "name",
                message: "What is the name of the country?",
            },
            {
                type: "input",
                name: "continent",
                message: "To which continent does the country belong?",
            },
            {
                type: "input",
                name: "officialCoin",
                message: "What is the official currency of the country?",
            },
            {
                type: "confirm",
                name: "isCountryVisitedMultipleTimes",
                message: "Have you visited the country more than once?",
            },
            {
                type: "number",
                name: "qtyCitiesToVisit",
                message: "How many cities do you want to visit?",
            }
        ]
        return inquirer.prompt(questions).then(
            (answers) => {
                return new Country(
                    answers.name,
                    answers.continent,
                    answers.officialCoin,
                    answers.isCountryVisitedMultipleTimes,
                    answers.qtyCitiesToVisit,
                    []
                )
            }
        ).catch()
    }

    /**
     * This function deletes a country
     * 1. Ask the user for the country name
     * 2. Delete the country
     * 3. Return the new list of countries
     * @param {Array} countryList - List of countries registered
     */
    static deleteCountry(countryList) {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the country you want to delete:'
            }
        ]
        return inquirer.prompt(questions).then(
            (answers) => {
                const countryToDelete = countryList.find(item => item.name === answers.name)
                if (countryToDelete) {
                    console.log(chalk.magenta.bgCyan(`The country ${countryToDelete.name} has been deleted`))
                } else {
                    console.log(chalk.magenta.bgCyan(`The country ${answers.name} does not exist`))
                }
                return countryList.filter(item => item.name !== answers.name)
            }).catch();
    }

    /**
     * This function updates a country
     * 1. Ask the user for the country name
     * 2. Ask the user for the field to update
     * 3. Ask the user for the new value
     * 4. Update the country
     * 5. Return the new list of countries
     * @param {Array} countryList - List of countries registered
     */
    static updateCountry(countryList) {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the country you want to update:'
            },
            {
                type: 'list',
                name: 'fieldElection',
                message: 'Select the field you want to change from that country:',
                choices: countryFields
            },
            {
                type: "input",
                name: "newName",
                message: "What is the new name of the country?",
                when: (answers) => answers.fieldElection === 'Name'
            },
            {
                type: "input",
                name: "newContinent",
                message: "To which new continent does the country belong?",
                when: (answers) => answers.fieldElection === 'Continent'
            },
            {
                type: "input",
                name: "newOfficialCoin",
                message: "What is the new official currency of the country?",
                when: (answers) => answers.fieldElection === 'Official Coin'
            },
            {
                type: "confirm",
                name: "newIsCountryVisitedMultipleTimes",
                message: "Have you visited the country more than once?",
                when: (answers) => answers.fieldElection === 'Have you visited the country multiple times'
            },
            {
                type: "number",
                name: "newQtyCitiesToVisit",
                message: "How many cities do you want to visit?",
                when: (answers) => answers.fieldElection === 'Number of cities you want to visit'
            }
        ]
        return inquirer.prompt(questions).then(
            /**
             * @param {{
             *     name: string,
             *     fieldElection: string,
             *     newName?: string,
             *     newContinent?: string,
             *     newOfficialCoin?: string,
             *     newIsCountryVisitedMultipleTimes?: boolean,
             *     newQtyCitiesToVisit?: number
             * }} answers
             */
            (answers) => {
                let isCountryUpdated = false
                countryList.map(
                    (country) => {
                        if (country.name === answers.name) {
                            switch (answers.fieldElection) {
                                case "Name":
                                    country.name = answers.newName
                                    break
                                case "Continent":
                                    country.continent = answers.newContinent
                                    break
                                case "Official Coin":
                                    country.officialCoin = answers.newOfficialCoin
                                    break
                                case "Have you visited the country multiple times":
                                    country.isCountryVisitedMultipleTimes = answers.newIsCountryVisitedMultipleTimes
                                    break
                                case "Number of cities you want to visit":
                                    country.qtyCitiesToVisit = answers.newQtyCitiesToVisit
                                    break
                                default:
                                    break
                            }
                            isCountryUpdated = true
                        }
                    }
                )
                if(isCountryUpdated) {
                    console.log(chalk.magenta.bgCyan('Country updated successfully'))
                }
                else {
                    console.log(chalk.magenta.bgCyan('Country not found'))
                }
                return countryList
            }
        ).catch()
    }

    /**
     * This function finds a country by name
     * 1. Ask the user for the country name
     * 2. Find the country
     * 3. Return the country id
     * @param {Array} countryList - List of countries registered
     */
    static findCountry(countryList) {
        const questions = [
            {
                type: 'input',
                name: 'selectedCountryName',
                message: 'Enter the name of the country you want to checkout:'
            }
        ]
        return inquirer.prompt(questions).then(
            /**
             * @param {{
             *     selectedCountryName: string
             * }} answers
             */
            (answers) => {
                let countryIndex = -1
                countryList.map(
                    (country, index) => {
                        if (country.name === answers.selectedCountryName) {
                            countryIndex = index
                        }
                    }
                )
                return countryIndex
            }
        ).catch()
    }

    /**
     * This function prints a country
     * @param country
     * @param {number} index
     */
    static printCountry(country, index) {
        console.log(chalk.white.bgYellow.bold('---------------------------------'))
        console.log(chalk.greenBright.bold(`Country ${index + 1}`))
        console.log(
            chalk.whiteBright.bold(`Name: `) +
            country.name
        )
        console.log(
            chalk.whiteBright.bold(`Continent: `) +
            country.continent
        )
        console.log(
            chalk.whiteBright.bold(`Official coin: `) +
            country.officialCoin
        )
        console.log(
            chalk.whiteBright.bold(`Have you visited the country multiple times: `) +
            country.isCountryVisitedMultipleTimes
        )
        console.log(
            chalk.whiteBright.bold(`Number of cities you want to visit: `) +
            country.qtyCitiesToVisit
        )
        console.log(
            chalk.whiteBright.bold(`Visited cities: `)
        )
        City.printCity(country.visitedCities)
        console.log(chalk.white.bgYellow.bold('---------------------------------'))
    }
}
