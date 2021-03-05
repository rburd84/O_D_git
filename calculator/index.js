const numbers = document.querySelectorAll('.numbers')
const screen = document.querySelector('.screen')
let displayValue = '';
let expression = '';
let opera = '';

let num = numbers.forEach(num => {
  num.addEventListener('click', function(e) {
    displayValue += parseInt(e.currentTarget.textContent);
    display();
    // screen.textContent += e.currentTarget.textContent
    // console.log(oper)
    // return num
  })
})

// let operator1 = expression;
// console.log(`Operator1 ${operator1}`)
// let operator2 = 0;
// console.log(opera)

const operands = document.querySelectorAll('.operation')
operands.forEach(oper => {
  oper.addEventListener('click', function(e) {
    if (false) {

    }
    // console.log(`Oper: ${operation}`)
    expression += operation
    // console.log(e.currentTarget.textContent)
    opera = e.currentTarget.textContent;
    // console.log(opera)
    expression += e.currentTarget.textContent
    expression = expression.replace('=', '')
    operator1 = parseInt(expression.match(/\d+/));
    operator2 = parseInt(expression.match(/\d+$/));
    // result = add(operator1, operator2)
    operation = ``;
    // screen.textContent = result;
    return result
  })
})

function expressions() {
  
}

    console.log(opera)



function operate(num1, num2, operation) {
  if (operation === "+") {
    add(num1, num2)
  }
}

function display() {
  screen.textContent = operation;
}

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};


function add(a, b){
  return a + b
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b
}