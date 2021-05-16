const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

console.log(chalk.yellow.inverse.bold("Hello Shubham , How are you!!!"));

//Customize yargs version
yargs.version("2.2.2");

// add , remove , read , list

// creating add command

yargs.command({
  command: "add",
  describe: "Add a notes",
  builder: {
    title: {
      describe: "New notes",
      required: true,
      type: "string",
    },
    body: {
      describe: "New Body",
      required: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(`Title : ${argv.title}`);
    console.log(`Body : ${argv.body}`);
  },
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "Removing a new notes!!!",
  handler: function () {
    console.log("Removing a noew Notesss !!!");
  },
});

// Creating a read command

yargs.command({
  command: "read",
  describe: "Want to read notes!!!",
  handler: function () {
    console.log("Want to read the notes!!!");
  },
});

// Creating a list command

yargs.command({
  command: "list",
  describe: "List out the title",
  handler: function () {
    console.log("List out the title!!!");
  },
});

yargs.parse();
