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

//challenge 2

/* 
const result = new Promise((resolve, reject) => {

    const marks = 72;

    if (marks >= 50) {
        resolve("Passed");
    } else {
        reject("Failed");
    }

});

result
    .then((message) => {
        console.log("A:", message);
    })
    .catch((error) => {
        console.log("B:", error);
    });

output : the if condition is true , so resolve would triggered , so then block will push into the microtask queue 
then , when the call stack is empty the event loop pusehed the then block into the call stack and executed 

*/

// challenge 3

/* 
Promise.resolve(4)
    .then((n) => n * 3)
    .then((n) => n - 2)
    .then((n) => n * n)
    .then((n) => console.log(n));

    output : lets consider each then as a step, in step 1 : 4 *3 would be 12,
    step 2 : 12 - 2 = 10,
    step 3 : 10 * 10 = 100,
    step 4 : 100 is printed 
*/

// challenge 4

/* 

Promise.reject("Network error")
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Cleanup");
    });

    output : reject triggered here, so catch block pushed into the microtask queue and pushed back into the call stack back when it is empty
    and after catch block executed the finally block will pushed into the microtask queue and pushed back to call stack when it is empty and executed 
*/

//Challenge 5

/* 
function getData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Data received");
        }, 1000);

    });

}

getData()
    .then((data) => {
        console.log("Got:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


    cause : inside the promise block we didnt have , resolve and reject block , resolve trigger the then block , reject will trigger the catch 
    block , without them  those will not get executed 

*/

// Assignment 1

function checkTemperature(temp) {
  return new Promise((resolve, reject) => {
    if (temp <= 30) {
      resolve("Temperature is Normal");
    } else {
      reject("Temperature is high");
    }
  });
}

checkTemperature(29)
  .then((temp) => {
    console.log(`${temp}`);
  })
  .catch((temp) => {
    console.log(`${temp}`);
  });

//Assignment 2

function checkStock(quantity) {
  return new Promise((resolve, reject) => {
    if (quantity > 0) {
      resolve(`Stocks available : ${quantity}`);
    } else if (quantity === 0) {
      reject(`Stocks Unavailable : ${quantity}`);
    }
  });
}

checkStock(23)
  .then((stocks) => {
    console.log(stocks);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`Stock check completed`);
  });

//Assignment 3

Promise.resolve(8)
  .then((n) => {
    return n + 12;
  })
  .then((n) => {
    return n * 3;
  })
  .then((n) => {
    return n - 10;
  })
  .then((n) => {
    console.log(n);
  });

//Assignment 4

function fetchUser() {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 9) + 1;

    setTimeout(() => {
      if (random < 5) {
        resolve(`User data received`);
      } else if (random >= 5) {
        reject(`Server error`);
      }
    }, 2000);
  });
}

fetchUser()
  .then((Success) => {
    console.log(Success);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`Request completed`);
  });

//Assignment 5
