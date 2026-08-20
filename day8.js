// assignment 1

console.log("Assignment 1");

let movies = ["Avatar", "Interstellar", "Inception"];

let [movie1, movie2, movie3] = movies;

console.log(movie1);
console.log(movie2);
console.log(movie3);

// destructured the movies array and printed it

// assignment 2

console.log("Assignment 2");

let numbers = [100, 200, 300, 400];

let [first, , third] = numbers;

console.log(first);
console.log(third);

// destructured the array and get the first and third elements

// assignment 3

console.log("Assignment 3");

let x = 50;

let y = 100;

[x, y] = [y, x];

console.log(x);
console.log(y);

// swaped the values of two variable without third variable

// assignment 4

console.log("Assignment 4");

let person = {
  name: "Arun",
  age: 19,
  city: "Madurai",
};

let { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

// destructured a object and printed it

// assignment 5

console.log("Assignment 5");

let { name: username } = person;

console.log(username);

// assignment 6

console.log("Assignment 6");

let car = {
  brand: "Toyota",
};

let { brand, color = "black" } = car;

console.log(color);
// i used my own example to this assignment is it ok
// created a default value

// assignment 7

console.log("Assignment 7");

let school = {
  schoolName: "larul",
  address: {
    location: "Aranthangi",
    state: "Tamil Nadu",
  },
};

let {
  schoolName,
  address: { location, state },
} = school;

console.log(schoolName);
console.log(location);
console.log(state);

// destructured a nested object and used my own example instead of yours

// assignment 8

console.log("Assignment 8");

let users = [
  {
    name: "Arun",
    age: 21,
  },

  {
    name: "Rahul",
    age: 22,
  },
];

for (let i = 0; i < users.length; i++) {
  let { name: person, age: ageOfPerson } = users[i];
  console.log(
    `The name of the person is ${person} and his age is : ${ageOfPerson}`,
  );
}

// used loop to print the destructured value

// mentor challenge

console.log("Mentor Challenge");

let product = {
  id: 101,

  details: {
    name: "Laptop",

    price: 50000,
  },
};

let {
  id,
  details: { name: productName, price },
} = product;

console.log(productName);
console.log(price);
