// mini challenges

//mini challenge 1

/* async function calculate() {
  return 25;
}

const result = calculate();

console.log(result); */

/* 
yes the output is promise { 25}, when the calculation funtion called and invoked it , async always returns promise object , so it returned and 
stored in the result then the result gets printed 
*/

// challenge 2

/* async function run() {
  console.log("A");

  await Promise.resolve("B");

  console.log("C");
}

console.log("D");

run();

console.log("E"); */

/* 
order of execution : D > A > E > C
D is a synchronous code executed while reading the function the run called and invoked the function 
printed A , due to awiat the async function pasued and pops from the stack and execcutes E and the function called back from the microtask , executed 
 C , B is not in the print statement 
*/

//Challenge 3

/* 
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Message");
        }, 1000);
    });
}

async function execute() {
    console.log("Start");

    const message = await getMessage();

    console.log(message);

    console.log("Finish");
}

execute();

console.log("Outside");
*/

/* 
js encounters execute() , invoked the function printed start, then reads the getmessage , invoked it promise object creted with pending state and undefined
value , 1sec timer hands to the api container, after timer end waits in the call back queue , return returns the pending state promise object to message
 the sees the await suspends the function and pops it from call stack then, outside gets executed, the call stack gets empty event loop pushes the 
 function in the call back queue to the call stack executes resolve triggered , so the async function called back into the microtask queue , casuse 
 resolve triggered and the state changes to fullfilled , call stack is empty and pushed form the microtask to call stack by event loop 
 message gets printed and finish prints  

*/

//Challenge 4

/*
function verify() {
    return Promise.reject("Verification failed");
}

async function check() {
    try {
        console.log("Checking");

        const result = await verify();

        console.log(result);
    } catch (error) {
        console.log("Caught:", error);
    }

    console.log("After try-catch");
}

check();
*/

/* 
async function called by check(); try block executed and printed checking , then verfiny function called , promise object create and updated state as 
reject and the value , due to reject triggered , try block will not get execute anymore , catch block executed after that this line will execute 
console.log("After try-catch");

*/

//Challenge 5

/* async function process() {
  try {
    const first = await Promise.resolve(10);

    console.log(first);

    const second = await Promise.reject("Something went wrong");

    console.log(second);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finished");
  }
}

process(); */

/* 
i think 10 will get printed and then reject get triggered , but have a doubt as well , if yes then catch block run and finally will also runs
*/

//Assignmnet 1
