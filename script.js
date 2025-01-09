class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.buttons = document.querySelectorAll('.buttons button');
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = '';
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleClick(button.textContent);
            });
        });
    }

    handleClick(value) {
        switch (value) {
            case 'C':
                this.clear();
                break;
            case '<':
                this.backspace();
                break;
            case '=':
                this.calculate();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setOperation(value);
                break;
            default:
                this.appendNumber(value);
        }
    }

    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = '';
        this.display.value = '';
    }

    backspace() {
        this.currentNumber = this.currentNumber.slice(0, -1);
        this.display.value = this.currentNumber;
    }

    calculate() {
        if (this.previousNumber !== '' && this.operation !== '') {
            const result = this.calculateResult();
            this.display.value = result;
            this.previousNumber = result;
            this.currentNumber = '';
            this.operation = '';
        }
    }

    setOperation(value) {
        this.operation = value;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    appendNumber(value) {
        this.currentNumber += value;
        this.display.value = this.currentNumber;
    }

    calculateResult() {
        const num1 = parseFloat(this.previousNumber);
        const num2 = parseFloat(this.currentNumber);

        switch (this.operation) {
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
}

new Calculator();