const chalk = require("chalk");
const cmd = process.argv[2];

if (cmd === "add") {
  console.log(chalk.green("Adding Notes!!!"));
} else if (cmd === "remove") {
  console.log(chalk.red("Removing Notes!!!"));
} else {
  console.log("process.argv is false");
}
