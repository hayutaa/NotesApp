let notes = JSON.parse(localStorage.getItem("notes")) || [];


const title = document.getElementById("Title");
const content = document.getElementById("Content");
const list = document.getElementById("List");
const button = document.getElementById("addNote");

function renderNotes() {
  list.innerHTML = "";

notes.forEach((note, index) => {

  const item = document.createElement("li");
  const noteTitle = document.createElement ( "h2" );
  const noteText = document.createElement("p");
  const deleteButton = document.createElement("button");

  noteTitle.textContent = note.title;
  noteText.textContent = note.content;
  deleteButton.textContent ="x";

  deleteButton.addEventListener("click", function() {
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
  });


  item.appendChild (noteTitle);
  item.appendChild (noteText);
  list.appendChild (item);
  item.appendChild (deleteButton);
});

}

button.addEventListener("click", function() {
  if (title.value === "" || content.value === "") {
      alert("Enter a Note");
      return;
  }

  notes.push({
      title: title.value,
      content: content.value
  });


  localStorage.setItem("notes", JSON.stringify(notes));

  renderNotes();

 title.value = "";
 content.value = "";

});

renderNotes();