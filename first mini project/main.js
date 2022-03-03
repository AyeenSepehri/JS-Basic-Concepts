function myFunction(){
    var num1,num2;
    num1 = document.getElementById("num1").value;
    num2 =document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2;
    var result = document.getElementById("sumResult");
    result.innerHTML = sum;
    var message = document.getElementById("status");
    try{
        // if(isNaN(sum)) throw "مقدار باید عددی باشد";
        if(isNaN(sum)) alert("مقدار باید عددی باشد")
        if (sum == 500) throw "مجموع خرید تمام موجودی است.";
        if (sum < 500) throw "شما میتوانید خرید کنید.";
        if (sum > 500) throw "موجودی شما کافی نیست.";
    }
    catch(err){
        message.innerHTML = err;
    }
    var subSec = document.getElementById("subResult");
    var sub = 500 - sum;
    subSec.innerHTML = sub;
    try{
        if (sub < 0) throw -sub;
    }
    catch(aaa){
        subSec.innerHTML = aaa + " " + "تومن موجودی کم است.";
    }
}
function resetFunction(){
    document.getElementById("sumResult").reset();
}