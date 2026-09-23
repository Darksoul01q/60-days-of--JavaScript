let titleInput = document.getElementById("title");
let notesInput = document.getElementById("notes");
let addNotesBtn = document.getElementById("addnotes");
let screen = document.getElementById("containerBlock");

let notebd = JSON.parse(localStorage.getItem("notes")) || [];

renderNotes();

function renderNotes() {
  screen.innerHTML = "";

  if (notebd.length === 0) {
    screen.innerHTML = "<p>No notes yet.</p>";
    return;
  }

  notebd.forEach((note) => {
    let block = document.createElement("div");
    block.className = "note-card";

    let h = document.createElement("h4");
    h.textContent = note.title;

    let p = document.createElement("p");
    p.textContent = note.content;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      deleteNote(note.id);
    });

    block.append(h);
    block.append(p);
    block.append(deleteBtn);
    screen.append(block);
  });
}

addNotesBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let currentTitle = titleInput.value.trim();
  let currentContent = notesInput.value.trim();

  if (currentTitle === "" || currentContent === "") return;

  let newNote = {
    id: Date.now(),
    title: currentTitle,
    content: currentContent,
  };

  notebd.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notebd));

  renderNotes();
  titleInput.value = "";
  notesInput.value = "";
});

function deleteNote(idToRemove) {
  notebd = notebd.filter((note) => note.id !== idToRemove);

  localStorage.setItem("notes", JSON.stringify(notebd));
  renderNotes();
}
