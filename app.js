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
  describe: "adding notes",
  builder: {
    title: {
      describe: "title",
      demandOption: true, // Required
      type: "string",
    },
    body: {
      describe: "body",
      demandOption: true,
      type: "string",
    },
  },

  // Function for your command
  handler: function (argv) {
    notes.addNote(argv.title , argv.body)
  },
});


yargs.command({
  command : 'remove',
  describe : 'removing notes',
  builder : {
    title : {
      describe : 'Note title',
      required : true,
      type : 'string'
    },
  },
  handler : function(argv){
    notes.removeNote(argv.title)
  },
});


yargs.command({
  command : 'list',
  describe : 'listing notes',
  handler : function(argv){
    notes.listNotes()
  },
})



console.log(yargs.argv);
