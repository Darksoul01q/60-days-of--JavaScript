// challenge 1

/* 
class Person {
    constructor(name) {
        this.name = name;
    }
}

const person = new Person("Arun");

console.log(person.name);

output :  Arun, will get printed cuz we declared the person and used new to create a empty object and pushed the property to person,
so the person object created then when the js engine see the print statement person.name it will from accesing the person object
*/

//Challenge 2

/* 
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        console.log(this.brand);
    }
}

const car = new Car("Toyota");

car.showBrand();

output : Toyota, will get printed
*/

//Challenge 3

/* 
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}

const student = new Student("Arun", 21);

student.introduce();


output : when the engine see the line new , a empty object will be created , inside the class constructor function 
the name  and age property will be created and pushed in the student object , and when we call student.introduce , it will invoke the 
the introduce method inside the class and print the 2 statements , my name is arun, i am 21 years old 
*/

// challenge 4

/* 
class Calculator {

    add(a, b) {
        return a + b;
    }
}

const calc = new Calculator();

console.log(calc.add(10, 20));

output : 30
 */

//Challenge 5

/* 

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

const animal1 = new Animal("Dog");
const animal2 = new Animal("Cat");

animal1.speak();
animal2.speak();

output : Dog makes a sound, Cat makes a sound , no both are different object i guess

*/

//Assignment 1

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.name}`);
    console.log(`I am ${this.age} years old`);
    console.log(`I am learing ${this.course}`);
  }
}

const student1 = new Student("Anbu", 21, "Mern Stack Development");

student1.introduce();

//Assignmnet 2

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} Started`);
  }
}

const car1 = new Car("Toyota", "campry", 2026);
car1.start();

//Assignment 3
