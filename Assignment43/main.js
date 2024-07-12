//Define the functions to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make_magician great through .map () it will modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an Array of magicians name
var magician_names = ["Harry porter", "Sadia", "Tooba"];
//Making a copy of orignal Array through .slice function
var copy_magicians_names = magician_names.slice();
//modify the copy Array to include "the Great" with thier names
var copy_great_magicians = make_great(copy_magicians_names);
//Show both Arrays orignal and copied
//orignal
console.log("Orignal Array\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
