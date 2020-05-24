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

const updateDisplay = (value) => {
    return document.getElementById("resultsDisplay").innerHTML = value;
};

const clearDisplayValue = () => {
    displayValueLeft = [0,0,0,0,0,0];
    displayValueRight = [0,0];
    displayValue = `${displayValueLeft.join("")}.${displayValueRight.join("")}`;
    updateDisplay(displayValue)
    return displayValue;
};

const displayValueUpdate = (value) => {
    displayValueRight.push(value);
    displayValueLeft.push(displayValueRight[0]);
    displayValueRight.shift();
    if(displayValueLeft[0] === 0){
        displayValueLeft.shift();
        updateDisplay(`${displayValueLeft.join("")}.${displayValueRight.join("")}`);
    }else{
        displayValueRight.unshift(displayValueLeft[6]);
        displayValueRight.pop();
        displayValueLeft.pop();
        updateDisplay("MAX");
        setTimeout(()=>{updateDisplay(`${displayValueLeft.join("")}.${displayValueRight.join("")}`); }, 2*1000);
    }
    return displayValue = `${displayValueLeft.join("")}.${displayValueRight.join("")}`;
};

const setHold = (value) => {
    holdValue = parseFloat(value);
    return holdValue;
};

const buttonPush = (button) => {
    const ops = "+-*/".split("");
    for(op of ops){
        if(button === op){
            if(holdValue === 0){
                setHold(displayValue);
                clearDisplayValue();
                return lastClicked = button;
            }else{
                let result = operate(holdValue, parseFloat(displayValue), op);
                setHold(result);
                clearDisplayValue();
                return lastClicked = button;
            };
        };
    }
    if(button === "c"){
        setHold(0);
        clearDisplayValue();
        return updateDisplay(displayValue);
    };
    if(button === "="){
        if(lastClicked === "/" && parseFloat(displayValue) === 0){return updateDisplay("ERROR")};
        let results = parseInt(operate(holdValue, parseFloat(displayValue), lastClicked)*100).toString().split("");
        clearDisplayValue();
        for(num of results){
            displayValueUpdate(num);
        }
        holdValue = 0;
    }
    if(button >= 0 && button < 10){displayValueUpdate(button)};
};

const dvc = () => {
    console.log(`value = ${displayValue}`);
    console.log(`Lvalue = ${displayValueLeft}`);
    console.log(`Rvalue = ${displayValueRight}`);
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
    updateDisplay(displayValue);
}

let lastClicked = "";
let holdValue = 0;
let displayValueLeft = [0,0,0,0,0,0];
let displayValueRight = [0,0];
let displayValue = `${displayValueLeft.join("")}.${displayValueRight.join("")}`;