const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

console.log(chalk.yellow.inverse.bold("Hello Shubham , How are you!!!"));

//Customize yargs version
yargs.version("2.2.2");

// console.log(process.argv);
console.log(yargs.argv);
