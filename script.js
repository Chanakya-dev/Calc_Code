const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let calculation = '';
let lastOperator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    switch (value) {
      case 'C':
        clearCalculation();
        break;
      case '&lt;':
        backspace();
        break;
      case '=':
        evaluateCalculation();
        break;
      default:
        if (isOperator(value)) {
          handleOperator(value);
        } else {
          handleNumber(value);
        }
    }
  });
});

document.addEventListener('keydown', event => {
  const key = event.key;
  switch (key) {
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
    case '.':
      handleNumber(key);
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      handleOperator(key);
      break;
    case 'Enter':
      evaluateCalculation();
      break;
    case 'Backspace':
      backspace();
      break;
    case 'c':
    case 'C':
      clearCalculation();
      break;
  }
});

function clearCalculation() {
  calculation = '';
  display.value = '';
}

function backspace() {
  calculation = calculation.slice(0, -1);
  display.value = calculation;
}

function evaluateCalculation() {
  try {
    const result = eval(calculation);
    display.value = result;
    calculation = result.toString();
  } catch (error) {
    display.value = 'Error';
    calculation = '';
  }
}

function handleOperator(operator) {
  if (lastOperator) {
    calculation += operator;
  } else {
    calculation += operator;
    lastOperator = operator;
  }
  display.value = calculation;
}

function handleNumber(number) {
  calculation += number;
  display.value = calculation;
}

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}