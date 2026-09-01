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
