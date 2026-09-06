//Mini challenges

// challenge 1

/* 
const data = {
  product: "Laptop",
  price: 55000,
};

const converted = JSON.stringify(data);

console.log(typeof data);
console.log(typeof converted);
*/

/* 
output : object , string
data is a object , we converted it into json using  JSON.stringify and stored ti in converted variable so it type is 
string
*/

//challenge 2

/* 
const data = '{"city":"Chennai","temperature":32}';

const result = JSON.parse(data);

console.log(result.city);
console.log(typeof result);
*/

/* 
its the complete opposite of the 1st challenge, 
we are converting a json string into a js object , 
output : chennai , object
*/

//challenge 3

/* 
const data = '{"user":{"name":"Arun","role":"Developer"}}';

const user = JSON.parse(data);

console.log(user.user.name);
console.log(user.user.role);
*/

/* 
converting a json into object and store it in user variable , 
the name of the object is user now and also we have user object nested inside the 
object as well , thats the resaon the 2 user exists , 
output : Arun , Developer
*/

//Challenge 4

/* 
const data = "{'name':'Arun','age':21}";

const user = JSON.parse(data);

console.log(user.name);
*/

/* 
it will not work , cuz json would always use double qoutes , but here it have single qoutes on properties and values 
*/

//Challenge 5

/* 
const skills = ["HTML", "CSS", "JavaScript"];

const stored = JSON.stringify(skills);

const restored = JSON.parse(stored);

console.log(stored);
console.log(restored[2]);
*/

/* 
the skills array is converted into a json and stored in a variable called stored, then again converted into array and stored
into a variable called restored

output : first console log will print the json , second console log will print javasricpt
*/
