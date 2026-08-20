// assignment 1

console.log("assignment 1");

let language = ["Java", "Python", "Rust"];

let languageFrameWorks = [...language];

languageFrameWorks.push("React");

console.log(language);
console.log(languageFrameWorks);

// created a shallow copy using spread and modified the copied one

// assignment 2

console.log("assignment 2");

let Me = { name: "Arun", age: 21 };

let updatedMe = { ...Me };

updatedMe.age = 22;

console.log(Me);
console.log(updatedMe);

// copied a object with spread and modifed the copied one

// assignment 3

console.log("assignment 3");

let movies_2021 = ["The spy", "Dark"];
let movies_2022 = ["Invincible", "Hero"];

let allMovies = [...movies_2021, ...movies_2022];

console.log(allMovies);

// merged two arrays

// assignment 4

console.log(`Assignment 4`);

let student = {
  name: "varshini",
  college: "Hindustan",
};

let marks = {
  maths: 67,
  science: 86,
  python: 79,
};

let marksheet = {
  ...student,
  ...marks,
};

console.log(marksheet);

// merged to objects

// assignment 5

console.log("Assignment 5");

let num = [1, 2, 3, 4, 5, 6, 7];

let [first, ...others] = num;

console.log(first);
console.log(others);

// used rest operator

// assignment 6

console.log(`Assignment 6`);

let person = {
  name: "Arun",

  age: 21,

  city: "Madurai",

  country: "India",
};

let { name, ...details } = person;

console.log(name);

console.log(details);

// used rest operstor in object

// assignment 7

function add(...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(`the sum all numbers is : ${add(10, 20, 30, 40, 50)}`);

// used a rest operator in function

// assignment 8

console.log("Assignment 8");

function max(...values) {
  let maxValue = 0;

  for (let i = 0; i < values.length; i++) {
    if (maxValue < values[i]) {
      maxValue = values[i];
    }
  }

  return maxValue;
}

console.log(`This the largest value : ${max(10, 20, 30, 40, 50)}`);

// created a function and used a rest operator as a parameter

// mentor challenge

console.log("Mentor Challenge");

let products = [
  {
    name: "Laptop",

    price: 50000,
  },

  {
    name: "Phone",

    price: 25000,
  },
];

let updatedProducts = [...products];

updatedProducts.push({
  name: "Mouse",
  price: 5000,
});

console.log(products);

console.log(updatedProducts);

// there is another way i can get this exact output by creating a new array and merge them and store it in updatedproducts right?
