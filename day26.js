//mini Challenges

//Challenge 1

/* 
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const dog = new Dog();

dog.eat();
dog.bark();

output : first eating will gets printed, next Barking will gets printed, 
eat method from parent class animal and bark method from the child class dog
*/

//challenge 2

/* 
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
}

const student = new Student("Arun", "MERN");

console.log(student.name);
console.log(student.course);

output : Arun , MERN , the super keyword is geting the name property from its parent class,
and super() always has to be above the childs this keyword else js will throw a error
*/

//Challenge 3

/*

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog sound");
  }
}

const dog = new Dog();

dog.speak();

output : the child class method overrides the parent class method and print Dog sound as output
 */

//challenge 4

/* 

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog sound");
  }
}

const dog = new Dog();

dog.speak();


output : first animal sound will print , then dog sound will get printed , super.speak() will execute the speak method in its parent class, 
before the child class method , cuz the super.speak() is above the console.log statement so that will get printend 
*/

// challenge 5

/* 

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, course) {
    this.course = course;
    super(name);
  }
}

it will not work cuz , u see the super it is below the childs own constructor so it will throw an 
error for sure 
*/

//Assignments

// Assignment 1

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} will eat pet food`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`barks`);
  }
}

let dog = new Dog("dog");

dog.eat();
dog.bark();

// Assignment 2

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
}

let student1 = new Student("vishal", 21, "MERN");
console.log(
  `the name is ${student1.name} , i am a ${student1.age} years old ${student1.course} student`,
);

//Assignment 3
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`Vehicle Started`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  drive() {
    super.start();
    console.log(`car is driving`);
  }
}

let car1 = new Car("toyota", "camry");
console.log(car1.brand);
console.log(car1.model);
car1.drive();

//Assignment 4

class Color {
  fav() {
    console.log(`i like red color`);
  }
}

class secondColor extends Color {
  fav() {
    console.log(`i like blue color`);
  }
}

let person = new secondColor();
person.fav();

// used own example

//assignment 5

class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  introduce() {
    console.log(`Hello , I am ${this.name}`);
  }
}

class Developer extends Employee {
  constructor(name, role) {
    super(name, role);
  }

  introduce() {
    super.introduce();
    console.log(`i am learning ${this.role}`);
  }
}

let emp1 = new Developer("arun", "Mern");

emp1.introduce();

// mini project ( library managemnet )
class LibraryItem {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  displayInfo() {
    console.log(`The ${this.title} is written by ${this.author}`);
  }
}

class Book extends LibraryItem {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  read() {
    console.log(`The ${this.title} has ${this.pages} pages`);
  }
}

class Magazine extends LibraryItem {
  constructor(title, author, issueNumber) {
    super(title, author);
    this.issueNumber = issueNumber;
  }

  showIssue() {
    console.log(
      `The issue number of ${this.title} Magazine is : ${this.issueNumber} `,
    );
  }
}

class Library {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  showItems() {
    this.items.forEach((value) => {
      value.displayInfo();
    });
  }
}

let book1 = new Book("Pride and Prejudice ", "Jane Austen", 230);
let magazine1 = new Magazine(
  "Kaiser, D., & Creager",
  "The right way to get it wrong. Scientific American",
  306,
);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 390);
book1.displayInfo();
book1.read();
magazine1.displayInfo();
magazine1.showIssue();

let item = new Library();

item.addItem(book1);

item.addItem(book2);
item.showItems();
