// challenges
// 1. javascript will overwrite hello, hence javascript will display is web
// 2. h2 tag will be considered as text while we use textcontent
// 3. the difference is innerhtml, it consider h2 tag as html and only shows the text in it
// 4. the element will have heading , active both classes
// 5. the active class is already there , so the active class will be removed now , like turning of a switch

// assignment 1
let title = document.getElementById("title");
title.textContent = "My Portfolio";

// Assignment 2
let message = document.getElementById("text");
console.log(message.textContent);
console.log((message.textContent = "Welcome To JavaScript"));

//Assignment 3

let heading = document.getElementById("hello");

heading.style.color = "gray";
heading.style.fontSize = "50px";
heading.style.backgroundColor = "black";

//Assignment 4

let container = document.getElementById("container");
container.innerHTML = "<h2> Welcome </h2> <p> Learing DOM </p>";

//Assignment 5
let learn = document.getElementById("learn");
learn.classList.add("highlight");

// Assignment 6

let turnOff = document.getElementById("check");
turnOff.classList.remove("active");

// Assignment 7
let toggle = document.getElementById("heading");
toggle.classList.toggle("color");

// Assignment 8

let task = document.querySelectorAll(".course");

task.forEach((element) => {
  element.textContent = element.textContent.toUpperCase();
  element.style.backgroundColor = "blue";
  element.classList.add("course-item");
});

// Assignment 9

let profile = document.getElementById("profile");
profile.innerHTML =
  " <p><strong>Name :</strong> Arun R</p> <p><strong>Role :</strong> Mern Devloper</p> <p><strong>Skills :</strong> JavaScript</p>";

//Assignment 10

console.log(toggle.classList.contains("color"));

//mentor challenge

let name = document.getElementById("name");
name.textContent = " Arun R";
let role = document.getElementById("role");
role.textContent = " Mern Devloper";
let skill = document.getElementById("skill");
skill.textContent = "Building Mern Applications";
skill.classList.add("highlight");

let profileCard = document.getElementById("card");
profileCard.classList.add("card-active");

console.log(profileCard.classList.contains("card-active"));
