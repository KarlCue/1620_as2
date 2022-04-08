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
    rows="5" cols="40" placeholder="Enter Text Here"></textarea>
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
}

addTextBtn.addEventListener('click',addNewText)

