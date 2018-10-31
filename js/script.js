function Recipe(id, name) {
    this.id = id;
    this.name = name;
    this.getId = function() {
        console.log(this.id);
    }
    this.getName = function() {
        console.log(this.name);
    }

};

function init() {
    var recipe1 = new Recipe("lasagne");
    recipe1.getName();

}