//Creating an Array
var pizza = ["Chicken Tikka", "Malai boti", "Fajita"];
// using For-Loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
//print a mesage outside of the for-loop
console.log("Pizza is Love");
