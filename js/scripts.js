const add = (a, b) => {return a+b};
const subtract = (a, b) => {return a-b};
const multiply = (a, b) => {return a*b};
const divide = (a, b) => {return a/b}; 
const operate = (a, b, op) => {
    if(op === "add" || op === "+"){return add(a, b)};
    if(op === "subtract" || op === "-"){return subtract(a, b)};
    if(op === "multiply" || op === "*"){return multiply(a, b)};
    if(op === "divide" || op === "/"){return divide(a, b)};
};
const updateDisplayJoin = (displayValue) => {
    return document.getElementById("resultsDisplay").innerHTML = displayValue;
};
const buttonPush = (button) => {
    let logic = "0123456789+-*/c=".split("");
};

window.onload = () => {
    document.getElementById("buttonOperatorAdd").addEventListener("click", () => {buttonPush("+")});
    document.getElementById("buttonOperatorSubtract").addEventListener("click", () => {buttonPush("-")});
    document.getElementById("buttonOperatorMultiply").addEventListener("click", () => {buttonPush("*")});
    document.getElementById("buttonOperatorDivide").addEventListener("click", () => {buttonPush("/")});
    document.getElementById("buttonOperatorClear").addEventListener("click", () => {buttonPush("c")});
    document.getElementById("buttonOperatorEquals").addEventListener("click", () => {buttonPush("=")});
    document.getElementById("buttonDigitZero").addEventListener("click", () => {buttonPush(0)});
    document.getElementById("buttonDigitOne").addEventListener("click", () => {buttonPush(1)});
    document.getElementById("buttonDigitTwo").addEventListener("click", () => {buttonPush(2)});
    document.getElementById("buttonDigitThree").addEventListener("click", () => {buttonPush(3)});
    document.getElementById("buttonDigitFour").addEventListener("click", () => {buttonPush(4)});
    document.getElementById("buttonDigitFive").addEventListener("click", () => {buttonPush(5)});
    document.getElementById("buttonDigitSix").addEventListener("click", () => {buttonPush(6)});
    document.getElementById("buttonDigitSeven").addEventListener("click", () => {buttonPush(7)});
    document.getElementById("buttonDigitEight").addEventListener("click", () => {buttonPush(8)});
    document.getElementById("buttonDigitNine").addEventListener("click", () => {buttonPush(9)});
    updateDisplayJoin(displayValue);
}

const displayValueTempLeft = [0,0,0,0,0,0];
const displayValueTempRight = [0,0];
const displayValue = displayValueTempLeft.join("") + "." + displayValueTempRight.join("");

const holdValue = [];


