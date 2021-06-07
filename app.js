const chalk = require('chalk');
const yargs = require('yargs');

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
	handler : function(argv){
		console.log(`Title : ${argv.title}`);
		console.log(`Body : ${argv.body}`);
	},
})

//remove
yargs.command({
	command : 'remove',
	describe : 'Remove a note!',
	builder : {
		
	},
	handler : function(){
		console.log('Remove the notes!!!')
	}
})

//list 
yargs.command({
	command : 'list',
	describe : 'List a note!',
	builder : {

	},
	handler : function(){
		console.log('List the notes!!!')
	}
})

//read
yargs.command({
	command : 'read',
	describe : 'Read a note!',
	builder : {
		
	},
	handler : function(){
		console.log('Read the notes!!!')
	}
})


yargs.parse();