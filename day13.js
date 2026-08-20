//Mini Challenges

// Challenge 1

/*
let today = new Date();

console.log(today.getFullYear());
 */

//output : 2026

// Challenge 2

/* 
let today = new Date();

console.log(today.getMonth()+1);
*/

//output : 8

// Challenge 3

/* 
let today = new Date();

console.log(today.getDay());
*/

//output : 2 ,cuz sunday starts with 0 so tue will be 2

// challenge 4
/* 

let birthday =
new Date("2005-12-15");

console.log(
birthday.getMonth()
);

*/

// output : 11 , not sure about that cuz we used a custom date in that

//challenge 5

/* 
let now = new Date();

console.log(now.toDateString());
*/

//output : first it will print day, next date , month, year.. tue 4-8-2026, its not the exact output for the toDateString but similar to it

// Assignment1

console.log(`Assignment 1`);

let dateTime = new Date();

console.log(dateTime.getFullYear());

console.log(dateTime.getMonth() + 1);
console.log(dateTime.getDate());

// Assignment 2

console.log(`Assignment 2`);

console.log(dateTime.getHours());

console.log(dateTime.getMinutes() + 1);
console.log(dateTime.getSeconds());

//Assignment 3

console.log(`Assignment 3`);
console.log(
  `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`,
);

// Assignment 4

console.log(`Assignment 4`);

let birthday = new Date("2005-12-15");
console.log(birthday);

// Assignment 5

console.log(`Assignment 5`);

console.log(dateTime.toDateString());
console.log(dateTime.toLocaleDateString());

// todatestring will provide the day month in string and date of the day and year, while tolocaledatestring print date, month and year only

//Assignment 6

console.log(`Assignment 6`);

console.log(dateTime.toLocaleTimeString().toUpperCase());

// Assignment 7

console.log(`Assignment 7`);

function currentTime() {
  let time = new Date();
  console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}

currentTime();

// Assignment 8

console.log(`Assignment 8`);

function formatTime() {
  let time = new Date();

  let hours = String(time.getHours()).padStart(2, "0");
  let minutes = String(time.getMinutes()).padStart(2, "0");
  let seconds = String(time.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

console.log(formatTime());

//Assignment 9

console.log(`Assignment 9`);

let start = new Date("2026-01-01");

let end = new Date();

let diff = start - end;

let oneday = 1000 * 60 * 60 * 24;

let days = Math.abs(Math.floor(diff / oneday));

console.log(days);

// mentor challenge

console.log(`Mentor Challenge`);

function greeting() {
  let time = new Date();
  let hour = time.getHours();
  if (hour < 12) {
    console.log(`Good Morning`);
  } else if (hour >= 12 && hour < 17) {
    console.log(`Good Afternoon`);
  } else {
    console.log(`Good Evening`);
  }
}

greeting();

// Mini Project

console.log(`Mini Project`);

function digitalClock() {
  let time = new Date();

  let hours = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  return `${hours}:${min}:${sec}`;
}

console.log(digitalClock());

// mentor Question

/* 
let date = new Date(2026, 0, 1);

console.log(date.getMonth());

console.log(date.getDate());

console.log(date.getFullYear());
*/

// output : date will be 1 and year will be 2026 and month it prints 0 but it refers to jan, cuz like index it starts from 0 from jan
