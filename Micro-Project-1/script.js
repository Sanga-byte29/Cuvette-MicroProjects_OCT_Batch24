let displayValue = '0';

function updateDisplay(){
    document.getElementById('display').innerText = displayValue;
}

function appendNumber(number){
    if (displayValue === '0'){
        displayValue = number.toString();
    } else{
        displayValue += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator){
    if (!['+','-','*','/'].includes(displayValue.slice(-1))){
        displayValue += operator;
    }
    updateDisplay();
}

function deleteNumber() {
    displayValue = displayValue.slice(0 , -1) || '0';
    updateDisplay();
}

function resetDisplay(){
    displayValue = '0';
    updateDisplay();
}

function calculateResult(){
    try{
        displayValue = eval(displayValue.replace('x' , '*')).toString();
    }
    catch{
        displayValue = 'Error';
    }
    updateDisplay()
}