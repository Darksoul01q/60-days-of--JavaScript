//challenges

//challenge 1

/* 
console.log("Start");

Promise.resolve("Ready").then((message) => {
    console.log(message);
});

console.log("Finish");

output : start, finish, message
you may seem that there isnt a settimeout then why the message string printed after the finish , cuz when the resolve triggered , 
the then block pushed into the microtask queue, and pushed into the call stack after the call stack is empty 
*/
