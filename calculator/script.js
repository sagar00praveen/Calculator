let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';

function appendValue(value) {
    currentInput += value;
    document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    firstValue = '';
    secondValue = '';
    operator = '';
    document.getElementById('display').textContent = '';
}

function setOperator(op) {
    if (firstValue === '') {
        firstValue = currentInput;
        operator = op;
        currentInput = '';
    }
}

function calculate() {
    secondValue = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
        default:
            return;
    }
    document.getElementById('display').textContent = result;
    currentInput = result.toString();
    firstValue = '';
    secondValue = '';
    operator = '';
}
