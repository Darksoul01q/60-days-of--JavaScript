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
