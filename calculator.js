//Change it so that the operands appear in a separate div on the left side of the visualInput display
let inputCheck = document.getElementById("visualInput");
let operatorCheck = document.getElementById("operandVisual");
let userInput = Number(inputCheck.textContent);
let equalOpSelect = document.getElementsByClassName("operator");
let equalNumSelect = document.getElementsByClassName("number");
function operatorFunc() {
    if (operatorCheck.textContent === ""){
        userInput = Number(inputCheck.textContent);
    }
    if (operatorCheck.textContent === "+"){
        operatorCheck.textContent = "";
        userInput = userInput + Number(inputCheck.textContent);
    }
    if (operatorCheck.textContent === "-"){
        operatorCheck.textContent = "";
        userInput = userInput - Number(inputCheck.textContent);
    }
    if (operatorCheck.textContent === "*"){
        operatorCheck.textContent = "";
        if (inputCheck.textContent !== ""){
            userInput = userInput * Number(inputCheck.textContent)
        }
        else{
            console.log("ERROR")
        }
    }
    if (operatorCheck.textContent === "/"){
        operatorCheck.textContent = "";
        if (inputCheck.textContent !== ""){
            userInput = userInput / Number(inputCheck.textContent)
        }
        else{
            console.log("ERROR");
        }
    }
    if (operatorCheck.textContent === "="){
        operatorCheck.textContent = "";
        //IMPORTANT NOTE - Need to make equal reset everything on a number press and continue the formula on a operand press (equal currently resets the userInput value)
    }
    inputCheck.textContent = ""
  }
//Button events for number inputs
document.getElementById("numZero").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("0");
    inputCheck.appendChild(addInput);
}
document.getElementById("numOne").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("1");
    inputCheck.appendChild(addInput);
}
document.getElementById("numTwo").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("2");
    inputCheck.appendChild(addInput);
}
document.getElementById("numThree").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("3");
    inputCheck.appendChild(addInput);
}
document.getElementById("numFour").onclick = function(){
    if (operatorCheck.textContent === "="){
    }
    let addInput = document.createTextNode("4");
    inputCheck.appendChild(addInput);
}
document.getElementById("numFive").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("5");
    inputCheck.appendChild(addInput);
}
document.getElementById("numSix").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("6");
    inputCheck.appendChild(addInput);
}
document.getElementById("numSeven").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("7");
    inputCheck.appendChild(addInput);
}
document.getElementById("numEight").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("8");
    inputCheck.appendChild(addInput);
}
document.getElementById("numNine").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let addInput = document.createTextNode("9");
    inputCheck.appendChild(addInput);
}

//Button events for operator inputs 
document.getElementById("equal").onclick = function(){
    operatorFunc();
    addInput = document.createTextNode("=");
    operatorCheck.appendChild(addInput);
    addInput = document.createTextNode(userInput);
    inputCheck.appendChild(addInput);
}
document.getElementById("clear").onclick = function(){
    inputCheck.textContent = "";
    operatorCheck.textContent = "";
    userInput = 0;
}
document.getElementById("delete").onclick = function(){
    if (operatorCheck.textContent === "="){
        inputCheck.textContent = "";
        operatorCheck.textContent = "";
        userInput = 0;
    }
    let del = inputCheck.textContent;
    delTru = del.slice(0,-1);
    inputCheck.textContent = delTru;
}
document.getElementById("add").onclick = function(){
    operatorFunc();
    addInput = document.createTextNode("+");
    operatorCheck.appendChild(addInput);
}
document.getElementById("minus").onclick = function(){
    operatorFunc();
    addInput = document.createTextNode("-");
    operatorCheck.appendChild(addInput);
}
document.getElementById("multiply").onclick = function(){
    operatorFunc();
    let addInput = document.createTextNode("*");
    operatorCheck.appendChild(addInput);
}
document.getElementById("divide").onclick = function(){
    operatorFunc();
    let addInput = document.createTextNode("/");
    operatorCheck.appendChild(addInput);
}