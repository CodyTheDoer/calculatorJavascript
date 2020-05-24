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

const resultsCheck = () => {
    if(resultsFlag === true){
        clearDisplayValue();
        resultsFlag = false;
    }
};

const displayValueUpdate = (value) => {
    resultsCheck();
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

const calcResults = (mode) => { 
    if(mode === "+-"){ 
        let results = parseInt(parseFloat(operate(calcArray[0], calcArray[2], calcArray[1])) * 100)*.01;
        for(i=0;i<3;i++){
            calcArray.shift();
        }        
        calcArray.unshift(results);
    };
    if(mode === "*/"){ 
        let results = parseInt(parseFloat(operate(calcArray[2], calcArray[4], calcArray[3])) * 100)*.01;
        for(i=0;i<3;i++){
            calcArray.pop();
        }
        calcArray.push(results);
        results = parseInt(parseFloat(operate(calcArray[0], calcArray[2], calcArray[1])) * 100)*.01;
        for(i=0;i<3;i++){
            calcArray.shift();
        }
        calcArray.unshift(results);
    };
};

const buttonPush = (button) => {
    const ops = "+-*/".split("");
    for(op of ops){
        if(button === op){
            if(calcArray.length === 0){//if calcArray is empty log initial values.
                calcArray.push(parseInt(parseFloat(displayValue)*100)*.01);
                calcArray.push(button);
                clearDisplayValue();
            }else if(parseInt(parseFloat(displayValue)*100)*.01 === 0){//if last button clicked was an op, reassign op.
                calcArray.pop();
                calcArray.push(button);
            }else if(button === "*" || button === "/"){//if * or / operator was seleceted with numbers queue'd to operate on.
                calcArray.push(parseInt(parseFloat(displayValue)*100)*.01);
                calcArray.push(button);
                clearDisplayValue();
            }else if(button === "+" || button === "-"){//if + or - operator was seleceted with numbers queue'd to operate on.
                calcArray.push(parseInt(parseFloat(displayValue)*100)*.01);
                calcResults("+-");
                clearDisplayValue();
                let results = parseFloat(calcArray[0]).toFixed(2);
                for(num of results){
                    if(num === "."){continue};
                    displayValueUpdate(num);
                }
                resultsFlag = true;
                calcArray.push(button);
            };
        };
    }
    if(button >= 0 && button < 10){
        displayValueUpdate(button);
    };
    if(button === "c"){
    };
    if(button === "="){
        calcArray.push(parseInt(parseFloat(displayValue)*100)*.01);
    };
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
const calcArray = [];
let resultsFlag = false;
let holdValue = 0;
let displayValueLeft = [0,0,0,0,0,0];
let displayValueRight = [0,0];
let displayValue = `${displayValueLeft.join("")}.${displayValueRight.join("")}`;