// assignment 1

console.log("assignment 1");

let favouriteMovies = [
  "boys",
  "dark",
  "1899",
  "stranger things",
  "teach you a lesson",
];
console.log(favouriteMovies[0]);
console.log(favouriteMovies[favouriteMovies.length - 1]);
console.log(favouriteMovies.length);
console.log(`my favrouite among this is list is ${favouriteMovies[1]}`);

// created a array contains movies and accessed it.

// assignment 2

console.log(" assignment 2");
favouriteMovies.push("your name");
console.log(favouriteMovies);

// added a movie in the array with push method

// assingment 3

console.log(" assignment 3");

favouriteMovies.pop();
console.log(favouriteMovies);

// poped a out the last movie with pop method

// assignment 4

console.log(" assignment 4");

favouriteMovies.unshift("wheathering with you");

console.log(favouriteMovies);

// added a movie at the beginning with unshift()

// assignment 5

console.log(" assignment 5");

favouriteMovies.shift();

console.log(favouriteMovies);

// removed the movie at the begining with shift()

// assignment 6

console.log(" assignment 6");

let num = [1, 4, 3, 4, 5, 67, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// printed the array using for loop

// assignment 7

console.log(" assignment 7");

let total = 0;

for (let i = 0; i < num.length; i++) {
  total = total + num[i];
}

console.log(` the sum of the array is : ${total}`);

// assignment 8
console.log(" assignment 8");

let max = 0;

for (let i = 0; i < num.length; i++) {
  if (max < num[i]) {
    max = num[i];
  }
}
console.log(`The largest num in the array is : ${max} `);
// find the largset num among the array

// assignment 9

console.log(" assignment 9");

let evenNumCount = 0;
let oddNumCount = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    evenNumCount += 1;
  } else {
    oddNumCount += 1;
  }
}

console.log(
  `the count of even number is : ${evenNumCount} and odd number is : ${oddNumCount} `,
);

// find num of even nums and odd nums in an array

// assignment 10

console.log(" assignment 10");

let lang = ["HTML", "CSS", "JavaScript", "React", "Node"];
console.log(lang.includes("React"));

// check the element where in the array or not

// assignment 11

console.log(" assignment 11");

let nums = [25, 10, 45, 5, 18];

nums.sort((a, b) => a - b);

console.log(nums);

// sorted array in ascending order

// assignment 12

console.log("assignment 12");

let reverse = [];

for (let i = favouriteMovies.length - 1; i >= 0; i--) {
  reverse.push(favouriteMovies[i]);
}

console.log(reverse);

// reversed the  array using for loop

// mentor challenge

function findsecondlargest(numbers) {
  let largest = 0;
  let number = [];
  let secondlargest = 0;
  for (let i = 0; i < num.length; i++) {
    if (largest < num[i]) {
      largest = num[i];
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (largest > num[i]) {
      number.push(num[i]);
    }
  }

  for (let i = 0; i < number.length; i++) {
    if (secondlargest < number[i]) {
      secondlargest = number[i];
    }
  }

  console.log(` the second largest numer in the array is : ${secondlargest}`);
}

findsecondlargest(num);
