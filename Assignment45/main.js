//Define a function to create a car object with optional options..
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //Add aditional options to the car objects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call a function to create car object
var my_car = create_car("Toyota", "corrolla", "color: black", "sunroof: True", "Year: 2024");
//Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
