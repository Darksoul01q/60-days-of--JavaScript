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
