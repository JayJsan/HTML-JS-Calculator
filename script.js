const buttons = document.getElementsByTagName("button");

let currentInput = "";
let listOfNumbers = [];
let output = 0;
let orderOfOperations = [];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        let buttonPressed = buttons[i].innerText;
        //console.log("button:" + buttons[i].innerText);
        switch (buttons[i].innerText) {
            case ("+"):
                console.log("+!!!");

                orderOfOperations.push("+");
                listOfNumbers.push(+currentInput);
                currentInput = "";

                console.log(orderOfOperations);
                break;
            case ("-"):
                console.log("-!!!");

                orderOfOperations.push("-");
                listOfNumbers.push(+currentInput);
                currentInput = "";

                break;
            case ("×"):
                console.log("x!!!");

                orderOfOperations.push("×");
                listOfNumbers.push(+currentInput);
                currentInput = "";
                
                break;
            case ("÷"):
                console.log("÷!!!");
                orderOfOperations.push("÷");
                listOfNumbers.push(+currentInput);
                currentInput = "";

                break;
            case ("."):
                console.log("number pressed " + buttonPressed);

                currentInput += buttonPressed;
                listOfNumbers.push(+currentInput);
                currentInput = "";

                console.log(currentInput);
                break;
            case ("AC"):
                console.log("clear");
                ClearCalcaulator();
                break;
            case ("="):
                console.log("CALCULATE");
                orderOfOperations.forEach((operator) => {

                });

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
    orderOfOperations = [];
}

AddInputToList = () => {
    listOfNumbers.push(+currentInput);
    currentInput = "";
}

//console.log("input: " + input)
// +
// &times;
// ÷