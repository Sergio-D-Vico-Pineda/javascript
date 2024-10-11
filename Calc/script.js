// Action buttons
const clear = document.querySelector(".clear");
const opers = document.querySelectorAll(".oper");
const equal = document.querySelector(".equal");

// Number buttons
const decimal = document.querySelector("#dot");
const numbers = document.querySelectorAll(".numbers");

// Display
const display = document.querySelector("#display");
const txtdisplay = document.querySelector("#text");

// Variables
let currentOperand = 0;
let nextOperand = 0;
let operation = undefined;
let active = false;
let result = 0;

// Dictionary
const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "×": (a, b) => a * b,
    "÷": (a, b) => a / b
}

// Functions 

function clearDisplay() {
    currentOperand = 0;
    nextOperand = 0;
    operation = undefined;
    txtdisplay.textContent = "0";
}

function printScreen(val) {
    txtdisplay.textContent += val;
}

function numberBtn() {
    printScreen(this.textContent);

    if (active) {
        nextOperand += this.textContent;
    }
    else {
        currentOperand += this.textContent;
    }
}

function operationBtn() {
    printScreen(this.textContent);
    operation = this.textContent;
    active = true;
}

function equalBtn() {
    if (operation == undefined)
        return;

    result = operations[operation](Number(currentOperand), Number(nextOperand));
    txtdisplay.textContent = result;
    currentOperand = result;
    nextOperand = 0;
    operation = undefined;
    active = false;
}

// Numbers Event listeners

clear.addEventListener("click", clearDisplay);
/* decimal.addEventListener("click", decimalBtn); */

for (const btn of numbers) {
    btn.addEventListener("click", numberBtn);
}

// Operations Event listeners
for (const btn of opers) {
    btn.addEventListener("click", operationBtn);
}
equal.addEventListener("click", equalBtn);