//Challenges

//Challenge 1

/* 
"use strict";

age = 20;

console.log(age);
*/

// if we run this it will show a reference error , because the age variable isnt declared and we used strict mode as well

// challenge 2

/* 
try{

console.log("Hello");

}
catch(error){

console.log("Error");

}
*/

// output : hello will be print , try block will try to execute the code it contains , if it fails to execute the code then the catch error block will execute
// it eill show what error it is
// we use try... catch to execute risky code or program

// challenge 3

/* 
try{

console.log(a);

}
catch(error){

console.log("Caught");

}

*/

// output : is caught will be printed , cuz a variable is not declared so it will not be executed in try block
// so the catch block will be executed and will print caught

// challenge 4

/* 
try{

throw new Error("Wrong Password");

}
catch(error){

console.log(error.message);

}
*/

// i think it will print error : Wrong password , but i am not sure about that as well

// challenge 5

/* 
try{

console.log("Start");

}
finally{

console.log("End");

}

*/

// output will be start end , both block will be executed and finally block will be execute even if an error occur in try block

//Assignment 1

console.log(`Assignment 1`);

("use strict");

let a = 10;

console.log(a);

// Assignment 2

console.log(`Assignment 2`);

try {
  console.log(age < 18);
} catch (error) {
  console.log("Something went wrong");
}

//Assignment 3

console.log(`Assignment 3`);

try {
  console.log(mark < 50);
} catch (error) {
  console.log(error.message);
}

//Assignment 4

console.log(`Assignment 4`);

function divide(a, b) {
  if (b == 0) {
    throw new Error("Zero Cannot be divided");
  } else {
    return a / b;
  }
}

console.log(divide(1, 1));

//Assignment 5

console.log(`Assignment 5`);

try {
  function checkAge(age) {
    if (age < 18) {
      throw new Error("NOt Eligible");
    } else {
      return "Eligible";
    }
  }
} catch (error) {
  console.log(error.message);
}

console.log(checkAge(18));

//Assignment 6

console.log(`Assignment 6`);

function passwordChecker(password) {
  if (password.length < 8) {
    throw new Error("Weak Password");
  } else {
    return "Strong Password";
  }
}

console.log(passwordChecker("arun1234"));

//Assignment 7

console.log(`Assignment 7`);

try {
  function login(username, password) {
    if (username === "") {
      throw new Error("username required");
    } else if (password === "") {
      throw new Error("password required");
    } else {
      console.log("Login successful");
    }
  }
} catch (error) {
  console.log(error.message);
}

login("arun", "arun1234");

//tell me is this you wanted ?

//Assignment 8

console.log(`Assignment 8`);

try {
  function calculator(a, b, operator) {
    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "/") {
      if (b === 0) {
        throw new Error("Zero cannot be divide");
      } else {
        return a / b;
      }
    } else if (operator === "*") {
      return a * b;
    } else {
      throw new Error("Invalid operator");
    }
  }
} catch (error) {
  error.message;
}

console.log(calculator(2, 7, "*"));

//created a claculator logic , used try...catch and custom errors as well

//Assignment 9

console.log("Assignment 9");

function squareRoot(number) {
  if (number < 0) {
    throw new Error(" Negative numbers are not allowed");
  } else {
    return Math.round(Math.sqrt(number));
  }
}

console.log(squareRoot(5));

// a custom error will show if we try to square a negative number

// Assignment 10

console.log("Assignment 10");

try {
  function bankWithdraw(balance, amount) {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    } else if (amount > balance) {
      throw new Error("Insufficient Balance");
    } else {
      balance = balance - amount;
      console.log(`Withdrawal successful \nRemaining Balance:${balance}`);
    }
  }
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Thank you for using our bank");
}

console.log(bankWithdraw(10000, 1000));

// for the mini project , one of the assignment is to built a calculator so i am gonna skip it

// mentor question
/* 
the condition is to check wether the age variable is less than 18 or not , if less than 18 i will throw a error, it is 15 so the error will show 
up for sure , if a error occur than the eligible will not get print , buy the print statement inside the finally block will be execute 
cuz under any circumstances the program inside the finally block will be executed 
*/
