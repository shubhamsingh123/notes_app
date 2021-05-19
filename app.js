// Getting input from the user
const chalk = require("chalk");
const name = require("./notes");
const yargs = require("yargs");

//customize the version
yargs.version("1.1.0");

//add , remove , read , list

yargs.command({
  command: "add",
  describe: "Adds two number",
  builder: {
    firstNumber: {
      describe: "First Number",
      demandOption: true, // Required
      type: "number",
    },
    secondNumber: {
      describe: "Second Number",
      demandOption: true,
      type: "number",
    },
  },

  // Function for your command
  handler: function (argv) {
    console.log(`Result ${argv.firstNumber + argv.secondNumber}`);
  },
});

console.log(yargs.argv);
