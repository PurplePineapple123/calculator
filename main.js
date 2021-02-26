
let displayValue =``; 



//button event listeners


const calcBody = document.getElementById(`calculator-body`);

calcBody.addEventListener(`click`, (event) =>{
    const isButton = event.target.nodeName === `BUTTON`;
    if (!isButton) {
        return;
    }
    displayValue += `${event.target.innerHTML}`;
    document.getElementById(`display-bottom`).innerHTML= displayValue;
    
    console.log(event.target.id);

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





// document.getElementById(`clear-all`). addEventListener(`click`, function() {

// });

// document.getElementById(`clear-current`). addEventListener(`click`, function() {

// });

// document.getElementById(`percent`). addEventListener(`click`, function() {

// });

// document.getElementById(`plus-minus`). addEventListener(`click`, function() {

// });

// document.getElementById(`exponent`). addEventListener(`click`, function() {

// });

// document.getElementById(`divide`). addEventListener(`click`, function() {

// });

// document.getElementById(`1`). addEventListener(`click`, function() {

// });

// document.getElementById(`2`). addEventListener(`click`, function() {

// });

// document.getElementById(`3`). addEventListener(`click`, function() {

// });

// document.getElementById(`4`). addEventListener(`click`, function() {

// });

// document.getElementById(`5`). addEventListener(`click`, function() {

// });

// document.getElementById(`6`). addEventListener(`click`, function() {

// });

// document.getElementById(`7`). addEventListener(`click`, function() {

// });

// document.getElementById(`8`). addEventListener(`click`, function() {

// });

// document.getElementById(`9`). addEventListener(`click`, function() {

// });

// document.getElementById(`remove`). addEventListener(`click`, function() {

// });

// document.getElementById(`multiply`). addEventListener(`click`, function() {

// });

// document.getElementById(`subtract`). addEventListener(`click`, function() {

// });

// document.getElementById(`add`). addEventListener(`click`, function() {

// });

// document.getElementById(`zero`). addEventListener(`click`, function() {

// });

// document.getElementById(`dot`). addEventListener(`click`, function() {

// });

// document.getElementById(`equal`). addEventListener(`click`, function() {

// });


