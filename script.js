const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '';
        } else if (value === '<') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (value === '=') {
            if (previousNumber !== '' && operation !== '') {
                const result = calculate(previousNumber, currentNumber, operation);
                display.value = result;
                previousNumber = result;
                currentNumber = '';
                operation = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operation = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

function calculate(num1, num2, operation) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}