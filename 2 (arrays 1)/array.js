//define a array like this
var names = ["mahdi","mahbod","jaafar","zohre"];
document.write(names[0]);
document.write("<br/>");
document.write(names.length);
//using sort for our array
var names2 = names.sort()
document.write("<br/>");
console.log(names2);
//second way to define an array
var family = new Array("sepehri","dalili");
document.write("<br/>");
document.write(family[1]);
family[3] = "tavallaei";
console.log(family[3]);
