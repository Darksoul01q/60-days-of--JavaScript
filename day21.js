let firstNumber = "";
let operator = "";
let secondNumber = "";

let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");
let numbers = document.querySelectorAll(".number");
let operatorBtn = document.querySelectorAll(".operator");

// numbers

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += button.textContent;
      display.textContent = firstNumber;
    } else {
      secondNumber += button.textContent;
      display.textContent = secondNumber;
    }
  });
});

// operators

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // If we already have a full equation typed out, calculate it first!
    if (firstNumber !== "" && secondNumber !== "") {
      let result = calculate();
      display.textContent = result;
      firstNumber = result.toString();
      secondNumber = "";
    }
    if (firstNumber !== "") {
      operator = button.textContent;
    }
  });
});

//calculation

function calculate() {
  let a = Number(firstNumber);
  let b = Number(secondNumber);

  if (operator === "+") {
    return a + b;
  }

  if (operator === "-") {
    return a - b;
  }

  if (operator === "*") {
    return a * b;
  }

  if (operator === "/") {
    if (b === 0) {
      return "Cannot divide by zero";
    }

    return a / b;
  }
}

// equal

equals.addEventListener("click", () => {
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    let result = calculate();

    display.textContent = result;

    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
  }
});

// clear

clear.addEventListener("click", () => {
  firstNumber = "";
  operator = "";
  secondNumber = "";

  display.textContent = "0";
});

//decimal

decimal.addEventListener("click", () => {
  if (operator === "") {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
      display.textContent = firstNumber;
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
      display.textContent = secondNumber;
    }
  }
});
