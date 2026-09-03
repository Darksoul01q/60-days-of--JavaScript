// Mini Challenges

// Challenge 1

/* 
function greet(callback) {
  console.log("Hello");
  callback();
}

greet(() => {
  console.log("Welcome");
});

output : Hello , Welcome 
greet() calls the function along with passing a arrow function as argument for the call back,
invoked the greet function printed the hello and call back executed the arrow function then printed the welome 
the arrow function is the call back function 
*/

// Challenge 2

/* 
function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

calculate(10, 20, (value) => {
  console.log(value);
});

output : 30 , 
10 and 20 passed into a,b and the arrow function passed into the callback parameter in the calculate , sum of a,b stored in result , callback starts 
the arrow function and passed the value of result into the value parameter as a argument , so the console.log value prints 30
we didnt use settimeout so it isnt a asynschronous
*/

//Challenge 3

/* 
console.log("Start");

setTimeout(() => {
  console.log("Timer");

  console.log("Callback executed");
}, 1000);

console.log("End");

output : start , end , timer, callback executed 
1.the console.log holding start and end are sysnchronous code 
2. the settimeout is the asysnchronous operation , inside the arrow function is the call back function

*/

//challenge 4

/* 
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2");
    callback();
  }, 1000);
}

function task3() {
  console.log("Task 3");
}

task1(() => {
  task2(() => {
    task3();
  });
});

output : Task1 , Task 2, Task 3
*/

//challenge 5

/* 
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3");
    callback();
  }, 1000);
}

function step4(callback) {
  setTimeout(() => {
    console.log("Step 4");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        console.log("All completed");
      });
    });
  });
});

output : step1 , step 2, step 3, step 4 and all completed 
it is called callback hell cuz there are many call back function depends on its previous callback functions 
it would take around 4 to 5 sec to execute completly
if there was 10 dependent steps it would take 10 to 11 secs to completly execute
*/

//Assignments

//Assignment 1

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Arun", () => {
  console.log(`Welcome to javascript`);
});

//Assignment 2

function calculate(a, b, operation) {
  let result = a * b;
  operation(result);
}

calculate(10, 20, (result) => {
  console.log(`${result}`);
});

// while addition operation got the expected output : 30 , and got 200 while multiplycation

//Assignment 3

function processData(callback) {
  console.log(`Processing...`);

  setTimeout(() => {
    console.log(`processing Completed`);
    callback();
  }, 2000);
}

processData(() => {
  console.log(`Callback Executed`);
});

//Assignment 4

function login(callback) {
  setTimeout(() => {
    console.log(`Login Successful`);
    callback();
  }, 1000);
}
function getProfile(callback) {
  setTimeout(() => {
    console.log(`Profile loaded`);
    callback();
  }, 1000);
}
function getPosts() {
  setTimeout(() => {
    console.log(`Post Loaded`);
  }, 1000);
}

login(() => {
  getProfile(() => {
    getPosts();
  });
});

//Assignment 5

function registerUser(callback) {
  setTimeout(() => {
    console.log(`User registered`);
    callback();
  }, 1000);
}
function loginUser(callback) {
  setTimeout(() => {
    console.log(`User logged in`);
    callback();
  }, 1000);
}
function getProfile(callback) {
  setTimeout(() => {
    console.log(`Profile loaded`);
    callback();
  }, 1000);
}
function getCourses(callback) {
  setTimeout(() => {
    console.log(`Courses loaded`);
    callback();
  }, 1000);
}
function getProgress(callback) {
  setTimeout(() => {
    console.log(`Progress loaded`);
    callback();
  }, 1000);
}
function showDashboard() {
  setTimeout(() => {
    console.log(`Dashboard displayed`);
  }, 1000);
}

registerUser(() => {
  loginUser(() => {
    getProfile(() => {
      getCourses(() => {
        getProgress(() => {
          showDashboard();
        });
      });
    });
  });
});
