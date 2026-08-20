// mini challenges

/* 

challenge 1 :
let nums = [5,10,15,20];

let value = nums.find(num => num > 12);

console.log(value);

so for the first challenge the output will be 15, 15 satisfiy 
the condition it is greater than 12 and 20 is alo greater than 12 
but we are using the find() method where it prints the first element it satisfiy the condition 
*/

// challenge 2
/* 

let nums = [5,10,15,20];

let index = nums.findIndex(num => num === 15);

console.log(index);

output is 2, cuz were are using findIndex method which will print index of the element 

 */

// i want to mention something the diff btw c1 and c2 is find prints the value while findindex will print the indexvalue

// challenge 3

/* 


let nums = [2,4,6,8];

console.log(
nums.some(num => num > 5)
);

output will be true , cuz the condition we are checking is whether the array contains elements greater than 5 , yes it has two elements >5, even if we have one element it will print true 

*/

// challenge 4

/* 

let nums = [2,4,6,8];

console.log(
nums.every(num => num % 2 === 0)
);

the output will be true , the conditon is to check for even nums in the array and we are using every() method so it means every
elemnet in the array should be satisfy this condition and it satisfies , even one odd element in the array it would be false 

*/

// dif btw some and every is , in some method atleast one element in the array have to satisfy the condition, but in the every method all the element in the array has to satisfy the condtion

// challenge 5

/* 

let nums = [30,10,20];

nums.sort((a,b)=>a-b);

console.log(nums);

the output will be , the array is sorted in ascending order ( low num to high num ) cuz of this a-b, if it is b-a then it will be sort in 
descending order (high to low num)

*/

// assignment 1

console.log("Assignmnet 1");

let colors = ["Red", "Blue", "Green", "Black"];

let color = colors.find((value) => value === "Green");

console.log(color);

// find the value in the array

// assignment 2

console.log("Assignment 2");

let position = colors.findIndex((value) => value.toLowerCase() === "blue");

console.log(position);

// find the index value of blue

// assignment 3

console.log("Assignment 3");

let num = [12, 18, 25, 30];

let isPresent = num.some((value) => value > 20);
console.log(isPresent);

// assignment 4

console.log("Assignmnet 4");

let age = [22, 25, 18, 30];

let adult = age.every((value) => value >= 18);

console.log(adult);

// assignment 5

console.log(`Assignment 5`);

let numbers = [45, 12, 89, 23, 5];

let ascendingorder = numbers.sort((a, b) => a - b);
console.log(ascendingorder);

// sorted in ascending order

// assignment 6

console.log("Assignmnet 6");

let descendingOrder = numbers.sort((a, b) => b - a);
console.log(descendingOrder);

// sorted in descending order

// Assignment 7

console.log(`Assignment 7`);

let skills = ["HTML", "CSS", "JavaScript", "React"];

console.log(skills.reverse());

// reversed the array

// Assignment 8

console.log(`Assignment 8`);

let employees = [
  { id: 1, name: "Arun", salary: 35000 },
  { id: 2, name: "Rahul", salary: 42000 },
  { id: 3, name: "Varshini", salary: 50000 },
];

let filter = employees.find((value) => value.id === 2);

console.log(filter);

// found the exact object using find()

// Assignment 9

console.log(`Assignment 9`);

let filterByName = employees.findIndex(
  (value) => value.name.toLowerCase() === "varshini",
);

console.log(filterByName);

// assignment 10

console.log(`Assignment 10`);

let products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Mouse", stock: 10 },
];

let check = products.find((value) => value.stock === 0);

let checkStock = products.every((value) => value.stock > 0);

console.log(check);

console.log(checkStock);

// mentor challenge

console.log(`Mentor Challenge`);

let students = [
  { name: "Arun", mark: 85 },
  { name: "Rahul", mark: 42 },
  { name: "Varshini", mark: 95 },
  { name: "Karthick", mark: 67 },
  { name: "Surya", mark: 39 },
];

// find the first student scored above 90

console.log(students.find((value) => value.mark >= 90));

// find index of rahul

console.log(
  students.findIndex((value) => value.name.toLocaleLowerCase() === "rahul"),
);

//find if a student is failed the exam

console.log(students.some((value) => value.mark < 50));

// checking does every students are passed

console.log(students.every((value) => value.mark >= 50));

//sorting array in ascending order

let ascending = students.sort((a, b) => a.mark - b.mark);
console.log(ascending);

// reverse the array

console.log(ascending.reverse());

// mentor question

/* let numbers = [3, 1, 20, 100];

numbers.sort();

console.log(numbers); */

// it would not sort it cuz of this sort(), there isnt any parameters , this basically sorts in a string order without any parameters,
// we have to pass 2 arguments through parametrs
