// assignment 1
console.log("assignment 1");

let names = ["Arun", "Varshini", "Rahul", "Karthick"];

names.forEach((name, index, array) => console.log(name, index, array));

// printed a array using forEach Method

// Assignment 2

let num = [1, 2, 3, 4, 5];

let numbers = num.map((double) => {
  return double * 2;
});

console.log(numbers);

// doubled the numbers in a array using map

// assignment 3

console.log("assignment 3");

let integers = [10, 15, 20, 25, 30];

let greaterNum = integers.filter((value) => {
  return value > 18;
});

console.log(greaterNum);

// filtered num greater then 18

// assignment 4

console.log("assignment 4");

let total = integers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total);

// assignment 5

console.log("Assignmnet 5");

let uppercase = names.map((value) => {
  return value.toUpperCase();
});

console.log(uppercase);

// used map method to uppecase a array

// assignment 6

console.log("Assignmnet 6");

let marks = [
  { name: "Arun", mark: 85 },
  { name: "Rahul", mark: 45 },
  { name: "Varshini", mark: 92 },
];

let pass = marks.filter((value) => {
  return value.mark >= 50;
});

console.log(pass);

// assignment 7

console.log("assignmnet 7");

let studentNames = marks.map((value) => {
  return value.name;
});

console.log(studentNames);

// assignment 8

console.log("Assignmnet 8");

let products = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 1000 },
  { item: "Keyboard", price: 2000 },
];

let bill = products.reduce((sum, value) => {
  let totalbill = sum + value.price;
  return totalbill;
}, 0);

console.log(`Total bill price : ${bill}`);

// mentor challenge

let gadgets = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 25000 },
  { name: "Mouse", price: 1000 },
  { name: "Monitor", price: 12000 },
];

let gadgetNames = gadgets
  .filter((value) => value.price > 10000)
  .map((value) => value.name);
console.log(gadgetNames);

let gadgetprice = gadgets
  .filter((value) => value.price > 10000)
  .reduce((sum, value) => {
    return sum + value.price;
  }, 0);
console.log(gadgetprice);
