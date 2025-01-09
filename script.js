// Get the display element
const display = document.getElementById('display');

// Define the calculator functions
function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Add event listeners to the buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        switch (id) {
            case 'clear':
                clearDisplay();
                break;
            case 'backspace':
                backspace();
                break;
            case 'equals':
                calculate();
                break;
            default:
                display.value += button.textContent;
        }
    });
});

// Add keyboard support
document.addEventListener('keydown', event => {
    switch (event.key) {
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
        case '+':
        case '-':
        case '*':
        case '/':
            display.value += event.key;
            break;
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            backspace();
            break;
    }
});
