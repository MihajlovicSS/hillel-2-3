let operand, firstNum, secondNum, result;
const operands = ['+', '-', '*', '/'];
culc();

function culc(){
    operand = getOperand();
    if (!operands.includes(operand)) {
        return alert("Sorry, you could not enter a correct operand. Script is finished!");
    }
    firstNum = getFirstNumber();
    if (isNaN(firstNum) || firstNum === '') {
        return alert("Sorry, you could not enter a correct number. Script is finished!");
    }
    secondNum = getSecondNumber();
    if (isNaN(secondNum) || secondNum === '') {
        return alert("Sorry, you could not enter a correct number. Script is finished!");
    }
    result = calculation(firstNum, secondNum, operand);
    return showResult(firstNum, secondNum, operand, result);
}
function getOperand(){
    let operand;
    for(i = 0; i < 3; i++){
        operand = prompt('Please, enter an operand');
        if(operands.includes(operand)) {
            break;
        }
        else {
            alert(`Incorrect operand! Try again. You have ${2 - i} attempts!`);
        }
    }
    return operand;
};
function getFirstNumber(){
    let number;
    for(i = 0; i < 3; i++){
        number = prompt('Please, enter first number');
        if(isNaN(number) || number === ''){
            alert(`Incorrect number! Try again. You have ${2 - i} attempts!`);
        }
        else {
            break;
        }
    }
    return number;
};
function getSecondNumber(){
    let number;
    for(i = 0; i < 3; i++){
        number = prompt('Please, enter second number');
        if(isNaN(number) || number === ''){
            alert(`Incorrect number! Try again. You have ${2 - i} attempts!`);
        }
        else {
            break;
        }
    }
    return number;
};

function calculation(firstNum, secondNum, operand) {
    switch (operand) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

function add(a, b){return Number(a) + Number(b)}
function subtract(a, b){return a - b}
function multiply(a, b){return a * b}
function divide(a, b){return a / b}
function showResult (a, b, operand, result){
    alert(`${a} ${operand} ${b} = ${result}`);
}
