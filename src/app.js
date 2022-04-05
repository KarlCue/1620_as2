const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const addTextBtn = document.querySelector('.create-note-area')
const saveTextBtn = document.querySelector('.saveButton')
const deleteTextBtn = document.querySelector('.deleteButton')


newText = `         </div>
<div id="buttons">
    <textarea id="story" title="story"
    rows="5" cols="40" placeholder="Enter Text Here"></textarea>
<div id="optionbutton">
    <button class="saveButton">save</button>
    <button class="deleteButton">delete</button>
</div>  `

function addNewText(){
  const newTextArea = document.querySelector(".write-note-area")
  newTextArea.insertAdjacentHTML('afterbegin', newText)
}

addTextBtn.addEventListener('click',addNewText)
