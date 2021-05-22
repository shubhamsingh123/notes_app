// Getting input from the user
const chalk = require("chalk");
const name = require("./notes");
const yargs = require("yargs");
const notes = require('./notes.js')

//customize the version
yargs.version("1.1.0");

//add , remove , read , list

yargs.command({
  command: "add",
  describe: "Adds two number",
  builder: {
    title: {
      describe: "First Number",
      demandOption: true, // Required
      type: "string",
    },
    body: {
      describe: "Second Number",
      demandOption: true,
      type: "string",
    },
  },

  // Function for your command
  handler: function (argv) {
    notes.addNote(argv.title , argv.body)
  },
});

console.log(yargs.argv);
