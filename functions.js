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

let displaynumber1 = "";
let operand = ""
let displaynumber2 = "";

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

const container = document.getElementById("keys")
const display = document.getElementById("display")

function updatedisplay(value){
        display.textContent =value.toString()

    }

    function cleardisplay(){
        display.textContent = "";
        displaynumber1.textContent = "";
        displaynumber2.textContent = "";

    }

container.addEventListener('click', (event) => {
    let value =  event.target.textContent;

    if (value === '+' || value === '-' || value === '*' || value === '/'){
        operand = value; 
    }else if(value == '='){
        const result = operate(Number(displaynumber1), Number(displaynumber2), operand);
        updatedisplay(result);

        displaynumber1 = result.toString();
        displaynumber2 = "";
        operand = "";
    }else if (value == 'C'){
        cleardisplay()
    }else{
        if(operand !==""){
            displaynumber2 += value;
            updatedisplay(displaynumber2)
        }else{
            displaynumber1 += value
            updatedisplay(displaynumber1)
        }
    }
})

