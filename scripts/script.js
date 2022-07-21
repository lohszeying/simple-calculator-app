/* Tutorial followed from https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified
   and Github https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator/blob/master/script.js
*/

class Calculator {
    constructor(currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperandTextElement = '';
        this.operation = undefined;
    }

    // append number, including dot (.)
    appendNumber(number) {

    }

    // + - * /
    chooseOperation(operation) {

    }

    // compute the result (after pressing equal button)
    compute() {

    }
    
    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});