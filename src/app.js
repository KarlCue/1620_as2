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
    const noteDisplayArea = document.querySelector('.notes-list')

    function newPad(){
      const notePad = document.querySelector('#story')
      const titles = notePad.value.split('\n')[0]
      notes.push({title:titles ,noteBody:notePad.value, id:notes.length + 1})
      template = ` <li>${titles}</li>`
      noteDisplayArea.insertAdjacentHTML('beforeend',template)
      console.log(notes)
    }

    function assemblePad(){
      newPad()
      deleteText()
    }

    saveTextBtn.addEventListener('click',assemblePad)

    //Click on Side Nav
    const readNote = document.querySelector('.read-note-area')
    
    function displayText(event){
      content = event.target.innerText
      console.log(content)
      //console.log(event.target.localName)
      //  console.log(event.target.parentNode.outerText)
      //  }

      
      for(const note of notes){
        if (note.title == content)
       content = note.noteBody
      }
      
      readNoteTemplate = ` 
        <div class="text">
            <p>${content}</p>
        <div id="optionbutton">
            <button class="deleteReadBtn">delete</button>
        </div>  `
      readNote.insertAdjacentHTML('afterbegin',readNoteTemplate)

      //Delete the read text
      const deleteReadBtn = document.querySelector('.deleteReadBtn')     
      function deleteReadText(){
        while (readNote.hasChildNodes()) {
          readNote.removeChild(readNote.firstChild);
        }
      }
      deleteReadBtn.addEventListener('click',deleteReadText)
    }
    
    noteDisplayArea.addEventListener('click',displayText)

  }
addTextBtn.addEventListener('click',addNewText)

