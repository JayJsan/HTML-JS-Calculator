const buttons = document.getElementsByTagName("button");

let currentInput = "";
let output = 0;
let listOfNumbers = [];
let listOfOperators = [];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        let buttonPressed = buttons[i].innerText;
        //console.log("button:" + buttons[i].innerText);
        switch (buttons[i].innerText) {
            case ("+"):
                console.log("+!!!");

                listOfOperators.push("+");
                AddInputToList();
                RenderDisplay();
                console.log(listOfOperators);
                break;
            case ("-"):
                console.log("-!!!");

                listOfOperators.push("-");
                AddInputToList();
                RenderDisplay();
                break;
            case ("×"):
                console.log("x!!!");

                listOfOperators.push("×");
                AddInputToList();
                RenderDisplay();
                break;
            case ("÷"):
                console.log("÷!!!");
                listOfOperators.push("÷");
                AddInputToList();
                RenderDisplay();
                break;
            case ("."):
                console.log("number pressed " + buttonPressed);
                currentInput += buttonPressed;
                RenderDisplay();
                console.log(currentInput);
                break;
            case ("AC"):
                console.log("clear");
                ClearCalcaulator();
                RenderDisplay();
                break;
            case ("="):
                console.log("CALCULATE");
                CalculateResult();
                ClearCalcaulator();
                RenderResult();
                console.log(currentInput);
                break;
            default:
                console.log("number pressed " + buttonPressed);
                currentInput += buttonPressed;
                console.log(currentInput);
        }

    });
}

ClearCalcaulator = () => {
    currentInput = [];
    listOfNumbers = [];
    listOfOperators = [];
}

AddInputToList = () => {
    listOfNumbers.push(+currentInput);
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

}

CalculateResult = () => {
    // if length of numberslist is less than operators then return invalid
    // have element 0 of list of numbers first
    // 
}


//console.log("input: " + input)
// +
// &times;
// ÷