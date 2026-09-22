let title = document.getElementById("title");
let notes = document.getElementById("notes");
let addNotesBtn = document.getElementById("addnotes");
let screen = document.getElementById("containerBlock");
let deleteBtn = document.getElementById("delete");

let notebd = [];
let keyValue = title.value;
let notesValue = notes.value;

function load() {
  let temp = { heading: keyValue, content: notesValue };
  notebd.push(temp);
  localStorage.setItem("notes", JSON.stringify(notebd));
  let retrive = JSON.parse(localStorage.getItem("notes"));
  retrive.forEach((retrive) => {
    let block1 = document.createElement("div");
    let h = document.createElement("h4");
    let p = document.createElement("p");
    h.textContent = `${retrive.heading}`;
    p.textContent = `${retrive.content}`;
    block1.append(h);
    block1.append(p);
    screen.append(block1);
  });
}

addNotesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  load();
});
