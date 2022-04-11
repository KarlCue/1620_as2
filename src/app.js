const notes = [
  {
    title: "first note",
    noteBody: "this is an example note",
    id: 1,
  },
];

//Add Text
const addTextBtn = document.querySelector(".icons");

newText = ` 
<div id="text">
    <textarea id="story" title="story"
    rows="5" cols="40" placeholder="First line is the title"></textarea>
<div id="optionbutton">
    <button class="saveButton">save</button>
    <button class="deleteButton">cancel</button>
</div>  `;

let saveTextBtn = null;
let deleteTextBtn = null;

function addNewText() {
  const newTextArea = document.querySelector(".write-note-area");
  newTextArea.insertAdjacentHTML("afterbegin", newText);
  saveTextBtn = document.querySelector(".saveButton");
  saveTextBtn.addEventListener("click", assemblePad);
  deleteTextBtn = document.querySelector(".deleteButton");
  deleteTextBtn.addEventListener("click", deleteText);
  addTextBtn.removeEventListener("click", addNewText);
}
addTextBtn.addEventListener("click", addNewText);

//Delete Text

function deleteText() {
  const Texts = document.querySelector(".write-note-area");
  while (Texts.hasChildNodes()) {
    Texts.removeChild(Texts.firstChild);
  }
  addTextBtn.addEventListener("click", addNewText);
}

//Save Text

const noteDisplayArea = document.querySelector(".notes-list");

function newPad() {
  const notePad = document.querySelector("#story");
  const titles = notePad.value.split("\n")[0];
  notes.push({ title: titles, noteBody: notePad.value, id: notes.length + 1 });
  template = `  <li>${titles}</li>`;
  noteDisplayArea.insertAdjacentHTML("beforeend", template);
  console.log(notes);
}

function assemblePad() {
  newPad();
  deleteText();
}

//Click on Side Nav
const readNote = document.querySelector(".read-note-area");

function displayText(event) {
  if (event.target.localName === "li") {
    content = event.target.innerText;
    console.log(content);
  }

  for (const note of notes) {
    if (note.title == content) 
    content = note.noteBody;
    title2 = note.title;
  }

  readNoteTemplate = ` 
    <div id="options">
        <button class="deleteReadBtn">x</button>
    <div class="text">
        <h1>${title2}</h1>
        <p>${content}</p>
    </div>  `;
  readNote.insertAdjacentHTML("afterbegin", readNoteTemplate);

  //Delete the read text
  const deleteReadBtn = document.querySelector(".deleteReadBtn");
  function deleteReadText() {
    while (readNote.hasChildNodes()) {
      readNote.removeChild(readNote.firstChild);
    }
  }
  deleteReadBtn.addEventListener("click", deleteReadText);
}

noteDisplayArea.addEventListener("click", displayText);
