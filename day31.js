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

//Assignments

//Assignment 1

const product = {
  name: "Mic",
  price: 300,
  category: "Electronics",
  instock: 2,
};

const convert = JSON.stringify(product);
console.log(convert);
console.log(typeof convert);

//Assignment 2

const studentJSON = '{"name":"Rahul","marks":87,"passed":true}';

const result = JSON.parse(studentJSON);
console.log(`Name : ${result.name}`);
console.log(`Mark : ${result.marks}`);

if (result.passed) {
  console.log(`The student ${result.name} : has passed the exam`);
} else {
  console.log(`The student ${result.name} : has failed the exam`);
}

//Assignment 3
const user = {
  name: "Robert",
  contact: {
    mobile: 1023654789,
    email: "sample@gmail.com",
  },
  skills: ["java", "python", "javaScript"],
};

const convertUser = JSON.stringify(user);
const reverseUser = JSON.parse(convertUser);
console.log(reverseUser.contact.email);
console.log(reverseUser.skills[1]);

//Assignment 4

const response = `{
  "status": "success",
  "data": {
    "id": 101,
    "name": "Arun",
    "role": "MERN Developer",
    "skills": ["JavaScript", "React", "Node.js"]
  }
}`;

let convertResponse = JSON.parse(response);

console.log(convertResponse.status);
console.log(convertResponse.data.name);
console.log(convertResponse.data.role);
console.log(convertResponse.data.skills[0]);
console.log(`Number of skills : ${convertResponse.data.skills.length}`);

//Assignment 5

const serverResponse = `{
  "success": true,
  "user": {
    "id": 101,
    "name": "Arun",
    "role": "MERN Developer",
    "projects": [
      {
        "name": "SkillSwap",
        "type": "MERN"
      },
      {
        "name": "StriveNet",
        "type": "MERN"
      }
    ]
  }
}`;

//step 1
const serverReverse = JSON.parse(serverResponse);

//step 2
console.log(`Request Successful : ${serverReverse.success}`);
console.log(`Name : ${serverReverse.user.name}`);
console.log(`Role : ${serverReverse.user.role}`);

//step 3

serverReverse.user.projects.forEach((value) => {
  console.log(`Project : ${value.name}`);
});

//step 4

console.log(`No of projects : ${serverReverse.user.projects.length}`);

//step 5

const jsonData = JSON.stringify(serverReverse);

//Step 6

console.log(jsonData);
