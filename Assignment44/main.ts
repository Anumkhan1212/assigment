//Define a function with a rest parameter that accept items arrangment representing our sandwich
function makeSandwich(...items: string[]){

    console.log("\nmaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich\n");

}

//Call the function 3 time with 3 different numbers of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Chicken", "Butter", "Mayo", "Egg", "Cheese");