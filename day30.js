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

function number() {
  return new Promise((resolve) => {
    resolve(50);
  });
}

async function getNumber() {
  let num = await number();
  console.log(`Received Number : ${num}`);
}

getNumber();

//Assignment 2

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve(`Access Granted`);
    } else {
      reject(`Access Denied`);
    }
  });
}

async function check() {
  try {
    console.log(`Verfiying age...`);

    let ageCheck = await checkAge(19);
    console.log(ageCheck);
  } catch (error) {
    console.log(error);
  }
}

check();

//Assignment 3

function downloadFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 9) + 1;

      if (random > 5) {
        resolve(`Download Successful`);
      } else if (random <= 5) {
        reject(`Download failed`);
      }
    }, 2000);
  });
}

async function download() {
  try {
    console.log(`Download started`);
    const dawn = await downloadFile();
    console.log(dawn);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Download process finished`);
  }
}

download();

//Assignment 4

function fetchStudent(student) {
  return new Promise((resolve) => {
    resolve(student);
  });
}

function fetchMarks() {
  return new Promise((resolve) => {
    resolve(84);
  });
}

function calculateGrade() {
  return new Promise((resolve) => {
    resolve(`A`);
  });
}

async function markSheet() {
  try {
    console.log(`Checking result`);

    let student = await fetchStudent("Arun");
    console.log(`Name : ${student}`);

    let marks = await fetchMarks();
    console.log(`Mark : ${marks}`);

    let grade = await calculateGrade();
    console.log(`Grade : ${grade}`);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Result processing completed`);
  }
}

markSheet();

//Assignment 5

function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === `arun` && password === 123) {
        resolve(`Login successful`);
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

function fetchUserProfile() {
  return new Promise((resolve) => {
    resolve({
      name: "Arun",
      role: "Developer",
    });
  });
}

function fetchUserPermissions() {
  return new Promise((resolve) => {
    resolve(["read", "write"]);
  });
}

async function login() {
  try {
    let auth = await authenticateUser(`arun`, 123);
    console.log(auth);
    let profile = await fetchUserProfile();
    console.log(`Name : ${profile.name}`);
    console.log(`Role : ${profile.role}`);
    let permission = await fetchUserPermissions();
    console.log(permission);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Authentication process completed`);
  }
}

login();
