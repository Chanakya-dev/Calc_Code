const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operator = '';
let result = '';

// Function to handle button clicks
function handleButtonClick(value) {
  if (value === 'C') {
    clearCalculator();
  } else if (value === '<') {
    backspace();
  } else if (value === '=') {
    calculateResult();
  } else if (['+', '-', '*', '/'].includes(value)) {
    setOperator(value);
  } else {
    appendNumber(value);
  }
}

// Function to clear the calculator
function clearCalculator() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  result = '';
  display.value = '';
}

// Function to handle backspace
function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  display.value = currentNumber;
}

// Function to calculate the result
function calculateResult() {
  if (previousNumber !== '' && operator !== '' && currentNumber !== '') {
    result = eval(`${previousNumber} ${operator} ${currentNumber}`);
    display.value = result;
    previousNumber = result;
    currentNumber = '';
  }
}

// Function to set the operator
function setOperator(value) {
  operator = value;
  previousNumber = currentNumber;
  currentNumber = '';
}

// Function to append a number to the current number
function appendNumber(value) {
  currentNumber += value;
  display.value = currentNumber;
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    handleButtonClick(value);
  });
});

// Add event listener for keyboard input
document.addEventListener('keydown', event => {
  const key = event.key;

  if (key === 'Backspace') {
    backspace();
  } else if (key === 'Enter') {
    calculateResult();
  } 
  else if (['+', '-', '*', '/'].includes(key)) {
    setOperator(key);
  }else if(key==='Escape'){ 
  clearCalculator();
  }
  
  else if (key >= '0' && key <= '9' || key === '.') {
    appendNumber(key);
  }
});