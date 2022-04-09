const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//Add Text
const addTextBtn = document.querySelector('.icons')

newText = ` 
<div id="text">
    <textarea id="story" title="story"
    rows="5" cols="40" placeholder="First line is the title"></textarea>
<div id="optionbutton">
    <button class="saveButton">save</button>
    <button class="deleteButton">delete</button>
</div>  `

function addNewText(){
  const newTextArea = document.querySelector(".write-note-area")
  newTextArea.insertAdjacentHTML('afterbegin', newText)
  addTextBtn.removeEventListener('click',addNewText)

    //Delete Text

    const deleteTextBtn = document.querySelector('.deleteButton')

    function deleteText(){
      const Texts = document.querySelector(".write-note-area");
      while (Texts.hasChildNodes()) {
        Texts.removeChild(Texts.firstChild);
      }
      addTextBtn.addEventListener('click',addNewText)
    }
  
    deleteTextBtn.addEventListener('click', deleteText)
    
    //Save Text

    const saveTextBtn = document.querySelector('.saveButton')

    function newPad(noteBody){
      const titles = noteBody.split('\n')[0]
      const body = noteBody.split('\n')[1]
      test = {title:titles,noteBody:body,id:2}
      notes.push(test)
      template = ` <ul>${titles}</ul>`
      console.log(notes)
      return template
    }

    function displayPad(note){
      const noteDisplayArea = document.querySelector('.notes-list')
      noteDisplayArea.insertAdjacentHTML('afterbegin', note)
    }

    function takeNote(){
      const notePad = document.querySelector('#story')
      const note = notePad.value
      return note
    }

    function assemblePad(){
      const noteText = takeNote()
      const note = newPad(noteText)
      displayPad(note)
      deleteText()
    }

    saveTextBtn.addEventListener('click',assemblePad)

}
addTextBtn.addEventListener('click',addNewText)

