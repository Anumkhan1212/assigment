//Define the functions to show magicians name
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

//Function to make_magician great through .map () it will modify Array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}



//Define an Array of magicians name
let magician_name = ["Harry porter", "Sadia", "Tooba"]

//Call make_great function to modify magicians name
let great_magicians = make_great(magician_name);

//Call shoe_magician that show modified list of magicians
show_magicians(great_magicians);