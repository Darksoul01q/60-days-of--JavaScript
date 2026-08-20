// assignment 1

console.log("assignment 1");

let aboutMe = {
  name: "Arun",
  age: 21,
  college: "CCET",
  department: "AI&DS",
  city: "Pudukkottai",
};
console.log(aboutMe);

// created a object about me

// assignment 2

console.log("assignment 2");

aboutMe.age = 22;

console.log(aboutMe.age);

// updated the age value

// assignment 3

console.log("assignment 3");

aboutMe.skills = ["mongodb", "react", "javaScript"];

console.log(aboutMe);

// added a new property in the object

// assignment 4

console.log("assignment 4");

delete aboutMe.city;

console.log(aboutMe);

// deleted a property in the aboutMe object

// assignment 5

console.log("assignment 5");

let book = {
  title: "The Rich",
  author: "Clarke",
  Price: "Rs.3000",
};

console.log(` The Book ${book.title} Costs ${book.Price}`);

// declared a object and printed it using template literals
// assignment 6

console.log("assignment 6");

let student = {
  name: "Dhanush",
  age: 19,
  college: "SRM",
  address: {
    city: "chennai",
    state: "Tamil Nadu",
  },
};

console.log(student.address);

// created a nested obeject

// assignment 7

console.log("assignment 7");

let studentDetails = [
  { name: "Karthick", age: 19, college: " SRM" },
  { name: "Ravi", age: 20, college: " SRM" },
  { name: "varshini", age: 20, college: "Hindustan" },
];

for (let i = 0; i < studentDetails.length; i++) {
  console.log(studentDetails[i].name);
}

// creates a array of objects and print only a specific property from all the objects with for loop

// assignment 8

console.log("assignment 8");

for (let i in book) {
  console.log(`${i} : ${book[i]}`);
}

// printed key and values using for .. in

// assignment 9

console.log("assignment 9");

console.log(Object.keys(book));

// printed keys of the object

// assignment 10

console.log("assignment 10");

console.log(Object.values(book));

// printed values of object

// assignment 11

console.log("assignment 11");

console.log(Object.entries(book));

// printed entries of object

//mentor challenge

console.log("MentorChallenge");

let gagets = [
  {
    name: "Laptop",

    price: 50000,
  },

  {
    name: "Phone",

    price: 25000,
  },

  {
    name: "Mouse",

    price: 800,
  },
];

function total(products) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  console.log(`the totalPrice is : ${totalPrice}`);
}

total(gagets);
