// mini challenges
// challenge 1

/* 
the output order will be A>C>B>D
*/

// challenge 2

/* 
first the x in the fuction gets print than the x in the GEC will get print
*/

// challenge 3

/* 
the function call starts from the function call named third and stops it and starts second , then second stops
and first will be executed , then 2 and lasty three
*/

// challenge 4

/* 
the output will be A>B>C
*/

// challenge 5

/* 
ofcoures it will rise an error for sure , cuz the variable is declared after the print statement due to that there will be a error
*/

//Assignments

//Assignment 1
console.log("hello ");

function greet() {
  console.log("welcome");
}

function message() {
  greet();
  console.log("javascript");
}

message();

// used the global execution context

// assignment 2

function one() {
  console.log("One");
}

function two() {
  console.log("Two");
  one();
}

function three() {
  console.log("Three");
  two();
}

three();

/* the output would will be one , two, three.
initially the stack is empty, then the three function come into the stack, then the two fuction add above three in the stack, then one will be 
added above two, one finished and destroyed , then two and three as well

*/

// Assignment 3

let name = "Global";

function showName() {
  let name = "Local";
  console.log(name);
}

showName();

console.log(name);

/* 
local gets print before global, cuz before print statement the function gets called , the gec execution stoped untill the 
called function gets executed and destroyrd from the stack
*/

//Assignment 4

function multiply(a, b) {
  return a * b;
}

function calculate() {
  let result = multiply(5, 4);
  console.log(result);
}

calculate();

/* 
the calculate function gets called and added in the empty stack ,
then the multiple function is called from in the calculate stack , it now added above the calculate in the call stack , 
now the multiply function is executed returned the result var and gets printed 
*/

//Assignment 5

function outer() {
  console.log("Outer Start");

  function inner() {
    console.log("Inner");
  }

  inner();

  console.log("Outer End");
}

outer();

/* 
the memory created , context execution called the outer funtion , then the outer start text gets printed,
then the inner funtion called and added above the stack , now inner text gets printed the function gets destroyed from the stack , the outer function
continue execution again and prints outer end text and destroyed from the  call stack
*/

// Assignment 6

function add(a, b) {
  return a + b;
}

function calculate() {
  let x = add(10, 20);
  let y = add(30, 40);

  return x + y;
}

console.log(calculate());

/* 
calculate called first and added in the call stack first , then add called from inside the calculate , added in the call stack above the calculate
then destroyed once done , then again the add fuction called stored in the y variable , then destroyed from the stack again when finised ,
then calucaulate function agian continued and returns the value the gets destroyed from the call stack 


*/

// Assignment 7

let x = 10;

function first() {
  let x = 20;

  function second() {
    let x = 30;

    console.log(x);
  }

  second();

  console.log(x);
}

first();

console.log(x);

/* 
output order: first 30, then 20 , then lastly 10.
the x holds 10 is in the GEC, the one holds 20 is in the FEC above GEC in the call stack, the one holds 30 is another FEC above the previous FEC the 
named as second
*/

//Assignment 8

function one() {
  return 10;
}

function two() {
  let value = one();
  return value + 20;
}

function three() {
  let result = two();
  return result + 30;
}

console.log(three());

/* 
the output will be 60 ,
 starts from global , added three function , then added two , then added one , one removed after returns 10 to value , then two gets removed after returns 30 to 
  the result , then  three removed from stack after returning 60 to the console log in the GEC
*/

//Assignment 9

console.log("Start");

function first() {
  console.log("First");

  second();

  console.log("First End");
}

function second() {
  console.log("Second");

  third();

  console.log("Second End");
}

function third() {
  console.log("Third");
}

first();

console.log("End");

/* 
output :
start
first
second
third
second end 
first end 
end 
*/

//Mentor challenge

let a = 10;

function outer() {
  let b = 20;

  function middle() {
    let c = 30;

    function inner() {
      let d = 40;

      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
    }

    inner();
  }

  middle();
}

outer();

/* 
i think 4 execution context inthe call stack ,
the outbut will be 10,20,30,40
call stack while inner (global , above outer function, above middle function, above inner function)

*/
