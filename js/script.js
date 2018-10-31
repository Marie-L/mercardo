function Recipe(id, label, description, portion, preparation, cook, level, spice, method) {
    this.id = id;
    this.label = label;
    this.description = description;
    this.portion = portion;
    this.preparation = preparation;
    this.cook = cook;
    this.level = level;
    this.spice = spice;
    this.method = method;

    //getter
    this.getId = function() {
        console.log(this.id);
    }
    this.getLabel() = function() {
        console.log(this.label);
    }

};

function init() {
    var recipe1 = new Recipe("lasagne");
    recipe1.getName();

}