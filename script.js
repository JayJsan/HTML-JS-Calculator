const buttons = document.getElementsByTagName("button");
const calculatorDisplay = document.getElementById("display-text");

let currentInput = "";
let output;
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
                RenderDisplay(buttonPressed);
                console.log(listOfOperators);
                break;
            case ("-"):
                listOfOperators.push("-");
                AddInputToList();
                RenderDisplay(buttonPressed);
                break;
            case ("×"):
                listOfOperators.push("×");
                AddInputToList();
                RenderDisplay(buttonPressed);
                break;
            case ("÷"):
                listOfOperators.push("÷");
                AddInputToList();
                RenderDisplay(buttonPressed);
                break;
            case ("."):
                currentInput += buttonPressed;
                RenderDisplay(buttonPressed);
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
                RenderResult();
                console.log(output);
                break;
            default:
                currentInput += buttonPressed;
                RenderDisplay(buttonPressed);
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
    RenderResult();
}

AddInputToList = () => {
    listOfNumbers.push(+currentInput);
    console.log("added number to list");
    console.log(listOfNumbers);
    currentInput = "";
}

RenderDisplay = (text) => {
    if (calculatorDisplay.innerText !== "0") {
        calculatorDisplay.textContent += text;
        return;
    }

    calculatorDisplay.textContent = text;
}

RenderResult = () => {
    calculatorDisplay.innerText = "" + output;
}

CalculateResult = () => {
    output = 0;

    // if length of numberslist is less than operators then return invalid
    if (listOfOperators.length > listOfNumbers) {
        output = "Invalid";
        return;
    }

    while (listOfNumbers.length != 0 || listOfOperators.length != 0) {
        // look for multiply and division first in operators list
        // use array.find(isMultiplication)
        // array.find(isDivide)
        // if true, output = listOfNumbers(indexFound) x or / listofnumbers(indexFound + 1)
        // array.splice(indexFound, 1)
        // listOfNumbers.


        console.log("start: " + output);
        output += listOfNumbers.shift() * 1;
        console.log("start 2: " + output);
        console.log(listOfNumbers);
        console.log(listOfOperators);
        switch (listOfOperators[0]) {
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
        if (listOfNumbers <= 0) break;
    }
    console.log("end: " + output);
    console.log(listOfNumbers);
    console.log(listOfOperators);
    // have element 0 of list of numbers first
    // 
}

AddTwoNumbers = (a, b) => {
    return a + b;
}

SubtractTwoNumbers = (a, b) => {
    return a - b;
}

MultiplyTwoNumbers = (a, b) => {
    return a * b;
}

DivideTwoNumbers = (a, b) => {
    return a / b;
}

// TEST CASES AREA -------------------------------------------------------------------------------------------------------

RunTests = () => {
    console.log("Running Tests!");
    AddTwoNumbersTest();
    SubtractTwoNumbersTest();
    MultiplyTwoNumbersTest();
    DivideTwoNumbersTest();
    console.log("Tests completed!");
}


AddTwoNumbersTest = () => {
    console.log("Running AddTwoNumbersTest!");
    HelperTestClickButton("1");
    HelperTestClickButton("+");
    HelperTestClickButton("2");
    HelperTestClickButton("=");
    console.log("Expected: 3!");
    console.log("Actual: " + output);
}

SubtractTwoNumbersTest = () => {
    console.log("Running SubtractTwoNumbersTest!");
    HelperTestClickButton("3");
    HelperTestClickButton("-");
    HelperTestClickButton("2");
    HelperTestClickButton("=");
    console.log("Expected: 1!");
    console.log("Actual: " + output);
}

MultiplyTwoNumbersTest = () => {
    console.log("Running MultiplyTwoNumbersTest!");
    HelperTestClickButton("3");
    HelperTestClickButton("×");
    HelperTestClickButton("2");
    HelperTestClickButton("=");
    console.log("Expected: 6!");
    console.log("Actual: " + output);
}

DivideTwoNumbersTest = () => {
    console.log("Running DivideTwoNumbersTest!");
    HelperTestClickButton("6");
    HelperTestClickButton("÷");
    HelperTestClickButton("2");
    HelperTestClickButton("=");
    console.log("Expected: 3!");
    console.log("Actual: " + output);
}

BedmasTest = () => {
    console.log("Running BedmasTest!");
    HelperTestClickButton("2");
    HelperTestClickButton("+");
    HelperTestClickButton("3");
    HelperTestClickButton("×");
    HelperTestClickButton("4");
    HelperTestClickButton("-");
    HelperTestClickButton("2");
    HelperTestClickButton("÷");
    HelperTestClickButton("2");
    HelperTestClickButton("=");
    console.log("Expected: 13!");
    console.log("Actual: " + output);
}

HelperTestClickButton = (desiredButton) => {
        for (let i = 0; i < buttons.length; i++) {
            // Simulate desired button click 
            if (buttons[i].innerText === desiredButton) {
                buttons[i].click();
        }
    }
    console.log("Button Test Click!");
}