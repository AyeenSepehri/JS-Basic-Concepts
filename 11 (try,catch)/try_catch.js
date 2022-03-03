// function myFunction() {
//     var message, x;
//     message = document.getElementById("p01");
//     message.innerHTML = "";
//     x = document.getElementById("demo").value;
//     try{
//         x = Number(x);
//         if(isNaN(x)) throw "not a number";
//         if(x == 500) throw "all of your money";
//         if(x < 500) throw "you can buy it";
//         if(x > 500) throw "you haven't enough money";
//     }
//     catch(err){
//         message.innerHTML = err;
//     }
//     finally{
//         document.getElementById("demo").value = "";
//     }
// }
function sum() {
    var num1 = document.getElementById("demo").value;
    var num2 = document.getElementById("demo2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2); 
    var sum = num1 + num2;
    var lbl = document.getElementById("p01");
    lbl.innerHTML = sum;
    var message = document.getElementById("result");
        try{
            if(sum == 500) throw "all of your money";
            if(sum < 500) throw "you can buy it";
            if(sum > 500) throw "you haven't enough money";
        }
        catch(err){
            message.innerHTML = err;
        }
    
    }