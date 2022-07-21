/* Tutorial followed from https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified
   and Github https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator/blob/master/script.js
*/

class Calculator {
  constructor(currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.operation = undefined;
  }

  // append number, including dot (.)
  // Do not want to append number after computing (unlike the tutorial, there is no clear button here)
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    // if justComputed, this.currentOperand = '';
    if (this.justComputed) {
      //Do not want to append number, but start a new calculation
      this.currentOperand = number.toString();
      this.justComputed = false; //set justComputed to false so user can begin a new computation after computing a result
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  // + - * /
  chooseOperation(operation) {
    if (this.currentOperand === "") {
      return;
    }
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  // compute the result (after pressing equal button)
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) {
      return;
    }
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
    this.justComputed = true;
  }

  getDisplayNumber(number, text) {
    console.log("number: " + number + ", text: " + text);

    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
        if (integerDisplay === '') {
            return text;
        } else {
            return integerDisplay;
        }
    }
  }

  //WIP: to make updateDisplay() also display operation if possible, or maybe just continue displaying current operand (like Mac's calculator)
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand,
      this.operation
    );
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(currentOperandTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
