const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

// add , read , list , delete

// add
yargs.command({
	command : 'add',
	describe : 'Add a new note!',
	builder : {
		title : {
			describe : 'Note Title!!!',
			required : true,
			type : 'string'
		},
		body:{
			description : 'Note Body',
			required : true,
			type : 'string'
		},
	},
	handler : (argv) => {
		notes.addNote(argv.title , argv.body)
	},
})

//remove
yargs.command({
	command : 'remove',
	describe : 'Remove a note!',
	builder : {
		title : {
			description : 'New Note',
			required : true,
			type : 'string'
		}
	},
	handler : (argv) => {
		notes.removeNote(argv.title)
	}
})

//list 
yargs.command({
	command : 'list',
	describe : 'List a note!',
	
	handler : () => {
		notes.listNote();
	}
})

//read
yargs.command({
	command : 'read',
	describe : 'Read a note!',
	builder : {
		
	},
	handler : (argv) => {
		console.log('Read the notes!!!')
	}
})


yargs.parse();