
let displayValue =``; 
let firstNum = ``;
let secondNum = ``;
let operatorValue = ``;





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




    if (event.target.value === `9` && operatorValue === ``) {
        firstNum += event.target.value;
        console.log(firstNum);
    }

    if (event.target.value === `2` && operatorValue !== ``) {
        secondNum += event.target.value
        console.log(typeof(secondNum));
    }




    if (event.target.id === `add`) {
        operatorValue = `+`;
    }    



    

    if (firstNum !== `` && secondNum !== `` && operatorValue !== ``) {
        document.getElementById(`display-bottom`).innerHTML= operate(parseInt(firstNum), parseInt(secondNum), operatorValue);
        firstNum = operate(parseInt(firstNum), parseInt(secondNum), operatorValue);
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





