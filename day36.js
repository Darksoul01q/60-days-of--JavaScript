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
