//challenge 1
console.log("challenge 1");
let regex = /developer/i;

let testCase1 = "i am a developer";
let testCase2 = "i am a student";

console.log(regex.test(testCase1));

//challenge 2
console.log("challenge 2");
let digit = /^\d+$/;

let digitTest1 = "12345";
let digitTest2 = "987";
let digitTest3 = "12abc";
let digitTest4 = "abc12";

console.log(digit.test(digitTest1));
console.log(digit.test(digitTest2));
console.log(digit.test(digitTest3));
console.log(digit.test(digitTest4));

//challenge 3
console.log("challenge 3");
let psReg = /^[a-zA-Z0-9]{4,12}$/;

let test1 = "Arun123";
let test2 = "Arun";
let test3 = "Arun@123";
let test4 = "Arun123456789";

console.log(psReg.test(test1));
console.log(psReg.test(test2));
console.log(psReg.test(test3));
console.log(psReg.test(test4));

//Challenge 4
console.log("challenge 4");
let findNum = /\d+/g;

const text = "I bought 3 books, 2 pens and 15 pencils.";

console.log(text.match(findNum));

//Challenge 5
console.log("challenge 5");
const psCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;

console.log(psCheck.test("Code2026"));
console.log(psCheck.test("jsRock1"));
console.log(psCheck.test("javascript2026"));
console.log(psCheck.test("JAVASCRIPT2026"));
console.log(psCheck.test("Code 2026"));

//Assignment 1
console.log("Assignment 1");
const emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

console.log(emailCheck.test("user@example.com"));
console.log(emailCheck.test("user.name@mail.org"));
console.log(emailCheck.test("user@com"));
console.log(emailCheck.test("user@domain.c"));
console.log(emailCheck.test("user @domain.com"));

//Assignment 2
console.log("assignment 2");

const numberCheck = /^[6789][0-9]{9}$/;

console.log(numberCheck.test("9876543210"));
console.log(numberCheck.test("7012345678"));
console.log(numberCheck.test("5555555555"));
console.log(numberCheck.test("987654321"));
console.log(numberCheck.test("98765432101"));

//Assignment 3

console.log("Assignment 3");

const text1 = "JavaScript is powerful. JavaScript is popular.";
let matchRegex = /JavaScript/g;
console.log(text1.match(matchRegex).length);
console.log(text1.search(matchRegex));

//Assignment 4
console.log("Assignment 4");
const message = "This message contains badword and anotherbadword.";

console.log(message.replace(/badword/g, "******"));

//Assignment 5

console.log("Assignment 5");

const usernameCheck = /^[a-zA-Z0-9]{6,12}$/;
const EmailCheck = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
const mobileCheck = /^[6789][0-9]{9}$/;

let userName = "Dark143q";
let email = "arun143q@gmail.com";
let ps = "Dark7777";
let mobile = "6789456123";

if (usernameCheck.test(userName)) {
  console.log(`userName : valid`);
} else {
  console.log(`userName : Invalid`);
}
if (EmailCheck.test(email)) {
  console.log(`email : valid`);
} else {
  console.log(`email : Invalid`);
}
if (passwordCheck.test(ps)) {
  console.log(`password : valid`);
} else {
  console.log(`password : Invalid`);
}
if (mobileCheck.test(mobile)) {
  console.log(`mobile : valid`);
} else {
  console.log(`mobile : Invalid`);
}
