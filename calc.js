let buttonContainer = document.getElementById("calcContainer")
let toAdd = document.createDocumentFragment();
let displayField = document.getElementById("displayField")

let displayValue = [];
let calcMemory = [];
let buttonThing = document.getElementById("returnThing");
let accumulator = calcMemory[0];

for (let i=0; i<20; i++) {
    let madeSquare = document.createElement('div')
    madeSquare.setAttribute("id", "calcButton" + i);
    madeSquare.setAttribute("class", "buttonCalc")
    toAdd.appendChild(madeSquare);
    buttonContainer.appendChild(toAdd)
}

let numberOne = document.getElementById("calcButton4");
numberOne.addEventListener("click", function() {
displayValue.push(1);

displayField.textContent += "1";
});

let numberTwo = document.getElementById("calcButton5");
numberTwo.addEventListener("click", function() {
    displayValue.push(2);

    displayField.textContent += "2";
});

let numberThree = document.getElementById("calcButton6");
numberThree.addEventListener("click", function() {
    displayValue.push(3);

    displayField.textContent += "3";
});

let numberFour = document.getElementById("calcButton8");
numberFour.addEventListener("click", function() {
    displayValue.push(4);

    displayField.textContent += "4";
});

let numberFive = document.getElementById("calcButton9");
numberFive.addEventListener("click", function() {
    displayValue.push(5);

    displayField.textContent += "5";
});

let numberSix = document.getElementById("calcButton10");
numberSix.addEventListener("click", function() {
    displayValue.push(6);

    displayField.textContent += "6";
});

let numberSeven = document.getElementById("calcButton12");
numberSeven.addEventListener("click", function() {
    displayValue.push(7);

    displayField.textContent += "7";
});

let numberEight = document.getElementById("calcButton13");
numberEight.addEventListener("click", function() {
    displayValue.push(8);

    displayField.textContent += "8";
});

let numberNine = document.getElementById("calcButton14");
numberNine.addEventListener("click", function() {
    displayValue.push(9);

    displayField.textContent += "9";
});

let numberZero = document.getElementById("calcButton16");
numberZero.addEventListener("click", function() {
    displayValue.push(0);

    displayField.textContent += "0";
});

let decimalPoint = document.getElementById("calcButton17");
decimalPoint.addEventListener("click", function() {
    displayValue.push(".");

    displayField.textContent += (".");
});

let backButton = document.getElementById("calcButton7");
backButton.addEventListener("click", function(){
displayValue.splice(-1);
calcMemory.splice(-1);

let deleteVar = displayField.textContent;
deleteDisplay = deleteVar.slice(0, -1);

displayField.textContent = "";

displayField.textContent += (deleteDisplay);
});

let clearButton = document.getElementById("calcButton18");
clearButton.addEventListener("click", function() {
displayValue.length=0
calcMemory.length=0

displayField.textContent = "";
});

let additionOperator = document.getElementById("calcButton0");
additionOperator.addEventListener("click", function() {
    let joinNum = Number(displayValue.join(''));
    calcMemory.push(joinNum)
    displayValue.length = 0;
    calcMemory.push("+");

    displayField.textContent += "+";
    console.log(calcMemory)
});

let subtractionOperator = document.getElementById("calcButton1");
subtractionOperator.addEventListener("click", function() {
    let joinNum = Number(displayValue.join(''));
    calcMemory.push(joinNum)
    displayValue.length = 0;
    calcMemory.push("-");

    displayField.textContent += "-";
});

let multiplyOperator = document.getElementById("calcButton2");
multiplyOperator.addEventListener("click", function() {
    let joinNum = Number(displayValue.join(''));
    calcMemory.push(joinNum)
    displayValue.length = 0;
    calcMemory.push("*");

    displayField.textContent += "*";
});

let divisionOperator = document.getElementById("calcButton3");
divisionOperator.addEventListener("click", function() {
    let joinNum = Number(displayValue.join(''));
    calcMemory.push(joinNum)
    displayValue.length = 0;
    calcMemory.push("/");

    displayField.textContent += "/";
    console.log(displayValue)
});

let equalOperator = document.getElementById("calcButton19");
equalOperator.addEventListener("click", function() {
    let joinNum = Number(displayValue.join(''));
    calcMemory.push(joinNum)
    displayValue.length = 0;

    displayField.textContent = "";

    let doThing = calcMemory.join('');
    let eqSolve = eval(doThing)

    displayField.textContent = eqSolve.toFixed(4);
})
