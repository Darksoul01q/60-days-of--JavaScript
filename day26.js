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
