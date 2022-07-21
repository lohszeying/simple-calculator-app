//Tutorial followed from https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified

class Calculator {
    constructor(currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    appendNumber(number) {

    }

    // + - * /
    chooseOperation(operation) {

    }

    // =
    compute() {

    }
    
    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');