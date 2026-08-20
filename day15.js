// assignment 1

let demo = document.getElementById("title");
console.log(demo.textContent);

//Assignment 2

let learn = document.querySelector(".learn");
console.log(learn.textContent);

// Assignment 3
let button = document.querySelectorAll("button");
button.forEach((value) => {
  console.log(value.textContent);
});

//Assignment 4

let list = document.querySelectorAll("li");
list.forEach((value, index) => console.log(value.textContent, index));

//Assignment 5

let paragrapgh = document.querySelectorAll(".text");
paragrapgh.forEach((value) => console.log(value.textContent));

//Assignment 6

let clgName = document.getElementById("college");
clgName.textContent = "Chendhuran College";

console.log(clgName.textContent);

//Assignment 7

let task1 = document.getElementById("heading");
console.log(task1.textContent);

let task2 = document.querySelector(".desc");
console.log(task2.textContent);

let task3 = document.querySelector(".task3");
console.log(task3.textContent);

// in task3 i know i can access it with button tag name , but i already declared some buttons in previous assignments so i used a class instead of tag name

// Assignment 8

let dragonBall = document.querySelectorAll(".exp");
console.log(dragonBall[dragonBall.length - 1].textContent);

//Assignment 9

console.log(demo.textContent);

demo.textContent = "Hello Arun";
console.log(demo.textContent);

console.log(document.getElementById("main-title").textContent);

console.log(document.querySelector(".b1").textContent);

let course = document.querySelectorAll(".course");
course.forEach((value, index) =>
  console.log(`${index + 1}. ${value.textContent}`),
);

console.log(
  (document.getElementById("main-title").textContent = "MERN Stack Journey"),
);
