//challenges

//challenge 1
// a new element is created and append in the div container, p tag containig hello text,
// while using append it add the element at the end

// challenge 2
// here we are using prepend so it will add in the begining of the list

// challenge 3
// the elemnt containing the id heading will be removed from the webpage

// challenge 4
// here we are replacing the old element with the new element we created  in dom

// challenge 5
// second then first because append will add it at the end and prepend will add it in the begining

// assingment 1

let container = document.getElementById("container");
let text = document.createElement("p");
text.textContent = "I am learning DOM manipulation.";

container.append(text);

// assignment 2

let heading = document.createElement("h2");
heading.textContent = "JavaScript Dom";

container.prepend(heading);

//Assignment 3
let list = document.getElementById("list");
let listh = document.createElement("li");
listh.textContent = "JavaScript";
list.append(listh);

//Assignment 4

let ab = document.createElement("li");
ab.textContent = "git";
list.prepend(ab);

//Assignment 5

let hello = document.getElementById("hello");
let l1 = document.createElement(`li`);
l1.textContent = "React";
let l2 = document.createElement(`li`);
l2.textContent = "Mongodb";
let l3 = document.createElement(`li`);
l3.textContent = "Node.js";

hello.append(l1);
hello.append(l2);
hello.append(l3);

// Assignment 6

let rm = document.getElementById("removeMe");
rm.remove();

//Assignment 7

let old = document.getElementById("oldHeading");
let newh2 = document.createElement("h2");

newh2.textContent = "NewHeading";

old.replaceWith(newh2);

//Assignment 8

let students = ["Arun", "Rahul", "Varshini", "Karthick"];

students.forEach((value) => {
  let student = document.getElementById("student");
  let stu = document.createElement("li");
  stu.textContent = value;
  student.append(stu);
});

//Assignment 9

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 25000 },
  { name: "Mouse", price: 1000 },
];

products.forEach((value, index) => {
  let doc = document.getElementById("Document");
  let ins = document.createElement("p");
  let br = document.createElement("br");

  ins.append(value.name);
  ins.append(br);
  ins.append(`Rs.${value.price}`);

  doc.append(ins);
});

//Mentor Challenge

let profile = document.getElementById("profile");
let name = document.createElement("h1");
let domain = document.createElement("h3");
let skills = document.createElement("h4");
let frameworks = ["React", "Mongodb", "node.js", "javaScript"];

name.textContent = "Arun R";
name.style.color = "skyblue";
name.style.textAlign = "center";
profile.append(name);

domain.textContent = "Mern Devloper";
domain.style.color = "red";
domain.style.textAlign = "center";
profile.append(domain);

skills.textContent = "Skills:";
profile.append(skills);

frameworks.forEach((value) => {
  let p = document.createElement("p");
  p.textContent = value;
  profile.append(p);
});
