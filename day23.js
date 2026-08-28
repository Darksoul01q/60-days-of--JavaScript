//mini challenges

// challenge 1

/*  
console.log(a);

var a = 10;
*/

// js reads the console.log(a) first , the var declared after that , the output will be undefined

// challenge 2

/* console.log(a);

let a = 10;

 the js reads the console log first , it knows the let exist but cant access, cuz the let is in the temporal dead zone while js is executing
 the print statement, output will be a reference error, cuz used let not var
*/

// challenge 3

/* 

greet();

function greet() {
    console.log("Hello");
}

it will work cuz its a funtion, usually after memory creation , while execution the js dosent care 
about the function body , it only invoke when the function is called , here after the 
memory creation the funtion is called js already knows the function exists in its memory creation, so it will work
*/

// challenge 4

/* 
var x = 10;

{
    var x = 20;
}

console.log(x);

output : 10 will be printed , cuz it is in the global scope , the x holding 20 is in a separate block scope 
*/

// Challenge 5

/* 
let x = 10;

{
    let x = 20;
    console.log(x);
}

console.log(x);

output : 20 prints first , then 10, js reads the x holding 10 the reads the block scope so it adds in thr call stack above the 
gec , it prints 20 then poped from the call stack , then gec executes 10 gets printed right
*/

// challenge 6

/* 
let x = 10;

function test() {
    let x = 20;
    console.log(x);
}

test();

console.log(x);

output : the both console.log will not print the same value , 
cuz js reads the x  holds 10 first , then skips the function body , then reads the function call test and invoke the test function, 
inside the print statement executes needs the value of x the local scope has a x var it prints 20, poped from the call stack,
reads the console.log in the gec, it already has x = 10 in the memory of gec so it prints 10, thats why they will differ 
*/

// challenge 7

/* 
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

let fn = outer();

fn();

output : Hello, the excution context is after memory creation js reads the code , skips the function code,
the outer(), called and added above the gec in call stack , invoke the outer() reads the message skips the inner function body,
and returns inner to fn and poped from call stack the memory of the outer also removed along with it, heres the actual game starts fn calls the 
inner function the message = "hello" is store in a bubble called closure , the inner has a print statement message so thats why the message is stored in the 
closure 

*/

// Challenge 8

/* 

let a = 10;

function first() {
    let b = 20;

    function second() {
        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    second();
}

first();

output : when the function second executes the call stack will look like gec, above that first(), above that second, only let c is in the local scope the 
second funtion , so here comes lexical scope , it searches in its parents local scope , got 20 , still needs a , then it searches the parent local scope 
of the first function, which is global scope , after got all the value needs the print statement starts executed  , 10, 20, 30.

*/

// Assignment 1
console.log(a);
console.log(b);

var a = 10;
let b = 20;
// output : undefined ( used var so thats the reason we got undefined), reference error for b ( still in the TDZ while the print statement executes )

// Assignment 2
//var
var hello = "hello world";
var hello = "hello Arun";

console.log(hello);

// we can redeclare the a variable using var , but we no longer using the var after ES6 arrived
// let

let hell = "heaven";
hell = "hell";

// we can't redeclare a variable using let , only reassigning

// const

const birthDate = "10 - 10 - 2006";

// cannot re-assign values in const

// Assignment 3 and 4

let global = 10;

function outer() {
  let outerNum = 20;

  function inner() {
    let innerNum = 30;
    console.log(global);
    console.log(outerNum);
    console.log(innerNum);
  }

  inner();
}

outer();

// this code staifies both the assigment 3 and 4 conditions

//Assignment 5

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let m = counter();

console.log(m());
console.log(m());
console.log(m());

// mentor challenge

function createCounter() {
  // 1. Private variable locked in the lexical scope
  let count = 0;

  // 2. Return an object containing three closure functions
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getValue: function () {
      return count;
    },
  };
}

// --- Usage ---
let counter = createCounter();

console.log(counter.getValue());

counter.increment();
counter.increment();

console.log(counter.getValue());

counter.decrement();

console.log(counter.getValue());
