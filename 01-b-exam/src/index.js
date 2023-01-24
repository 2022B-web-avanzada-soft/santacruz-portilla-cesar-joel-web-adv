// src/04-main.js
import {main} from "./04-main.js";
import chalk from "chalk";

console.log(chalk.yellowBright.bold.underline("Welcome to the country and cities management system"));
main().then().catch(
    (error) => {
        console.log(chalk.redBright("Something went wrong"))
        console.error(error)
    }
);
