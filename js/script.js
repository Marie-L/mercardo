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

    //getter - accesses properties in an object
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

    //Setters - change or mutate the properties in an object
};

//INSTANTIATION
//new object from Recipe function/Class
var spaghetti = new Recipe('001', 'Spaghetti bolognese', 'quick spag bol recipe', 'serves 2', '10 minutes', '15 minutes', 'Easy', 'Mild','lorem lorem lorem lorem', ['spaghetti', 'tomato puree', 'mince beef', 'garlic', 'oregano' ]) ;

var vieja = new Recipe ('002', 'Ropa Vieja', 'cuban style shredded beef', 'serves 6-8', '10 minutes', '60 minutes', 'medium', 'Mild','Render bacon in a 6-qt. Dutch oven over medium-high heat. Transfer to a plate, leaving fat in pot. Season steak with salt and pepper. Working in batches, cook until browned on both sides, about 6 minutes; transfer to plate. Add onion and peppers; cook until soft, about 4 minutes. Add tomato paste, cumin, thyme, oregano, garlic, and bay leaf; cook until lightly caramelized, about 3 minutes. Add wine; cook, scraping bottom of pot, for 1 minute. Return bacon and steak to pot with stock and tomatoes; boil. Reduce heat to medium-low; cook, covered, until steak is very tender, 2–3 hours. Remove steak, and shred; return meat to pot with olives, pimientos, capers, and vinegar. Cook until sauce is slightly thickened, about 30 minutes. Stir in cilantro before serving.', ['6 oz. bacon', '2 lb. flank steak', 'salt and black pepper', '1 medium yellow onion', '1 red bell pepper' ]) ;


function init() {
    var recipe1 = new Recipe("lasagne");


}