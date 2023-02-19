const buttons = document.getElementsByTagName("button");
const calculatorDisplay = document.getElementById("display-text");

let currentInput = "";
let output;
let listOfNumbers = [];
let listOfOperators = [];

// for every single button
// check for what type of button it is
// assign respective button functionality 

for (let i = 0; i < buttons.length; i++) {
    let buttonPressed = buttons[i].innerText;
    console.log("button:" + buttonPressed);
    switch (buttonPressed) {
        case ("+"):
            buttons[i].addEventListener("click", function(){ 
                listOfOperators.push("+");
                AddInputToList();
                RenderDisplay(buttonPressed);
                console.log(listOfOperators);
            })
            break;
        case ("-"):
            buttons[i].addEventListener("click", function(){ 
            listOfOperators.push("-");
            AddInputToList();
            RenderDisplay(buttonPressed);
            })
            break;
        case ("×"):
            buttons[i].addEventListener("click", function(){ 
            listOfOperators.push("×");
            AddInputToList();
            RenderDisplay(buttonPressed);
            })
            break;
        case ("÷"):
            buttons[i].addEventListener("click", function(){ 
            listOfOperators.push("÷");
            AddInputToList();
            RenderDisplay(buttonPressed);
            })
            break;
        case ("."):
            buttons[i].addEventListener("click", function(){ 
            currentInput += buttonPressed;
            RenderDisplay(buttonPressed);
            console.log(currentInput);
            })
            break;
        case ("AC"):
            buttons[i].addEventListener("click", function(){ 
            console.log("clear");
            ClearCalcaulator();
            //RenderDisplay();
            })
            break;
        case ("="):
            buttons[i].addEventListener("click", function(){ 
            AddInputToList();
            console.log("CALCULATE-----------------------------");
            CalculateResult();
            RenderResult();
            console.log(output);
            })
            break;
        default:
            buttons[i].addEventListener("click", function(){ 
            currentInput += buttonPressed;
            RenderDisplay(buttonPressed);
            console.log(currentInput);
            console.log(listOfNumbers);
            })
            break;
    }
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

    while (listOfOperators.length != 0) {
        // B E D M A S
        while (listOfOperators.includes("÷")) {
            CalculateAndRemoveFromArray("÷");
        }

        while (listOfOperators.includes("×")) {
            CalculateAndRemoveFromArray("×");
        }
        
        while (listOfOperators.includes("+")) {
            CalculateAndRemoveFromArray("+");
        }

        while (listOfOperators.includes("-")) {
            CalculateAndRemoveFromArray("-");
        }
    }
    output = listOfNumbers[0];
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

CalculateAndRemoveFromArray = (operator) => {
    let index = null;
    let result = null;
    // take index of that element
    switch (operator) {
        case ("+"):
            index = listOfOperators.indexOf("+");
            break;
        case ("-"):
            index = listOfOperators.indexOf("-");
            break;
        case ("×"):
            index = listOfOperators.indexOf("×");
            break;
        case ("÷"):
            index = listOfOperators.indexOf("÷");
            break;
        default:
            console.log("Calculating Result Function Error, Operator not valid");
            break;
    }

    if (index === -1) {
        output = "Math Error";
        return;
    } 

    // use same index to find the first number to calculate with
    const firstNumber = listOfNumbers[index];
    // index + 1 to find the second number
    const secondNumber = listOfNumbers[index + 1];
    // calculate result

    switch (operator) {
        case ("+"):
            result = AddTwoNumbers(firstNumber, secondNumber);
            break;
        case ("-"):
            result = SubtractTwoNumbers(firstNumber, secondNumber);
            break;
        case ("×"):
            result = MultiplyTwoNumbers(firstNumber, secondNumber);
            break;
        case ("÷"):
            result = DivideTwoNumbers(firstNumber, secondNumber);
            break;
        default:
            console.log("Calculating Result Function Error, Operator not valid");
            break;
    }
    
    // replace original first number at index with result
    listOfNumbers[index] = result;
    // remove original second number from listofnumbers array
    listOfNumbers.splice(index + 1, 1);
    // remove operator from listofoperators array
    listOfOperators.splice(index, 1);
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