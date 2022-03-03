var person = {
    name: "Ayeen",
    Family: "Sepehri",
    age: 25,
    fullName: function() {
        return this.name + " " + this.Family;
    }
};
console.log(person.fullName());