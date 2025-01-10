const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentValue = '';

// Function to handle button clicks
function handleButtonClick(value) {
  switch (value) {
    case 'C':
      currentValue = '';
      display.value = '';
      break;
    case '←':
      currentValue = currentValue.slice(0, -1);
      display.value = currentValue;
      break;
    case '=':
      try {
        const result = eval(currentValue);
        currentValue = result.toString();
        display.value = currentValue;
      } catch (error) {
        display.value = 'Error';
      }
      break;
    default:
      currentValue += value;
      display.value = currentValue;
  }
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtonClick(button.textContent);
  });
});

// Add event listener for keyboard input
document.addEventListener('keydown', event => {
  const key = event.key;
  if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
    currentValue += key;
    display.value = currentValue;
  } else if (key === 'Enter' || key === '=') {
    try {
      const result = eval(currentValue);
      currentValue = result.toString();
      display.value = currentValue;
    } catch (error) {
      display.value = 'Error';
    }
  } else if (key === 'Backspace') {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
  } else if (key === 'Escape') {
    currentValue = '';
    display.value = '';
  }
});