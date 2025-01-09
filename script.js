class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.buttons = document.querySelectorAll('.buttons button');
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = '';
        this.init();
        this.keydown();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleClick(button.textContent);
            });
        });
    }

    keydown() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.handleClick(e.key);
                    break;
                case '.':
                    this.handleClick('.');
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    this.handleClick(e.key);
                    break;
                case '=':
                case 'Enter':
                    this.calculate();
                    break;
                case 'Backspace':
                    this.backspace();
                    break;
                case 'Escape':
                    this.clear();
                    break;
            }
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
            const result = eval(this.previousNumber + this.operation + this.currentNumber);
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
}

new Calculator();