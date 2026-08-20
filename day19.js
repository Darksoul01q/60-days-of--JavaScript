//Assignment 1

let username = document.getElementById("username");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  result.textContent = `Hello ${username.value.trim()}`;
});

//Assignment 2

let live = document.getElementById("live");
let liveText = document.getElementById("liveText");

live.addEventListener("input", () => {
  liveText.textContent = `Your Text : ${live.value}`;
});

//Assignment 3

let count = document.getElementById("count");
let char = document.getElementById("Characters");

count.addEventListener("input", () => {
  char.textContent = `Characters : ${count.value.length}`;
});

//Assignment 4

let form = document.getElementById("form");
let user = document.getElementById("user");
let email = document.getElementById("email");
let button = document.getElementById("button");
let call = document.getElementById("call");
let call1 = document.getElementById("call1");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  call.textContent = `Name : ${user.value}`;
  call1.textContent = `Email : ${email.value}`;
});

// Assignment 5
let user1 = document.getElementById("user1");
let validation_form = document.getElementById("validation");
let btn1 = document.getElementById("btn1");
let p1 = document.getElementById("p1");
p1.style.color = "red";

validation_form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (user1.value.trim() === "") {
    p1.textContent = `Username is required`;
  } else if (user1.value.length < 3) {
    p1.textContent = `Username must be at least 3 characters`;
  } else {
    p1.textContent = `Username is valid`;
  }
});

// Assignment 6

let ageValidation = document.getElementById("age-validation");
let age = document.getElementById("age");
let btn2 = document.getElementById("btn2");
let p2 = document.getElementById("p2");

ageValidation.addEventListener("submit", () => {
  event.preventDefault();

  if (age.value.trim() === "") {
    p2.style.color = `orange`;
    p2.textContent = `Age is required`;
  } else if (age.value < 18) {
    p2.style.color = `red`;
    p2.textContent = "Must be 18 or above";
  } else {
    p2.style.color = `green`;
    p2.textContent = `Eligble`;
  }
});

// Assignment 7

let register = document.getElementById("register");
let name1 = document.getElementById("name1");
let email1 = document.getElementById("email1");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
let btn3 = document.getElementById("btn3");
let p3 = document.getElementById("p3");
p3.style.color = "red";

register.addEventListener("submit", (event) => {
  event.preventDefault();

  if (name1.value.trim() === "") {
    p3.textContent = `username required`;
  } else if (name1.value.length < 3) {
    p3.textContent = `username must contain more than 3 charactres`;
  } else if (!email1.value.toLowerCase().includes("@gmail.com")) {
    p3.textContent = `Invalid email`;
  } else if (password.value.trim() === "") {
    p3.textContent = `password required`;
  } else if (password.value.length < 8 || confirm.value.length < 8) {
    p3.textContent = `Password must be atleast 8 characters`;
  } else if (password.value !== confirm.value) {
    p3.textContent = `Passwords do not match`;
  } else {
    p3.textContent = `Registeration Successful`;
  }
});

//Assignment 8

let pass = document.getElementById("ps_counter");
let btn4 = document.getElementById("btn4");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

pass.addEventListener("input", (event) => {
  event.preventDefault();
  p5.textContent = `Characters : ${pass.value.length}`;
  if (pass.value.length < 6) {
    p4.style.color = "red";
    p4.textContent = `Weak`;
  } else if (pass.value.length > 6 && pass.value.length < 9) {
    p4.style.color = `yellow`;
    p4.textContent = `Medium`;
  } else {
    p4.style.color = "green";
    p4.textContent = `Strong`;
  }
});

//Assignment 9

let loginForm = document.getElementById("login");
let loginuser = document.getElementById("loginuser");
let userpassword = document.getElementById("userpassword");
let btn5 = document.getElementById("btn5");
let p6 = document.getElementById("p6");

let reg_username = "arun";
let reg_password = "12345678";
p6.style.color = "red";
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (loginuser.value.trim() !== reg_username) {
    p6.textContent = `invalid username`;
  } else if (userpassword.value.trim() !== reg_password) {
    p6.textContent = `invalid password`;
  } else if (
    loginuser.value.trim() === reg_username &&
    userpassword.value.trim() === reg_password
  ) {
    p6.style.color = `green`;
    p6.textContent = `Login Successful`;
  }
});
