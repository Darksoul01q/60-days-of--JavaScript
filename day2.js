// assigment 1

let age = 19;

if (age >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are ineligible to vote");
}

// assign conditions to find vote eligibility

// assigment 2

let num = 3;

if (num > 0) {
  console.log(" the number is positive");
} else if (num < 0) {
  console.log("the number is negative");
} else {
  console.log(" it is zero");
}

// identify whether the is +ve or -ve, or zero
// assigment 3

if (num % 2 == 0) {
  console.log(" it is even");
} else {
  console.log(" it is odd");
}

// finding odd and even numbers

// assigment 4

let num1 = 5;
let num2 = 7;

if (num1 > num2) {
  console.log(num1 + " is largest");
} else {
  console.log(num2 + " is largest");
}

// largest between two numbers
// assigment 5

let num3 = 8;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is largest");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is largest");
} else {
  console.log(num3 + " is largest");
}

// find largest among 3 values
// assigment 6

let mark = 91;

if (mark >= 90 && mark <= 100) {
  console.log("grade A");
} else if (mark >= 80 && mark <= 89) {
  console.log("grade B");
} else if (mark >= 70 && mark <= 79) {
  console.log("grade D");
} else if (mark >= 60 && mark <= 69) {
  console.log("grade A+");
} else {
  console.log(" Fail");
}

// grade assing based on student marks
// assignment 7

let year = 2006;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " is a leaf year");
} else {
  console.log(year + " is not a leaf year");
}

// leap year identification
// assigment 8

let day = 5;

switch (day) {
  case 1:
    console.log(" monday ");
    break;

  case 2:
    console.log(" Tuesday");
    break;
  case 3:
    console.log(" Wednesday");
    break;

  case 4:
    console.log(" Thursday");
    break;

  case 5:
    console.log(" Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Sunday");
    break;
}

// use swith syntax to assign days in a week
// assignment 9

const username = "sam";

const password = "sam123";

if (username === "sam" && password === "sam123") {
  console.log(" Logined Succesfully");
} else console.log(" username or password might be worng");

// login athuentication with contional syntax

// assigment 10

let person = age >= 18 ? "adult" : "minor";
console.log(person);

// find adult or minor using tenary operator

// used age variable from anorthere assignment
