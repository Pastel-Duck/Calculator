const add = (firstOperand, secondOperand) => {return firstOperand + secondOperand};
const subtract = (firstOperand, secondOperand) => {return firstOperand - secondOperand};
const multiply = (firstOperand, secondOperand) => {return firstOperand * secondOperand};
const divide = (firstOperand, secondOperand) => {return firstOperand / secondOperand};

const operate = (operator, firstOperand, secondOperand) => {
    switch(operator) {
        case "+":
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "*":
            return multiply(firstOperand, secondOperand);
        case "/":
            return divide(firstOperand, secondOperand);
    }
};

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.classList.contains("number")) {
            if(operator === "") {
                firstOperand += button.textContent;
                display.textContent = firstOperand;
            } else {
                secondOperand += button.textContent;
                display.textContent = secondOperand;
            }
        } else if(button.classList.contains("operator")) {
            if(firstOperand === "") {
                return;
            }
            if(secondOperand !== "") {
                result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand));
                firstOperand = result;
                secondOperand = "";
                operator = button.textContent;
                display.textContent = result;
            } else {
                operator = button.textContent;
            }
        } else if(button.classList.contains("equal")) {
            if(firstOperand === "" || secondOperand === "") {
                return;
            }
            result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand));
            firstOperand = result;
            secondOperand = "";
            operator = "";
            display.textContent = result;
        } else if(button.classList.contains("clear")) {
            firstOperand = "";
            secondOperand = "";
            operator = "";
            result = "";
            display.textContent = "";
        } else if(button.classList.contains("decimal")) {
            if(operator === "") {
                if(!firstOperand.includes(".")) {
                    firstOperand += ".";
                    display.textContent = firstOperand;
                }
            } else {
                if(!secondOperand.includes(".")) {
                    secondOperand += ".";
                    display.textContent = secondOperand;
                }
            }
        }
    })
});