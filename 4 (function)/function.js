 function SayHello()
{
    alert("I am ayeen sepehri")
}
SayHello();
//////////////////////////////////////
function sum(x,y)
{
    return x+y;
}
document.getElementById("sumsec").innerHTML = sum(12,22);
///////////////////////////////////////
function FullName()
{
    return Name + " " + Family;
}
var Name = "Ayeen";
var Family = "Sepehri";
document.getElementById("nameSec").innerHTML = FullName();
