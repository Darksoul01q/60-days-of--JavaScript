// assignment 1

console.log("assignment 1");
let name = "arun";

console.log(name.length);
console.log(name[0]);
console.log(name[name.length - 1]);

// printing length , first and last letter of the string

// assignment 2

console.log("assignment 2");

console.log(name.toUpperCase());

// converting lowercase letter to uppercase

// assignment 3

console.log("assignment 3");
let myname = " VARSHINI";
console.log(myname.trim().toLowerCase());

// converting uppercase to lowercase

// assignment 4

console.log("assignment 4");

let word = "   javascript    ";

console.log(word.trim());

// triming the extra spaces in the string

// assignment 5

console.log("assignment 5");

console.log(word.includes("script"));

// check the specific word is in the string or not , by using string method include()
//assignment 6

console.log("assignment 6");

console.log(word.trim().replace("java", "type"));

// replace a word in a string , which stored in a variable without altering the string inside that

// assignment 7

console.log("assignment 7");

console.log(word.trim().slice(0, 4));

// sliced the word from string using index

// assigment 8

console.log("assignment 8");

console.log(word.trim().slice(4));

// sliced the word from string using index

// assignment 9

console.log("assignment 9");

function countLetter(word1, letter) {
  let count = 0;
  word1 = word1.toLowerCase();
  for (let i = 0; i <= word1.length - 1; i++) {
    if (word1[i] === letter) {
      count = count + 1;
    }
  }
  return count;
}

let print = countLetter("JavaScript is amazing", "a");

console.log(print);

// function to count the letters in a string

// assignment 10

console.log("assignment 10");

function string(string1) {
  let rstring = "";
  for (let i = string1.length - 1; i >= 0; i--) {
    rstring = rstring + string1[i];
  }
  return rstring;
}

let input = string("master");
console.log(input);

// reverse a string

// assignment 11

console.log("assignment 11");

function palindrome(string2) {
  let rstring = "";
  for (let i = string2.length - 1; i >= 0; i--) {
    rstring = rstring + string2[i];
  }

  if (string2 === rstring) {
    return true;
  } else {
    return false;
  }
}

let hi = palindrome("mam");
console.log(hi);

// palindrome checking function

// mentor challenge

function formatName(name) {
  name = name.trim().toUpperCase();

  return name;
}

let word3 = formatName("aRun KuMar");
console.log(`the name is in correct format now : ${word3}`);
