//challenges

//challenge 1

/* 
const book1 = {
    title: "JavaScript"
};

const book2 = {
    title: "React"
};

const libraryData = new WeakMap();

libraryData.set(book1, "Available");
libraryData.set(book2, "Borrowed");

console.log(libraryData.get(book2));
console.log(libraryData.has(book1));

libraryData.delete(book1);

console.log(libraryData.has(book1));
 */

/* 
output : Borrowed, true , false 
the string stored in book2 key is "borrowed ", so the first print statement get the borrowed and printed it , then the 
second statement use has so it check the weakmap does it has book1 object , it has so true gets printed, then the book1 gets deleted from the weak map 
so the third print statement printed as false 

and weak map only allows object as keys
*/

//challenge 2

/* 
const admin = {
    name: "Arun"
};

const member = {
    name: "Kumar"
};

const moderators = new WeakSet();

moderators.add(admin);

console.log(moderators.has(admin));
console.log(moderators.has(member));

moderators.add(member);

console.log(moderators.has(member));
*/

/* 
output : true ,false , true

before the print statement console.log(moderators.has(admin));
console.log(moderators.has(member)); we only added the admin object into the weakset , so it prints true , false , then added the member object 
in the weak set so it prints true at the last print statement 

*/

//challenge 3

/* 
const colors = ["red", "green", "blue"];

const iterator = colors[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

/* 
output : value : red , done : false
 value : green , done : false
 value : blue , done : false
 value : undefined , done : true

 explanation : the iterator iterates the array , one by one not entirely , it has 2 values value and done , value gives 
 the value it gets in the array in the first iteration and done will be false if the array still has a next value on the line 
 if not it will be true
*/

//Challenge 4

/* 
function* tasks() {
    console.log("Task A");

    yield "First";

    console.log("Task B");

    yield "Second";

    console.log("Task C");

    yield "Third";
}

const taskGenerator = tasks();

console.log("Start");

console.log(taskGenerator.next());

console.log("Middle");

console.log(taskGenerator.next());

console.log("End");
*/

/* 
          start 
          task a
value : first , done : false
          middle
          task b
value : second , done : false
           End         
           
explanation : the js will print the start string in the console log 
then it sees this line console.log(taskGenerator.next()); prints the task a and yeild first and paused 
and prints middle and see the next iteration and printed task b and yeild second , then paused again then printed end the program ends here           
*/

//challenge 5
//created the generator function generateEvenNumbers
function* generateEvenNumbers() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
}

//for of will iterate through the generateevennumbers and print all the numbers the yeild has
for (const iteration of generateEvenNumbers()) {
  console.log(iteration);
}

//challenge 5 done

//Assignments
