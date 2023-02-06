let operand, firstNum, secondNum, result;
culc();

function culc(){
    operand = getOperand();
    firstNum = getFirstNumber();
    secondNum = getSecondNumber();
    if (validData(operand, firstNum, secondNum)){
        result = calculation(firstNum, secondNum, operand);
        return showResult(firstNum, secondNum, operand, result);
    }
    else return alert('You have entered wrong data!');   
   
}
function getOperand(){
    return prompt('Please, enter an operand');
}
function getFirstNumber(){
    return prompt('Please, enter first number');
}
function getSecondNumber(){
    return prompt('Please, enter second number');
}
function validData(operand, firstNum, secondNum){
    const operands = ['+', '-', '*', '/'];
    if (!operands.includes(operand) || isNaN(firstNum) || isNaN(secondNum) || firstNum === '' || secondNum === '') return false;
    else return true;
}
function calculation(firstNum, secondNum, operand) {
    switch (operand) {
        case '+':
            return add(Number(firstNum), Number(secondNum));
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}
function add(a, b){return a + b}
function subtract(a, b){return a - b}
function multiply(a, b){return a * b}
function divide(a, b){return a / b}
function showResult (a, b, operand, result){
    alert(`${a} ${operand} ${b} = ${result}`);
}