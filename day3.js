// assignment 1
console.log("assignment 1");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// print numbers from 1 to 10 with for loop

// assignment 2
console.log("assignment 2");

let k = 10;

while (k >= 1) {
  console.log(k);
  k--;
}
// print numbers from 10 to 1 with while loop

// assignment 3
console.log("assignment 3");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// print even numbers with for loop
// assignment 4
console.log("assignment 4");

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// print odd numbers with for loop

// assignment 5
console.log("assignment 5");

let total = 0;

for (let i = 1; i <= 100; i++) {
  total = total + i;
  if (i >= 100) {
    console.log(total);
  }
}

// print the sum of 100 with for loop

// assignment 6
console.log("assignment 6");

let j = 7;

for (let i = 1; i <= 10; i++) {
  console.log(i + " x 7 = " + i * j);
}

// 7 table multiplication with loop

// assignment 7

console.log("assignment 7");

let a = 1;

for (let i = 5; i >= 1; i--) {
  a = a * i;
  if (i <= 1) {
    console.log(a);
  }
}

// factorial of 5!

// assignment 8

console.log("assignment 8");

let string = "javascript";
let string1 = "";

for (let i = 9; i >= 0; i--) {
  string1 = string1 + string[i];
  if (i <= 0) {
    console.log(string1);
  }
}

// reverse a string by loop using index value of the string

// assignment 9

console.log("assingment 9");

let word = "aritificial intelligence";

let word1 = 0;

for (let i = 0; i <= 23; i++) {
  if (
    word[i] === "a" ||
    word[i] === "e" ||
    word[i] === "i" ||
    word[i] === "o" ||
    word[i] === "u"
  ) {
    word1 = word1 + 1;
  }
}

console.log(word1);

// counting vowels in a string

// assingment 10

console.log(" assingment 10");

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }
  console.log(stars);
}

// assignment 11

console.log(" assignment 11");

for (let i = 5; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}

// bonus assignment

console.log("  bonus");

for (let i = 1; i <= 5; i++) {
  let num = "";
  for (let j = 1; j <= i; j++) {
    num = num + j;
  }
  console.log(num);
}
