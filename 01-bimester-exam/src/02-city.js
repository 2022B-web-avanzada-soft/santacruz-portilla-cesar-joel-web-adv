// src/02-city.js
import inquirer from 'inquirer';
import DatePrompt from "inquirer-date-prompt";
import chalk from "chalk";

inquirer.registerPrompt("date", DatePrompt);

const cityFields = [
    'Name',
    'Is a safe city',
    'Date of last time visited',
    'Number of visits to this city',
    'Places to visit in the city',
    'Return to city menu'
]

export class City {

    /**
     * @param {string} name - Name of the city.
     * @param {boolean} isSafeCity - Is the city safe?
     * @param {date} lastVisitDate - Date of the last visit.
     * @param {number} qtyVisits - Quantity of visits.
     * @param {string} placesToVisit - Places to visit.
     */
    constructor(name, isSafeCity, lastVisitDate, qtyVisits, placesToVisit) {
        this.name = name
        this.isSafeCity = isSafeCity
        this.lastVisitDate = lastVisitDate
        this.qtyVisits = qtyVisits
        this.placesToVisit = placesToVisit
    }

    /**
     * This function creates a new city
     * 1. Ask the user for the city information
     * 2. Create a new city
     * 3. Return the new city
     */
    static addCity() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'What is the city name?'
            },
            {
                type: 'confirm',
                name: 'isSafeCity',
                message: 'Is the city safe?'
            },
            {
                type: 'date',
                format: {day: "numeric", month: "numeric", year: "numeric"},
                name: 'lastVisitDate',
                message: 'What is the last visit date?'
            },
            {
                type: 'number',
                name: 'qtyVisits',
                message: 'How many visits have you had?'
            },
            {
                type: 'input',
                name: 'placesToVisit',
                message: 'What are the places to visit?'
            }
        ]
        return inquirer.prompt(questions).then(
            (answers) => {
                return new City(
                    answers.name,
                    answers.isSafeCity,
                    answers.lastVisitDate,
                    answers.qtyVisits,
                    answers.placesToVisit
                )
            }
        ).catch()
    }

    /**
     * This function deletes a city
     * 1. Obtain a list of cities of the country
     * 2. Ask the user for the city name
     * 3. Delete the city
     * 4. Return the list of countries with the updated list of cities of the country
     * @param {Array} countryList - List of countries registered
     * @param {number} countryId - Index of the country in the list
     */
    static deleteCity(countryList, countryId) {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the city?'
            }
        ]
        return inquirer.prompt(questions).then(
            (answers) => {
                let isCityDeleted = false
                const newCountryCity = countryList.map(
                    (country, index) => {
                        if (index === countryId) {
                            country.visitedCities = country.visitedCities.filter(
                                /**
                                 * @param {City} city
                                 */
                                (city) => city.name !== answers.name)
                            console.log(chalk.magenta.bgCyan('City deleted successfully'))
                            isCityDeleted = true
                        }
                        return country
                    }
                )
                if(!isCityDeleted) {
                    console.log(chalk.redBright.bgYellow('City not found'))
                }
                return newCountryCity
            }
        ).catch()
    }

    /**
     * This function updates a city
     * 1. Ask the name of the city
     * 2. Ask the field to update
     * 3. Ask the new value
     * 4. Update the city
     * 5. Return the list of countries with the updated list of cities of the country
     * @param {Array} countryList
     * @param {number} countryId
     */
    static updateCity(countryList, countryId) {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the city?'
            },
            {
                type: 'list',
                name: 'fieldElection',
                message: 'What field do you want to update?',
                choices: cityFields
            },
            {
                type: 'input',
                name: 'newName',
                message: 'What is the new name?',
                when: (answers) => answers.fieldElection === 'Name'
            },
            {
                type: 'confirm',
                name: 'newIsSafeCity',
                message: 'Is the city safe?',
                when: (answers) => answers.fieldElection === 'Is a safe city'
            },
            {
                type: 'date',
                format: {day: "numeric", month: "numeric", year: "numeric"},
                name: 'newLastVisitDate',
                message: 'What is the last visit date?',
                when: (answers) => answers.fieldElection === 'Date of last time visited'
            },
            {
                type: 'number',
                name: 'newQtyVisits',
                message: 'How many visits have you had?',
                when: (answers) => answers.fieldElection === 'Number of visits to this city'
            },
            {
                type: 'input',
                name: 'newPlacesToVisit',
                message: 'What are the places to visit?',
                when: (answers) => answers.fieldElection === 'Places to visit in the city'
            }
        ]
        return inquirer.prompt(questions,).then(
            /**
             * @param {{
             * name: string,
             * fieldElection: string,
             * newName?: string,
             * newIsSafeCity?: boolean,
             * newLastVisitDate?,
             * newQtyVisits?: number,
             * newPlacesToVisit?: string
             * }} answers
             */
            (answers) => {
                return countryList.map(
                    /**
                     * @param {Country} country
                     * @param {number} index
                     */
                    (country, index) => {
                        if (index === countryId) {
                            if (country.visitedCities.length > 0) {
                                let isCityUpdate = false
                                country.visitedCities = country.visitedCities.map(
                                    /**
                                     * @param {City} city
                                     */
                                    (city) => {
                                        if (city.name === answers.name) {
                                            switch (answers.fieldElection) {
                                                case 'Name':
                                                    city.name = answers.newName
                                                    break
                                                case 'Is a safe city':
                                                    city.isSafeCity = answers.newIsSafeCity
                                                    break
                                                case 'Date of last time visited':
                                                    city.lastVisitDate = answers.newLastVisitDate
                                                    break
                                                case 'Number of visits to this city':
                                                    city.qtyVisits = answers.newQtyVisits
                                                    break
                                                case 'Places to visit in the city':
                                                    city.placesToVisit = answers.newPlacesToVisit
                                                    break
                                                default:
                                                    break
                                            }
                                            console.log(chalk.magenta.bgCyan('City updated successfully'))
                                            isCityUpdate = true
                                            return city
                                        } else {
                                            return city
                                        }
                                    }
                                )
                                return country
                            } else {
                                console.log(chalk.magenta.bgCyan("There are no cities in this country"))
                                return country
                            }
                        } else {
                            return country
                        }
                    }
                )
            }
        ).catch()
    }

    /**
     * This function prints a city
     * @param cityList
     */
    static printCity(cityList) {
        cityList.map(
            (city, index) => {
                console.log(chalk.white.bgCyan.bold('///////////////////////////////////////'))
                console.log(chalk.greenBright.bold(`City ${index + 1}`))
                console.log(
                    chalk.whiteBright.bold(`Name: `) +
                    city.name
                )
                console.log(
                    chalk.whiteBright.bold(`Is a safe city: `) +
                    city.isSafeCity
                )
                console.log(
                    chalk.whiteBright.bold(`Date of last time visited: `) +
                    city.lastVisitDate
                )
                console.log(
                    chalk.whiteBright.bold(`Number of visits to this city: `) +
                    city.qtyVisits
                )
                console.log(
                    chalk.whiteBright.bold(`Places to visit in the city: `) +
                    city.placesToVisit
                )
                console.log(chalk.white.bgCyan.bold('///////////////////////////////////////'))
            }
        )
    }
}
