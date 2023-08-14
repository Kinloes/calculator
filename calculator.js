let inputCheck = document.getElementById("visualInput")

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
}
document.getElementById("clear").onclick = function(){
    console.log("clear");
    inputCheck.textContent = "";
}
document.getElementById("delete").onclick = function(){
    console.log("delete");
    let test = inputCheck.textContent;
    del = test.slice(0,-1);
    console.log(del)
    inputCheck.textContent = del
}
document.getElementById("add").onclick = function(){
    console.log("+");
    let addInput = document.createTextNode(" + ");
    inputCheck.appendChild(addInput);
}
document.getElementById("minus").onclick = function(){
    console.log("-");
    let addInput = document.createTextNode(" - ");
    inputCheck.appendChild(addInput);
}
document.getElementById("multiply").onclick = function(){
    console.log("*");
    let addInput = document.createTextNode(" * ");
    inputCheck.appendChild(addInput);
}
document.getElementById("divide").onclick = function(){
    console.log("/");
    let addInput = document.createTextNode("/");
    inputCheck.appendChild(addInput);
}