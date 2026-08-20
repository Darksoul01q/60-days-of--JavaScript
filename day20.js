//Assignment 1
let parent = document.getElementById("parent");
let child = document.getElementById("child");
let para = document.createElement("p");
parent.addEventListener("click", (event) => {
  para.textContent = `parent clicked`;
  parent.append(para);
});

let para1 = document.createElement("p");
child.addEventListener("click", () => {
  para1.textContent = `child clicked`;
  parent.append(para1);
});

//Assignment 2
let box = document.getElementById("box");

box.addEventListener("click", (event) => {
  console.log(event.target);
});

//Assignment 3

let link = document.getElementById("google");
let p1 = document.getElementById("p1");
link.addEventListener("click", (event) => {
  event.preventDefault();
  p1.textContent = `Navigation prevented`;
});

//Assignment 4

let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

inner.addEventListener("click", (event) => {
  p2.textContent = `inner clicked`;
  event.stopPropagation();
});

outer.addEventListener("click", (event) => {
  p3.textContent = `outer clicked`;
});

//Assignment 5

let tree = document.getElementById("tree");
let branch = document.getElementById("branch");

tree.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});

// the taget element is where ever i click with the cursor
// current target is where the event lisenter is attached to

//Assignment 6

let lang = document.getElementById("languages");
let p4 = document.getElementById("p4");

lang.addEventListener("click", (event) => {
  let hello = event.target.textContent;
  if (event.target.textContent === hello) {
    p4.textContent = `You Clicked : ${hello}`;
  }
});

//Assignment 7 & 8

let input = document.getElementById("taskInput");
let add = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let p5 = document.getElementById("p5");

add.addEventListener("click", (event) => {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.classList.add("delete");
  btn.textContent = `Delete`;
  li.textContent = `${input.value.trim()}`;
  li.append(btn);
  taskList.append(li);
});

taskList.addEventListener("click", (event) => {
  let content = event.target.textContent;
  let mc = content.replace("Delete", "");
  if (event.target.textContent === content) {
    p5.textContent = `Selected Task : ${mc}`;
  }

  if (event.target.classList.contains("delete")) {
    let hell = event.target.parentElement;
    hell.remove();
  }
});

// Assignment 9

let products = document.getElementById("products");
let p6 = document.getElementById("p6");

products.addEventListener("click", (event) => {
  if (event.target.classList.contains("buy")) {
    let product = event.target.parentElement.querySelector("h3");

    p6.textContent = `You Selected ${product.textContent}`;
  }
});
