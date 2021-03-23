const chalk = require("chalk");

const inputUser = process.argv[2];

console.log(process.argv);

if (inputUser === "add") {
  console.log("Adding...");
} else if (inputUser === "remove") {
  console.log("Removing Notes");
}
