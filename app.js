const chalk = require("chalk");
const getNotes = require("./notes");

console.log(chalk.yellow.inverse.bold("Hello Shubham , How are you!!!"));

const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding notes...");
} else if (command === "remove") {
  console.log("Removing notes...");
} else {
  console.log("Hello , Shubham");
}
