var A;
var B;


function getA() {
   A = parseFloat(document.getElementById("a").value);
}
function getB() {
   B = parseFloat(document.getElementById("b").value);
}

function add() {
   getA();
   getB();
   var C = A+B;
   document.getElementById("results").innerHTML = "The sum of " + A + " and " + B + " is " + C + ".";
}

function subtract() {
   getA();
   getB();
   var C = A-B;
   document.getElementById("results").innerHTML = "The difference of " + A + " and " + B + " is " + C + ".";
 }
function multiply() {
   getA();
   getB();
   var C = A*B;
   document.getElementById("results").innerHTML = "The product of " + A + " and " + B + " is " + C + ".";
}
function divide() {
   getA();
   getB();
   var C = A/B;
   document.getElementById("results").innerHTML = "The quotient of " + A + " and " + B + " is " + C + ".";
}
function remainder() {
   getA();
   getB();
   var C = A%B;
   document.getElementById("results").innerHTML = "The remainder of " + A + " when divided by " + B + " is " + C + ".";
 }

