
let displayValue =``; 
let firstNum = ``;
let secondNum = ``;
let operatorValue = [];

const numValues = /^\d+$/;



//button event listeners


const calcBody = document.getElementById(`calculator-body`);

calcBody.addEventListener(`click`, (event) =>{
    const isButton = event.target.nodeName === `BUTTON`;
    if (!isButton) {
        return;
    }

       console.log(operatorValue);
    if (numValues.test(event.target.value) && operatorValue.length === 0) {
        firstNum += event.target.value;
        
        displayValue = firstNum;
        document.getElementById(`display-bottom`).innerHTML = displayValue;

        console.log((firstNum));
    }



    if (!numValues.test(event.target.value) && (event.target.value !== `=`)) {
        
        operatorValue.push(event.target.value);
        console.log((operatorValue));

    }    

    if (numValues.test(event.target.value) && operatorValue.length !== 0) {
        secondNum += event.target.value;

        displayValue = secondNum;
        document.getElementById(`display-bottom`).innerHTML = displayValue;
        console.log((`2nd: ${secondNum}`));
    }


    //PROBLEM: When chaining operations together, only the new operator value is passed. Need to store old value and pass that.(line 68)

    if (firstNum !== `` && secondNum !== `` && operatorValue.length !== 0 && (!numValues.test(event.target.value))) {
       if (event.target.value === `=`){

        document.getElementById(`display-bottom`).innerHTML= operate(parseInt(firstNum), parseInt(secondNum), operatorValue[operatorValue.length-1]);
        
        console.log(operatorValue[operatorValue.length-1]);
        
        firstNum = operate(parseInt(firstNum), parseInt(secondNum), operatorValue[operatorValue.length-1]).toString();
        console.log((firstNum));
        secondNum = ``;

       } else {

        document.getElementById(`display-bottom`).innerHTML= operate(parseInt(firstNum), parseInt(secondNum), operatorValue[operatorValue.length-2]);
        
        console.log(operatorValue[operatorValue.length-1]);
        
        firstNum = operate(parseInt(firstNum), parseInt(secondNum), operatorValue[operatorValue.length-2]).toString();
        console.log((firstNum));
        secondNum = ``;

       }
        
    }








});



function add(addFirst, addSecond) {
    return addFirst + addSecond;
} 


function subtract(subtractFirst, subtractSecond) {
    return subtractFirst - subtractSecond;
} 



function multiply(multiplyFirst, multiplySecond) {
    return multiplyFirst * multiplySecond;
} 



function divide(divideFirst, divideSecond) {
    return divideFirst / divideSecond;
} 

function exponent(expFirst, expSecond) {
    return Math.pow(expFirst, expSecond);
} 


function operate(firstNumber, secondNumber, operator) {
    if (operator === `+`) {
        return add(firstNumber, secondNumber);
    }

    //check to see if spaces have any affect when comparing
    if (operator === `-`) {
        return subtract(firstNumber, secondNumber);
    }

    if (operator === `*`) {
        return multiply(firstNumber, secondNumber);
    }

    if (operator === `/`) {
        return divide(firstNumber, secondNumber);
    }


    if (operator === `^`) {
        return exponent(firstNumber, secondNumber);
    }
}

console.log(operate(3, 8, `/`));





