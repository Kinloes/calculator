//Change it so that the operands appear in a separate div on the left side of the visualInput display
let inputCheck = document.getElementById("visualInput");
let operandCheck = document.getElementById("operandVisual")
let userInput = Number(inputCheck.textContent)
let opClass = document.getElementsByClassName("operand");
function operatorFunc() {
    if (operandCheck.textContent === ""){
        console.log("Nuttin works")
        userInput = Number(inputCheck.textContent);
    }
    if (operandCheck.textContent === "+"){
        console.log("PLUS WORKS")
        operandCheck.textContent = "";
        userInput = userInput + Number(inputCheck.textContent);
    }
    if (operandCheck.textContent === "-"){
        console.log("MINUS WORKS")
        operandCheck.textContent = "";
        userInput = userInput - Number(inputCheck.textContent);
    }
    if (operandCheck.textContent === "*"){
        console.log("multiply works")
        operandCheck.textContent = "";
        userInput = userInput * Number(inputCheck.textContent)
    }
    if (operandCheck.textContent === "/"){
        console.log("divide works")
        operandCheck.textContent = "";
    }
    if (operandCheck.textContent === "="){
        console.log("equal works");
        operandCheck.textContent = "";
    }
    console.log (userInput);
    inputCheck.textContent = ""
  }
//Button events for displaying number inputs
document.getElementById("numZero").onclick = function(){
    console.log("0");
    let addInput = document.createTextNode("0");
    inputCheck.appendChild(addInput);
}
document.getElementById("numOne").onclick = function(){
    console.log("1");
    let addInput = document.createTextNode("1");
    inputCheck.appendChild(addInput);
}
document.getElementById("numTwo").onclick = function(){
    console.log("2");
    let addInput = document.createTextNode("2");
    inputCheck.appendChild(addInput);
}
document.getElementById("numThree").onclick = function(){
    console.log("3");
    let addInput = document.createTextNode("3");
    inputCheck.appendChild(addInput);
}
document.getElementById("numFour").onclick = function(){
    console.log("4");
    let addInput = document.createTextNode("4");
    inputCheck.appendChild(addInput);
}
document.getElementById("numFive").onclick = function(){
    console.log("5");
    let addInput = document.createTextNode("5");
    inputCheck.appendChild(addInput);
}
document.getElementById("numSix").onclick = function(){
    console.log("6");
    let addInput = document.createTextNode("6");
    inputCheck.appendChild(addInput);
}
document.getElementById("numSeven").onclick = function(){
    console.log("7");
    let addInput = document.createTextNode("7");
    inputCheck.appendChild(addInput);
}
document.getElementById("numEight").onclick = function(){
    console.log("8");
    let addInput = document.createTextNode("8");
    inputCheck.appendChild(addInput);
}
document.getElementById("numNine").onclick = function(){
    console.log("9");
    let addInput = document.createTextNode("9");
    inputCheck.appendChild(addInput);
}

//Button events for displaying non-number inputs 
document.getElementById("equal").onclick = function(){
    console.log("=");
    operatorFunc();
    addInput = document.createTextNode("=");
    operandCheck.appendChild(addInput);
    addInput = document.createTextNode(userInput);
    inputCheck.appendChild(addInput);
    console.log(userInput);
    userInput = 0;
}
document.getElementById("clear").onclick = function(){
    console.log("clear");
    inputCheck.textContent = "";
    operandCheck.textContent = ""
}
document.getElementById("delete").onclick = function(){
    console.log("delete");
    let del = inputCheck.textContent;
    delTru = del.slice(0,-1);
    console.log(delTru)
    inputCheck.textContent = delTru
}
document.getElementById("add").onclick = function(){
    console.log("+");
    operatorFunc();
    addInput = document.createTextNode("+");
    operandCheck.appendChild(addInput);
}
document.getElementById("minus").onclick = function(){
    console.log("-");
    operatorFunc();
    addInput = document.createTextNode("-");
    operandCheck.appendChild(addInput);
}
document.getElementById("multiply").onclick = function(){
    console.log("*");
    operatorFunc();
    let addInput = document.createTextNode("*");
    operandCheck.appendChild(addInput);
}
document.getElementById("divide").onclick = function(){
    console.log("/");
    operatorFunc();
    let addInput = document.createTextNode("/");
    operandCheck.appendChild(addInput);
}