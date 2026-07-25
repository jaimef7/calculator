function add (a,b) {
    return a + b;
}
function subtract (a,b){
    return a-b;
}
function multiply (a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

let displaynumber1;
let operand;
let displaynumber2;

function operate (firstnumber, secondnumber,operand) {
    switch(operand){
        case "+":
            return add(firstnumber,secondnumber)
        case "-":
            return subtract(firstnumber,secondnumber)
        case "*":
            return multiply(firstnumber,secondnumber)
        case "/":
            return divide(firstnumber,secondnumber)
            default:
                return "invalid operand try again"
    }
    
}