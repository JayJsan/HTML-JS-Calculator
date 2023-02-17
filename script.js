const buttons = document.getElementsByTagName("button");
const calculatorDisplay = document.getElementsByClassName("display");

let currentInput = "";
let output = 0;
let listOfNumbers = [];
let listOfOperators = [];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        let buttonPressed = buttons[i].innerText;
        //console.log("button:" + buttons[i].innerText);
        switch (buttonPressed) {
            case ("+"):
                listOfOperators.push("+");
                AddInputToList();
                //RenderDisplay();
                console.log(listOfOperators);
                break;
            case ("-"):
                listOfOperators.push("-");
                AddInputToList();
                //RenderDisplay();
                break;
            case ("×"):
                listOfOperators.push("×");
                AddInputToList();
                //RenderDisplay();
                break;
            case ("÷"):
                listOfOperators.push("÷");
                AddInputToList();
                //RenderDisplay();
                break;
            case ("."):
                currentInput += buttonPressed;
                //RenderDisplay();
                console.log(currentInput);
                break;
            case ("AC"):
                console.log("clear");
                ClearCalcaulator();
                //RenderDisplay();
                break;
            case ("="):
                AddInputToList();
                console.log("CALCULATE-----------------------------");
                CalculateResult();
                //ClearCalcaulator();
                //RenderResult();
                console.log(output);
                break;
            default:
                currentInput += buttonPressed;
                console.log(currentInput);
                console.log(listOfNumbers);
        }

    });
}

ClearCalcaulator = () => {
    currentInput = [];
    listOfNumbers = [];
    listOfOperators = [];
    output = 0;
}

AddInputToList = () => {
    listOfNumbers.push(+currentInput);
    console.log("added number to list");
    console.log(listOfNumbers);
    currentInput = "";
}

RenderDisplay = () => {
    let index = 0;
    while ((index < listOfNumbers.length - 1) || (index < listOfOperators.length - 1)) {
        // number
        // operator
        // number
        // operator
        // show equation
        // when press equals
        // render only answer
    }
    //calculatorDisplay.innerText 
}

RenderResult = () => {
    calculatorDisplay.innerText = output;
}

CalculateResult = () => {
    let index = 0
    output = 0;

    // if length of numberslist is less than operators then return invalid
    if (listOfOperators.length > listOfNumbers) {
        output = "Invalid";
        return;
    }

    while (listOfNumbers.length != 0 || listOfOperators.length != 0) {
        console.log("start: " + output);
        output += listOfNumbers.shift() * 1;
        console.log("start 2: " + output);
        console.log(listOfNumbers);
        console.log(listOfOperators);
        switch (listOfOperators[index]) {
            // Implement bedmas later -- first must get actual functionality minimum working
            case ("+"):
                output += listOfNumbers.shift();
                listOfOperators.shift();
                break;
            case ("-"):
                output -= listOfNumbers.shift();
                listOfOperators.shift();
                break;
            case ("×"):
                output *= listOfNumbers.shift();
                listOfOperators.shift();
                break;
            case ("÷"):
                output = output / listOfNumbers.shift();
                listOfOperators.shift();
                break;
        }
        index++;
        if (listOfNumbers <= 0) break;
    }
    console.log("end: " + output);
    console.log(listOfNumbers);
    console.log(listOfOperators);
    // have element 0 of list of numbers first
    // 
}



//console.log("input: " + input)
// +
// &times;
// ÷