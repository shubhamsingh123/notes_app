const fs = require('fs')

const getNotes = function(){
  return 'Hello Shubham'
}

const addNote = function(title , body){
      const notes = loadNotes()
      const duplicateNotes = notes.filter(function(note){
        return note.title === title;
      })

      if(duplicateNotes.length === 0){
        notes.push({
        title : title,
        body : body
      })
      saveNotes(notes);
      console.log('New notes added!!!')
      }else{
        console.log('Note title taken')
      }

      
}

const removeNote = function(title){
      console.log(title)
}

const saveNotes = function(notes){
      const dataJson = JSON.stringify(notes);
      fs.writeFileSync('notes.json' , dataJson)
}




const loadNotes = function(){

      try{
            const dataBuffer = fs.readFileSync('notes.json');
            const dataJson = dataBuffer.toString();
            return JSON.parse(dataJson)
      }catch(e){
          return []
      }
      
}


module.exports = {
  getNotes : getNotes, 
  addNote : addNote,
  removeNote : removeNote
}
