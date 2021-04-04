const chalk = require("chalk");

const log = console.log;

log(chalk.blue("Hello Shubham"));
log(chalk.green("Hello Shubham"));
log(chalk.yellow("Hello Shubham"));
log(chalk.underline.bgBlue("Hello Shubham"));
log(chalk.red("Hello " + chalk.green.underline.bold("with a blue substring")));
