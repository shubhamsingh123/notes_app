const fs = require('fs');
const chalk = require('chalk')
const getNotes = () =>  "Your Notes!!!"

const addNote = function(title , body){
	const notes = loadNotes();

	const duplicateNotes = notes.filter((note)=>{
		return note.title === title
	})

	if(duplicateNotes.length === 0){
		notes.push({
		title : title,
		body : body
	});

	saveNote(notes)
	console.log('Added new note')
}else{
	console.log('Already taken')
}
	
}

// remove notes
const removeNote = (title) => {
	// console.log(title)
	const notes = loadNotes();
	const notesToKeep = notes.filter(note => {
		return note.title != title
	})


	if(notes.length > notesToKeep){
		console.log(chalk.bold.inverse.green('Success!!!'))
	}else{
		console.log(chalk.bold.inverse.red('No Matches!!!'))
	}

    saveNote(notesToKeep)
}

// list note
const listNote = () => {
	const notes = loadNotes();
	notes.forEach(note =>console.log(note.title))
}


const saveNote = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json' , dataJSON)
}

const loadNotes = () => {
	try{
	const dataBuffer = fs.readFileSync('notes.json');
	const dataJSON = dataBuffer.toString();
	return JSON.parse(dataJSON)
	}catch(e){
		return []
	}

}

module.exports = {
	getNotes : getNotes,
	addNote : addNote,
	removeNote : removeNote,
	listNote : listNote
}