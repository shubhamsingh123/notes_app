const chalk = require("chalk");
const yargs = require("yargs");

// customize the version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
  },
});

// creating a remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note!");
  },
});

// creating a list command
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler: function () {
    console.log("List the notes!");
  },
});

// creating a read command
yargs.command({
  command: "read",
  describe: "read the notes",
  handler: function () {
    console.log("Read the notes!");
  },
});

// console.log(yargs.argv);
yargs.parse();
