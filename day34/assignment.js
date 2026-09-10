//challenge 3

/* const scores = new Map();

scores.set("Arun", 80);
scores.set("Kumar", 75);
scores.set("Arun", 95);

console.log(scores.get("Arun"));
console.log(scores.size);
console.log(scores.has("Kumar")); 
*/

/* 
output : 95,2,true
cuz this line updates the value of arun from 80 to 95, scores.set("Arun", 95);

*/

//challenge 4

/* 
const ids = new Set();

ids.add(101);
ids.add(102);
ids.add(101);
ids.add(103);
ids.add(102);

console.log(ids.size);
console.log(ids.has(101));

ids.delete(103);

console.log(ids.size);
*/

/* 
output : intially size is 3 , the 2 duplicates 101 , 102 is ignored , second console.log is true , 103 is deleted so the 
size will be 2 on the final print statement
*/

//Challenge 5

const users = [
  { id: 1, name: "Arun", role: "Developer" },
  { id: 2, name: "Kumar", role: "Tester" },
  { id: 3, name: "Rahul", role: "Developer" },
  { id: 4, name: "Vijay", role: "Designer" },
];

const user = new Map();

user.set(users[0].id, users[0].name);
user.set(users[1].id, users[1].name);
user.set(users[2].id, users[2].name);
user.set(users[3].id, users[3].name);

const roles = new Set();

roles.add(users[0].role);
roles.add(users[1].role);
roles.add(users[2].role);
roles.add(users[3].role);

console.log(user.get(3));
console.log(roles.size);
console.log(roles.has("Tester"));

//Finished challenge 5 and it requirements all

//Assignments

//Assignment 3

let students = new Map();
//adding student marks
students.set(1, 76);
students.set(2, 59);
students.set(3, 89);
students.set(4, 99);
students.set(5, 93);

//printing student marks
console.log(students.get(1));
console.log(students.get(2));
console.log(students.get(3));
console.log(students.get(4));
console.log(students.get(5));

//checking does student id no 4 exists
console.log(students.has(4));

//updating student 3 marks
students.set(3, 55);
console.log(students.get(3));

//deleting student id and mark

students.delete(2);
console.log(students.has(2));

//prints the size of the student list
console.log(students.size);

//Assignment 4

const emails = [
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com",
  "b@gmail.com",
  "d@gmail.com",
  "c@gmail.com",
];

let emailDb = new Set();

//inserting values emails
emails.forEach((value) => {
  emailDb.add(value);
});

//printing unique emails
console.log(emailDb);

//printing no of unique emails
console.log(emailDb.size);

//checking does "c@gmail.com" exists in emaildb
console.log(emailDb.has("c@gmail.com"));

//deleting email from email db

emailDb.delete("b@gmail.com");

//printing updated emailDb

console.log(emailDb);

//Assigment 5
