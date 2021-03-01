
let displayValue = ``;
let firstNum = ``;
let secondNum = ``;
let operatorValue = [];

const numValues = /^\d+$/;


const calcBody = document.getElementById(`calculator-body`);

calcBody.addEventListener(`click`, (event) => {
    const isButton = event.target.nodeName === `BUTTON`;
    if (!isButton) {
        return;
    }

    console.log(operatorValue);


    // assign the first value 
    if ((numValues.test(event.target.value) || event.target.value === `.`) && operatorValue.length === 0) {
        if (event.target.value === `.` && firstNum.includes(`.`)) {
            return;
        } else {

            firstNum += event.target.value;
            displayValue = firstNum;
            document.getElementById(`display-bottom`).innerHTML = displayValue;

            console.log((firstNum));
        }
    }


    // 2nd value
    if ((numValues.test(event.target.value) || event.target.value === `.`) && operatorValue.length !== 0) {

        if (event.target.value === `.` && secondNum.includes(`.`)) {
            return;
        } else {
            secondNum += event.target.value;

            displayValue = secondNum;
            document.getElementById(`display-bottom`).innerHTML = displayValue;
            console.log((`2nd: ${secondNum}`));
        }
    }




    // assign the operator
    if (!numValues.test(event.target.value) && (event.target.value !== `=`) && event.target.value !== `+/-` && event.target.value !== `.`) {

        operatorValue.push(event.target.value);
        console.log((operatorValue));

    }


    // removes one character on given string 
    if (event.target.value === `back`) {
        if (secondNum === ``) {
            let newString = firstNum.slice(0, -1);
            firstNum = newString;
            document.getElementById(`display-bottom`).innerHTML = firstNum;
        } else {
            let newString = secondNum.slice(0, -1);
            secondNum = newString;
            document.getElementById(`display-bottom`).innerHTML = secondNum;
        }
    }

    //clear current entry
    if (event.target.value === `ce`) {
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
    if (event.target.value === `c`) {
        document.getElementById(`display-bottom`).innerHTML = ``;
        displayValue = ``;
        firstNum = ``;
        secondNum = ``;
        operatorValue = [];
    }



    if (firstNum !== `` && secondNum !== `` && operatorValue.length !== 0 && (!numValues.test(event.target.value)) && event.target.value !== `+/-` && event.target.value !== `.`) {

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

});



function add(addFirst, addSecond) {
    let total = addFirst + addSecond;
   return Math.round((total + Number.EPSILON) * 1000) / 1000;
     
}


function subtract(subtractFirst, subtractSecond) {
    let total = subtractFirst - subtractSecond;
    return Math.round((total + Number.EPSILON)  * 1000) / 1000;

}

function multiply(multiplyFirst, multiplySecond) {
    let total = multiplyFirst * multiplySecond;
    return Math.round((total + Number.EPSILON)  * 1000) / 1000;

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







