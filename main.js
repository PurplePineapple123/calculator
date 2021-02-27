
let displayValue =``; 
let firstNum = ``;
let secondNum = ``;
let operatorValue = ``;

const numValues = /^\d+$/;



//button event listeners


const calcBody = document.getElementById(`calculator-body`);

calcBody.addEventListener(`click`, (event) =>{
    const isButton = event.target.nodeName === `BUTTON`;
    if (!isButton) {
        return;
    }



    // if (event.target.id === /[0-9]/g) {
    //     console.log(event.target.id);

    // }


    //WATCH OUT FOR STRINGS VS INTS
    //Figure out way to check "if number 0-9"
    //Figure out how to set operator value back to `` without messing with first If statement

    //if (event.target.id === `9` && operatorValue === ``) {
       
    if (numValues.test(event.target.id) && operatorValue === ``) {
        firstNum += event.target.value;
       

        console.log(typeof(firstNum));
    }



    if (event.target.id === `add`) {
        operatorValue = `+`;
        console.log(typeof(operatorValue));

    }    

    if (numValues.test(event.target.id) && operatorValue !== ``) {
        secondNum += event.target.value
        console.log(typeof(secondNum));
    }



    if (firstNum !== `` && secondNum !== `` && operatorValue !== `` && event.target.id === `add`) {
        document.getElementById(`display-bottom`).innerHTML= operate(parseInt(firstNum), parseInt(secondNum), operatorValue);
        firstNum = operate(parseInt(firstNum), parseInt(secondNum), operatorValue).toString();
        console.log(typeof(firstNum));
        secondNum = ``;
    }


    // document.getElementById(`display-bottom`).innerHTML= firstNum;
    // firstNum += event.target.value;






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


}

console.log(operate(3, 8, `/`));





