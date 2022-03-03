var firstTry = document.getElementById("first");
firstTry.innerHTML = "Hello World";
//math operators example
var secondTry = document.getElementById("second");
var x = 10;
var y = 5;
secondTry.innerHTML = x + y;
//another example
var thridTry = document.getElementById("thrid");
var x = 20;
var y = 10;
x++;
y /= 2;
thridTry.innerHTML = x * y;
///////////////////////////////////////////
function sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2); 
    var sum = num1 + num2;
    var lbl = document.getElementById("ayeen");
    lbl.innerHTML = sum;
}
function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2); 
    var multiply = num1 * num2;
    var lbl = document.getElementById("ayeen");
    lbl.innerHTML = multiply;
}