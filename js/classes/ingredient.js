//CLASS
function Ingredient (label, type, id) {
    this.label = label;
    this.type = type;
    this.id = id;

    //getter - accesses properties in an object
    this.getLabel = function() {
        console.log(this.label);
        }
        this.getType = function () {
console.log(this.type);
    }
    this.getId = function() {
        console.log(this.id);
    }
};

//INSTANTIATION
//new object (object instances)from Recipe function/Class

var chicken = new Ingredient (Chicken, poultry, 008);
var rice = new Ingredient (Rice, poultry, 009);

Ingredient();