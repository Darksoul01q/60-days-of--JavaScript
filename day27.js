// mini challenges

// Challenge 1

/* 

console.log("A");
console.log("B");
console.log("C");

output : A , B ,C 
this is synchronous , cuz b abd c have to wait until a executes

*/

//Challenge 2

/* 

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");

output : A, C ,B , 
it is asynchronous , a executes , then settimeout pops from the call stack went to the web browser , then js engine  executes c while the b is in the
background after 1 s in the browser , it waits in  the callback queue and event loop waiting for the callstack to b be completely empty to push the B in the call stack 
to execute it 

*/

// Challenge 3

/* 
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

output : Start , End , Timeout 
even if the time is 0 in the settimeout api, it still pop from the call stack and went to web and wait in the callback queue and the 
event loop waits the callstack to be completely emptyto push it into the callstack

*/

//Challenge 4

/* 
function first() {
  console.log("First");

  setTimeout(() => {
    console.log("Timer");
  }, 0);

  console.log("First End");
}

first();

console.log("Global End");

explanation : first the js engine creates a memory for the global execution context , then starts execute the code 
reads the function and skips the function body it already defined that in the memory creation , then sees the function call , the first 
function add in the call stack above the gec , creates a memory for the funtion execution context , prints first, settimeout went to the web api 
container and added in the callback queue , while the first end get printed, the first function pops out from the call stack , still the call stack has gec so 
not empty so the event loop cant push the function in the callback function , global end gets printed, now the gec poped from the call stack its empty 
now thw event loop pushes the funtion in the call back queue timer gets printed

*/

//Challenge 5

/* 
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

setTimeout(() => {
  console.log("C");
}, 1000);

console.log("D");

explanation : A prints first , the js engine encountered the 2 settimeout functions went to the web api container waits for the timer to end , print
statement containing c has 1sec so the timer ends before the B , so  C went into the call back queue first then B joins the queue , 
meanwhile the D gets printed by js engine , now the call stack is empty the event loop pushes the C to call stack , then pushes B from callback queue
to the callstack after C executed and B executed finally , the order > A > D > C > B

*/

//Assignment 1

console.log(`Start`);

setTimeout(() => {
  console.log(`Hello after 2 seconds`);
}, 2000);

console.log(`End`);

//Assignment 2

function showMMessage() {
  console.log(`Message Started`);

  setTimeout(() => {
    console.log(`Message Completed`);
  }, 3000);
}

showMMessage();

// Assignment 3

console.log(`Start`);

setTimeout(() => {
  console.log(`One`);
}, 1000);

setTimeout(() => {
  console.log(`Two`);
}, 2000);

setTimeout(() => {
  console.log(`Three`);
}, 3000);

console.log(`End`);

//Assignment 4

function taskOne() {
  console.log("Task One");

  setTimeout(() => {
    console.log("Task One Completed");
  }, 2000);
}

function taskTwo() {
  console.log("Task Two");
}

taskOne();
taskTwo();

console.log("All tasks started");

/* 
gec memory created then exection starts global execution context added in the call stack , when js engine 
encountered the taskone it invokes that function , so a separate memory created for the fec and the fec is added above the 
gec in the callstack , task one gets printed, then it encountered the settimeout it ent to the web api container in the browser
wait there for the timer ends and move to the call back queue in the background, mean while in the js engine the task one poped from the call stack 
js engine encounter tasktwo and invoke it and prints task two then poped from the call stack, now in the gec it prints the all the tasks are started
and gec poped from the call stack , now call stack is completely empty so event loop pushes the function in the call back queue to the 
call stack and execute 
*/

//Assignment 5

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

function test() {
  console.log("3");

  setTimeout(() => {
    console.log("4");
  }, 0);

  console.log("5");
}

test();

console.log("6");

/* 
1 gets printed, then 2 went to the web api container and instantly move to the callback queue,  then it encounter test prints 3  , then 4 went to api container as well and move to the 
call back queue added after 2, and prints 5 , it poped from the call stack and prints 6 in the gec , now the call 
stack is empty , 2 from the call back queue is pushed to the call stack by event loop and gets executed , same goes for 4
execution order : 1,3,5,6,2,4
*/
