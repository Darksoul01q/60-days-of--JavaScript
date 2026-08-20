// challenge 1

/* 
console.log(
Math.floor(8.9)
); */

// output is 8, cuz floor will rounds down the decimal value

// challenge 2

/* 
console.log(
Math.ceil(4.1)
);
*/

// output : 5, ceil will rounds up the value always

// challenge 3

/* 
console.log(
Math.round(7.5)
);
*/

// output : 8, round will rounds down if the value is less than .5 and rounds up greater than or equal to .5

// challenge 5

/* 

let number =
Math.floor(
Math.random()*5
);

console.log(number);

*/

// it randomly generates value from 0.1 to 0.9 and i will be multiplied by 5 , eg : if it generates 0.5*5 would be 2.5

// Assignment 1

console.log(`Assignment 1`);

console.log(Math.PI);

// assignment 2

console.log(`Assignment 2`);

let random = Math.floor(Math.random() * 10) + 1;

console.log(random);

// printing random numbers from 1 to 10

// Assignment 3

console.log(`Assignment 3`);
console.log(Math.floor(8.7));
console.log(Math.ceil(8.2));
console.log(Math.round(8.5));

// Assignment 4

console.log(`Assignment 4`);

let numbers = [12, 45, 3, 99, 18];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// found the max and min num in the array

// Assignment 5

console.log(`Assignment 5`);

let num = -250;
console.log(Math.abs(num));

// abs will change the negative value into positive

// Assignment 6

console.log(`Assignment 6`);

console.log(Math.pow(5, 3));
console.log(5 ** 3);

// Assignment 7

console.log(`Assignment 7`);

let shuffle = Math.floor(Math.random() * 51) + 50;
console.log(shuffle);

// generates random num from 50 to 100

//Assignment 8
console.log(`Assignment 8`);

let marks = [45, 82, 91, 67, 55];

console.log(
  `the highest mark is : ${Math.max(...marks)} and the lowest marks is : ${Math.min(...marks)}`,
);

// Assignment 9

console.log(`Assignment 9`);

function diceRoll() {
  let dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}

for (let i = 1; i < 11; i++) {
  console.log(diceRoll());
}

// mentor challenge

console.log(`Mentor Challenge`);

let pin = Math.floor(Math.random() * 9000) + 1000;

console.log(pin);

// number game

console.log(`GuessTheNumber - Mini game`);

function guessTheNumber(guess) {
  let randomNum = Math.floor(Math.random() * 10) + 1;

  if (guess === randomNum) {
    console.log(`yes, your guess is Correct it is ${randomNum}`);
  } else
    console.log(
      `Better Luck Next Time, Your Guess is Wrong, it is ${randomNum} `,
    );
}

guessTheNumber(7);

// mentor question

/* 
console.log(Math.floor(-4.8));

console.log(Math.ceil(-4.8));

console.log(Math.round(-4.8));

*/

// i don't know the outcome , but i thing it will do exactly the same as positive numbers , tell me the reason if i were wrong
