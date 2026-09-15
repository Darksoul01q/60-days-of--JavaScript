//Challenge 1
console.log("Challenge 1");
localStorage.setItem("name", "Arun");
localStorage.setItem("course", "JavaScript");
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("course"));
localStorage.removeItem("course");
console.log(localStorage.getItem("course"));

//challlenge 2
console.log("Challenge 2");
localStorage.setItem("score", "50");
localStorage.setItem("score", "100");
console.log(localStorage.getItem("score"));

//they are key value pairs , so score is a key and i updated the value to 100 from 50

//challenge 3
console.log("Challenge 3");

let languages = ["Python", "Java", "javascript", "Rust", "Go"];

localStorage.setItem("languages", JSON.stringify(languages));
let lang = JSON.parse(localStorage.getItem("languages"));
console.log(lang);
console.log(lang.length);
console.log(lang[2]);

//challenge 4
console.log("Challenge 4");

sessionStorage.setItem("page", "Dashboard");
sessionStorage.setItem("status", "loggedIn");

console.log(sessionStorage.getItem("page"));
console.log(sessionStorage.getItem("status"));

sessionStorage.removeItem("status");
console.log(sessionStorage.getItem("status"));

//Challenge 5
console.log("Challenge 5");

let profile = {
  name: "Arun",
  age: 21,
  department: "Developer",
  skills: ["mongodb", "react", "node", "express"],
};

localStorage.setItem("profile", JSON.stringify(profile));
let profileData = JSON.parse(localStorage.getItem("profile"));

console.log(`Name : ${profileData.name}`);
console.log(`Department : ${profileData.department}`);
console.log(`Number of skills : ${profileData.skills.length}`);

//Assignments

//Assignment 1
console.log("Assignment 1");

let pageDetails = {
  theme: "Dark",
  language: "English",
  fontSize: "10px",
  notifications: "enabled",
};

localStorage.setItem("pageDetails", JSON.stringify(pageDetails));

let details = JSON.parse(localStorage.getItem("pageDetails"));
console.log(details);

details.theme = "light";
localStorage.setItem("pageDetails", JSON.stringify(details));

let page = JSON.parse(localStorage.getItem("pageDetails"));

console.log(page);

//Assignment 2

console.log("Assignment 2");

const cart = [
  { name: "Mobile", price: 10000, quantity: 10 },
  { name: "Ear Buds", price: 1000, quantity: 25 },
  { name: "Wired Headphone", price: 300, quantity: 15 },
];

localStorage.setItem("cart", JSON.stringify(cart));
let shoppingCart = JSON.parse(localStorage.getItem("cart"));

shoppingCart.forEach((element) => {
  let total = element.price * element.quantity;
  console.log(`Total price of ${element.name} : ${total}`);
});

//Assignment 3

console.log("Assignment 3");

let user = {
  name: "Sam",
  loginStatus: "loggedIn",
};

sessionStorage.setItem("user", JSON.stringify(user));
let retriveUser = JSON.parse(sessionStorage.getItem("user"));

if (retriveUser.loginStatus === "loggedIn") {
  console.log("you logged in succesfully");
} else {
  console.log("session limit is over you have been logged out");
}

delete retriveUser.loginStatus;

if (retriveUser.loginStatus === "loggedIn") {
  console.log("you logged in succesfully");
} else {
  console.log("session limit is over you have been logged out");
}

//assignment 4

console.log("Assignment 4");

const notes = [
  {
    id: 1,
    name: "Grocery List",
    content: "Buy milk, eggs, and bread from the store.",
  },
  {
    id: 2,
    name: "Workout Plan",
    content: "Do thirty minutes of cardio and stretching.",
  },
  {
    id: 3,
    name: "Coding Goals",
    content: "Practice JavaScript arrays and loops.",
  },
];

localStorage.setItem("notes", JSON.stringify(notes));
let notesData = JSON.parse(localStorage.getItem("notes"));
notesData.push({
  id: 4,
  name: "Reading List",
  content: "Finish reading the current JavaScript book chapter.",
});

localStorage.setItem("notes", JSON.stringify(notesData));

let retriveNotes = JSON.parse(localStorage.getItem("notes"));

retriveNotes.forEach((value) => {
  if (value.id === 3) {
    retriveNotes.splice(value.id - 1, 1);
  }
});

localStorage.setItem("notes", JSON.stringify(retriveNotes));

console.log(JSON.parse(localStorage.getItem("notes")));

//Assignment 5

console.log("Assignment 5");
