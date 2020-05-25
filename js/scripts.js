const operate = (a, b, op) => {
    if(op === "+"){return a+b};
    if(op === "-"){return a-b};
    if(op === "*"){return a*b};
    if(op === "/"){return a/b};
};

const updateDisplay = (value) => {
    return document.getElementById("resultsDisplay").innerHTML = value;
};

const clearDisplayValue = () => {
    displayValueLeft = [0,0,0,0,0,0,0,0,0,0];
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
        displayValueRight.unshift(displayValueLeft[10]);
        displayValueRight.pop();
        displayValueLeft.pop();
        updateDisplay("<br>ERROR");
        setTimeout(()=>{updateDisplay(`${displayValueLeft.join("")}.${displayValueRight.join("")}`); }, 2*1000);
    }
    return displayValue = `${displayValueLeft.join("")}.${displayValueRight.join("")}`;
};

const calcResults = (array) => {
    array.push(parseInt(parseFloat(displayValue)*100)*.01);
    const updateOpIndex = () => {
        let indexMultiply = array.indexOf("*")
        let indexDivide = array.indexOf("/");
        (indexDivide > indexMultiply)? higherOpIndex = indexDivide: higherOpIndex = indexMultiply;    
    };
    let higherOpIndex = -1;
    updateOpIndex();
    while(higherOpIndex > 0){
        let sum = operate(array[higherOpIndex-1],array[higherOpIndex+1],array[higherOpIndex]);
        array.splice(higherOpIndex-1, 3, sum); 
        updateOpIndex();
    };
    while(array.length > 1){
        let sum = operate(array[0], array[2], array[1]);
        array.splice(0, 3, sum); 
    }
    resultsArray = Array.from(calcArray);
    const tempArray = [];
    calcArray = Array.from(tempArray);
    return parseFloat(resultsArray[0]).toFixed(2);
}

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
            }else{
                calcArray.push(parseInt(parseFloat(displayValue)*100)*.01);
                calcArray.push(button);
                clearDisplayValue();
            };
        };
    }
    if(button >= 0 && button < 10){
        displayValueUpdate(button);
    };
    if(button === "c"){
        clearDisplayValue();
        const tempArray = [];
        calcArray = Array.from(tempArray);
        resultsArray = Array.from(tempArray);
    };
    if(button === "="){
        const tempArray = [];
        if(calcArray.length > 1){
            calcResults(calcArray);
        };
        if(resultsArray.length > 0){
            let results = parseFloat(resultsArray[0]).toFixed(2);
            clearDisplayValue();
            for(num of results){
                if(num === "."){continue};
                displayValueUpdate(num);
            }
            resultsArray = Array.from(tempArray);
            resultsFlag = true;    
        }
    };
};

let calcArray = [];
let resultsArray = [];
let resultsFlag = false;
let displayValueLeft = [0,0,0,0,0,0,0,0,0,0];
let displayValueRight = [0,0];

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
    updateDisplay("0000000000.00");
}