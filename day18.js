//assignment 1
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  console.log("Button Clicked!");
});

//Assignment 2

let heading = document.getElementById("heading");
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  heading.textContent = "JavaScript is Amazing";
});

//Assignment 3

let p1 = document.getElementById("p1");
p1.addEventListener("dblclick", () => {
  p1.textContent = "you Double Clicked Me";
});

//Assignment 4
let container1 = document.getElementById("container1");

container1.addEventListener("mouseover", () => {
  container1.style.backgroundColor = "red";
});

container1.addEventListener("mouseout", () => {
  container1.style.backgroundColor = "aqua";
});

//Assignment 5

let heading5 = document.getElementById("heading5");
let btn2 = document.getElementById("btn2");
let n = 0;
btn2.addEventListener("click", () => {
  n += 1;
  let m = `Clicks: ${n}`;
  heading5.textContent = m;
});

//Assignment 6
let p2 = document.getElementById("p2");

let em = document.createElement("p");
window.addEventListener("keydown", (event) => {
  em.textContent = `You Pressed : ${event.key}`;
  p2.append(em);
});

//Assignment 7

let p3 = document.getElementById("p3");
let username = document.getElementById("username");
let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
  let test = username.value;
  p3.textContent = test;
});

//Assignment 8

let p4 = document.getElementById("p4");
let add = document.getElementById("add");
let min = document.getElementById("min");
let reset = document.getElementById("reset");
let count = 0;
add.addEventListener("click", () => {
  count += 1;
  p4.textContent = `count : ${count}`;
});
min.addEventListener("click", () => {
  count -= 1;
  p4.textContent = `count : ${count}`;
});
reset.addEventListener("click", () => {
  count = 0;
  p4.textContent = `count : ${count}`;
});

//Assignment 9
let p5 = document.getElementById("p5");

let value = 0;

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    p5.textContent = `count : ${(value += 1)}`;
  } else if (event.key === "ArrowDown") {
    p5.textContent = `count : ${(value -= 1)}`;
  }
});

//Assignment 10

let box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "black";
  box.style.width = "100px";
  box.style.height = "100px";
});

let p = document.createElement("p");
box.addEventListener("click", () => {
  p.textContent = "I Love U";
  box.style.color = "white";
  box.append(p);
});

box.addEventListener("dblclick", () => {
  box.style.backgroundColor = "coral";
  box.style.width = "50px";
  box.style.height = "50px";
  p.textContent = "";
});

//Mini Project

let colorBox = document.getElementById("colorBox");
let colorbtn = document.getElementById("colorbtn");
let name = document.getElementById("name");

colorbtn.addEventListener("click", () => {
  let random1 = Math.floor(Math.random() * 255) + 1;
  let random2 = Math.floor(Math.random() * 255) + 1;
  let random3 = Math.floor(Math.random() * 255) + 1;
  colorBox.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
  name.textContent = `RGB(${random1},${random2},${random3})`;
});
