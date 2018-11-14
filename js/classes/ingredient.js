function ingredient (label, type, id) {
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
//new object from Recipe function/Class

var chicken = new ingredient (Chicken, poultry, 008);
var rice = new ingredient (Rice, poultry, 009);

ingredient();