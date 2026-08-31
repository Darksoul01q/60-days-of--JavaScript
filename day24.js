//Challenge1
/* 
const user = {
    name: "Arun",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();

output : Arun , get printed , cuz this will inherit user so it will become user.name , when we call user.greet it invoke user and greet function then 
it prints user.name
*/

// challenge 2

/* const user = {
    name: "Arun",

    greet: function () {
        console.log(this.name);
    }
};

const fn = user.greet;

fn();

output : undefined , cuz we didnt call the user.greet fucntion , we call fn()

*/

// challenge 3

/* 
console.log(this === window);

output : true , here this refers to window object 
*/

// challenge 4

/* 
function Student(name) {
    this.name = name;
}

const student = new Student("Arun");

console.log(student.name);

exlpanation : see the const student , u can see that we using new keyword it creates a empty object passes into the
Student constructor where the this.name will push the name property and return it to the student , now the const student become a student object holding 
a name property, so if we print student.name it will print the value of the name key in the student object 
*/

//Challenge 5

/* 
function Student(name) {
    this.name = name;
}

Student.prototype.greet = function () {
    console.log("Hello " + this.name);
};

const student = new Student("Arun");

student.greet();

Explanation : after memory creation phase , when executing code the js engine see the student variable create a empty object , send inside 
student constructor and return as a student object holding the name property, now if we call student.greet, the engine will the inside the object and not 
find any greet named function , then it will see the prototype linked to its parent constructor and sees the greet function and access there , since 
wee called using . notion student the this inside there will inherit the student object 
*/

//Challenge 6

/* 
const user = {
    name: "Arun",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();

yeah this is a regular function, if it is a constructor the function name will be begin with capital letter, and also used the new key word in the program
the engine sees the user.greet , invoked the user object to find the greet function, it will find it and 
the greet function will execute sees the this and it will inherit the user object and user.name and print Arun
*/

//Challenge 7

/* 
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

const person1 = new Person("Arun");
const person2 = new Person("Rahul");

console.log(person1.sayHello === person2.sayHello);


output : it will print true , since we are checking person1 sayhello with person2 say hello ,  both the objects are linked with the same operator
*/

//Assignments

// Assignment 1

const student = {
  name: "Arun",
  age: 21,
  course: "Full Stack",
  introduce() {
    console.log(`My name is : ${this.name}`);
    console.log(`I am ${this.age} years old.`);
    console.log(`I am learning ${this.course}`);
  },
};

student.introduce();

// Assigment 2

const user = {
  name: "Arun",
  showName: function () {
    console.log(this.name);
  },
};

const test = user.showName;
test();

/* 
first when i used user.showname i got arun as output , after got undefined when i used test(),cuz while user.showname the js engine will see the 
. notation and the this will inherit user and print user.name so i got arun as output , but after that we call the showname function indeirectly by test
not using the user.showname directly , so the this keyword cannot inherit and inherint the window object due to that i got undefined as the output 
*/

//Assignment 3

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

let car1 = new Car("Toyota", "camry", 2025);
let car2 = new Car("Ford", "Mustang", 1967);
let car3 = new Car("Tesla", "Model Y", 2024);

console.log(car1);
console.log(car2);
console.log(car3);

//Assignment 4
