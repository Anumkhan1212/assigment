//Define a function to print each magician name from an Array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an Array containing magicians name
var magicians_name = ["Harry Porter", "Sadia", "Fazia"];
//Call the function to print each magician name
show_magicians(magicians_name);
