const chalk = require("chalk");
const yargs = require("yargs");

// customize the version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// creating a remove command
yargs.command({
  command: "remove",
  describe: "Remove a new command",
  handler: function () {
    console.log("Removing a note!");
  },
});

console.log(yargs.argv);
