// assignment 1

console.log(" assignment 1");

function javascript() {
  console.log("Hello JavaScript");
}

javascript();

// created a funtion to print " hello javascript"

// assignment 2

console.log(" assignment 2");

function welcome(name) {
  console.log("Welcome" + name);
}

welcome("Arun");
welcome(" varshini");

// created a funtion with a parameter to pass argument

// assignment 3

console.log(" assignment 3");

function add(a, b) {
  return a + b;
}

let sum = add(10, 20);

console.log(sum);

// creted a function to add and returns value

// assignment 4

console.log(" assignment 4");

function addOrEven(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("odd");
  }
}

addOrEven(100);

// created function to find the num is odd or even

// assignment 5

console.log(" assignment 5");

function largestnum(a, b) {
  if (a > b) return a + " is largest";
  else if (a === b) return a + "and" + b + " are equal";
  else return b + " is largest";
}

let num = largestnum(10, 30);

console.log(num);

// to find the larget among 2 numericals

// assignment 6

console.log(" assignment 6");

function findFactorial(num1) {
  let factorial = 1;

  for (let i = num1; i >= 1; i--) {
    factorial = factorial * i;
  }

  console.log(factorial);
}

findFactorial(5);

// find factorial

// assignment 7

console.log(" assignment 7");

function rstring(string) {
  let reverseString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString + string[i];
  }

  console.log(reverseString);
}

rstring("hello");

// reverse string function

// assignment 8

console.log(" assignment 8");

const square = (num2) => num2 ** 2;

let value = square(5);

console.log(value);

// square funtion ( using arrow funtion )

// assignment 9

console.log(" assignment 9");

function leapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

leapyear(2000);

// find leap year is with function

// assignment 10

console.log(" assignment 10");

function vowelsCount(vowels) {
  let count = 0;
  for (let i = 0; i <= vowels.length - 1; i++) {
    if (
      vowels[i] === "a" ||
      vowels[i] === "e" ||
      vowels[i] === "i" ||
      vowels[i] === "o" ||
      vowels[i] === "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}

let word = vowelsCount("varshini");
console.log(word);
// funtion for vowels count in  a string

// mentor challenge

function tables(math) {
  for (let i = 1; i <= 10; i++) {
    console.log(i + " X " + math + " = " + math * i);
  }
}

tables(5);
tables(6);

// tables funtion
