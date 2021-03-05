
let displayValue = ``;
let firstNum = ``;
let secondNum = ``;
let operatorValue = [];

const numValues = /^\d+$/;
const oV = /^[-+*/]+$/;


const knownOperators = [`+`, `-`, `*`, `/`];

const calcBody = document.getElementById(`calculator-body`);





let performCalculation = function (event) {

    //console.log(event.target.nodeName);


    if (event.key) {
        event.target.value = ``;
    }

    if (event.target.value) {
        event.key = ``;
    }


    if(event.target.nodeName === `DIV`){
        return;
    }

    console.log(`event key: ${event.key}`);
    
    console.log(`target value: ${event.target.value}`);

    console.log(`keycode: ${event.keyCode}`);

    if ((event.target.value === `/` || event.target.value === `+` || event.target.value === `*` || event.target.value === `-` || event.target.value === `^` 
        || event.target.value == `%` || event.target.value === `back` || event.target.value === `ce`) && firstNum === ``) {
        return;
    }

    if ((event.key === `/` || event.key === `+` || event.key === `*` || event.key === `-` || event.key === `^` || event.key === `enter` 
        || event.key === `=`) && firstNum === ``) {
        return;
    }


    // assign the first value 
    if ((numValues.test(event.target.value) || event.target.value === `.`) && operatorValue.length === 0 && typeof (event.keyCode) === `undefined`) {
        if ((event.target.value === `.`) && firstNum.includes(`.`)) {
            return;
        } else {

            firstNum += (event.target.value);
            displayValue = firstNum;
            document.getElementById(`display-bottom`).innerHTML = displayValue;

            console.log((`first (click): ${firstNum}`));
        }
    } else if (((event.keyCode > 47 && event.keyCode < 58 && event.key !== `^`) || event.key === `.` ) && operatorValue.length === 0) {
        if ((event.key === `.`) && firstNum.includes(`.`)) {
            return;
        } else {


            firstNum += document.querySelector(`button[data-key="${event.keyCode}"]`).value;
            document.getElementById(`display-bottom`).innerHTML = firstNum;

            displayValue = firstNum;
            console.log((`first (key): ${firstNum}`));
        }
    }

    // assign the 2nd value
    if ((numValues.test(event.target.value) || event.target.value === `.`) && operatorValue.length !== 0 && typeof (event.keyCode) === `undefined` ) {

        if (event.target.value === `.` && secondNum.includes(`.`)) {
            return;
        } else {
            secondNum += event.target.value;

            displayValue = secondNum;
            document.getElementById(`display-bottom`).innerHTML = displayValue;
            console.log((`2nd (click): ${secondNum}`));
        }
    } else if (((event.keyCode > 47 && event.keyCode < 58 && event.key !== `^`) || event.key === `.` ) && operatorValue.length !== 0 ){
        if ((event.key === `.`) && secondNum.includes(`.`)) {
            return;
        } else {

            secondNum += document.querySelector(`button[data-key="${event.keyCode}"]`).value;
            document.getElementById(`display-bottom`).innerHTML = secondNum;

            displayValue = secondNum;
            console.log((`2nd (key): ${secondNum}`));
        }
    }



    // assign the operator

    if ((event.key === `+` || event.key === `-` || event.key === `*` || event.key === `/` || event.key === `^`)) {

        operatorValue.push(document.querySelector(`button[value="${event.key}"]`).value);

        console.log(`operator (key): ${operatorValue}`);

    } else if (event.target.value === `+` || event.target.value === `-` || event.target.value === `*` || event.target.value === `/` 
            || event.target.value === `^` || event.target.value == `%`) {


        operatorValue.push(event.target.value);
        console.log(`operator (click): ${operatorValue}`);

    }


    // BACKSPACE removes one character on given string 
    if (event.target.value === `back` || event.key === `Backspace`) {
        if (event.target.value === `back` && event.keyCode){
            
            document.getElementById(`back`).blur();

        } else if (secondNum === ``) {
            let newString = firstNum.slice(0, -1);
            firstNum = newString;
            console.log(`firstnum: ${firstNum}`);
            document.getElementById(`display-bottom`).innerHTML = firstNum;
        } else {
            let newString = secondNum.slice(0, -1);
            secondNum = newString;
            console.log(`secondnum: ${secondNum}`);

            document.getElementById(`display-bottom`).innerHTML = secondNum;

        }
    }

    //clear current entry
    if (event.target.value === `ce` || event.key === `Delete`) {
        if (secondNum === ``) {
            firstNum = ``;
            document.getElementById(`display-bottom`).innerHTML = firstNum;
        } else {
            secondNum = ``;
            document.getElementById(`display-bottom`).innerHTML = secondNum;
        }
    }

    // make a value negative or positive
    if (event.target.value === `+/-`) {
        if (secondNum === ``) {
            firstNum = firstNum * (-1);
            document.getElementById(`display-bottom`).innerHTML = firstNum;
        } else {
            secondNum = secondNum * (-1);
            document.getElementById(`display-bottom`).innerHTML = secondNum;
        }
    }


    // clear all 
    if (event.target.value === `c` || event.key === `c`) {
        document.getElementById(`display-bottom`).innerHTML = ``;
        displayValue = ``;
        firstNum = ``;
        secondNum = ``;
        operatorValue = [];
    }







    //check keypress first
    if (firstNum !== `` && secondNum !== `` && operatorValue.length !== 0 && (event.keyCode < 47 || event.keyCode > 58) && event.key !== `Backspace` && event.key !== `.`) {

        if (event.keyCode === 187 || event.keyCode === 13) {

            document.getElementById(`display-bottom`).innerHTML = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 1]);
            firstNum = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 1]).toString();
            secondNum = ``;

        } else {

            document.getElementById(`display-bottom`).innerHTML = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 2]);
            firstNum = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 2]).toString();
            secondNum = ``;

        }

        //mouse click
    } else if (firstNum !== `` && secondNum !== `` && operatorValue.length !== 0 && (!numValues.test(event.target.value)) && event.target.value !== `+/-`
        && event.target.value !== `.` && typeof (event.keyCode) === `undefined` && event.target.value !== `back`) {


        if (event.target.value === `=`) {
            document.getElementById(`display-bottom`).innerHTML = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 1]);


            firstNum = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 1]).toString();
            secondNum = ``;

        } else {

            document.getElementById(`display-bottom`).innerHTML = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 2]);
            firstNum = operate(parseFloat(firstNum), parseFloat(secondNum), operatorValue[operatorValue.length - 2]).toString();
            secondNum = ``;

        }

    }


};



function add(addFirst, addSecond) {
    let total = addFirst + addSecond;
    return Math.round((total + Number.EPSILON) * 1000) / 1000;

}


function subtract(subtractFirst, subtractSecond) {
    let total = subtractFirst - subtractSecond;
    return Math.round((total + Number.EPSILON) * 1000) / 1000;

}

function multiply(multiplyFirst, multiplySecond) {
    let total = multiplyFirst * multiplySecond;
    return Math.round((total + Number.EPSILON) * 1000) / 1000;

}

function divide(divideFirst, divideSecond) {
    let total = divideFirst / divideSecond;
    console.log(total);
    return Math.round((total + Number.EPSILON) * 1000) / 1000;

}

function exponent(expFirst, expSecond) {
    let total = Math.pow(expFirst, expSecond);
    return Math.round((total + Number.EPSILON) * 1000) / 1000;

}

function percent(percentFirst, percentSecond) {
    let total = (percentFirst * percentSecond) / 100;
    return Math.round((total + Number.EPSILON) * 1000) / 1000;
}


function operate(firstNumber, secondNumber, operator) {

    if (operator === `+`) {

        return add(firstNumber, secondNumber);

    } else if (operator === `-`) {

        return subtract(firstNumber, secondNumber);

    } else if (operator === `*`) {

        return multiply(firstNumber, secondNumber);

    } else if (operator === `/`) {

        return divide(firstNumber, secondNumber);

    } else if (operator === `^`) {

        return exponent(firstNumber, secondNumber);

    } else if (operator === `%`) {
        return percent(firstNumber, secondNumber);
    }

}

calcBody.addEventListener(`click`, performCalculation);
window.focus();
window.addEventListener(`keydown`, performCalculation);





