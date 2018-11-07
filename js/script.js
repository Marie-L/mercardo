function Recipe(id, label, description, portion, preparation, cook, level, spice, method, ingredients) {
    this.id = id;
    this.label = label;
    this.description = description;
    this.portion = portion;
    this.preparation = preparation;
    this.cook = cook;
    this.level = level;
    this.spice = spice;
    this.method = method;
    this.ingredients = ingredients;

    //getter
    this.getId = function() {
        console.log(this.id);
    }
    this.getLabel = function() {
        console.log(this.label);
    }
    this.getDescription = function() {
        console.log(this.description);
    }
    this.getPortion = function() {
        console.log(this.portion);
    }
    this.getPreparation = function() {
        console.log(this.preparation);
    }
    this.getCook = function() {
        console.log(this.cook);
    }
    this.getlevel = function() {
        console.log(this.level);
    }
    this.getSpice = function() {
        console.log(this.spice);
    }
    this.getMethod = function() {
        console.log(this.method);
    }
    this.getIngredients = function() {
        console.log(this.ingredients);
    }
};

//INSTANTIATION
//new object from Recipe function/Class
var spaghetti = new Recipe('001', 'Spaghetti bolognese', 'quick spag bol recipe', 'serves 2', '10 minutes', '15 minutes', 'Easy', 'Mild','lorem lorem lorem lorem', ['spaghetti', 'tomato puree', 'mince beef', 'garlic', 'oregano' ]) ;
{

};

function init() {
    var recipe1 = new Recipe("lasagne");


}