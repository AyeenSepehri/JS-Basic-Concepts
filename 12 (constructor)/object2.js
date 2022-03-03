
function person(x, y, z) {
    this.name = x;
    this.family = y;
    this.age = z;
    this.fullName = function(){
        return this.name + " " + this.family;
    };
}
var mahdi = new person("mahdi", "sepehri", 25);
console.log(mahdi.fullName())
console.log(mahdi);
//how can i subtract a property of a function???????
var people = [];
people.push(new person("ali", "javid", 24));
people.push(new person("rashid", "rezaei", 24));
people.push(new person("arvin", "abdi", 30));
people.push(new person("mona", "tavallaei", 27));
console.log(people);
console.log(people[3].fullName());
var text;
for(x in people){
    text += people[x].fullName() + " -> " + people[x].age + "<br>";
}
document.getElementById("demo").innerHTML = text;
//for what the first option of the loop of above is undefined???????