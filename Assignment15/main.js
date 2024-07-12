// Creating a guestlist array 
var guestList = ["Anum", "Mahnoor", "Faiza", "Tooba"];
// making variable for those who cant come
var dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "Nahi As sakty hain");
//Add or remove guest from Guest list Array
guestList.splice(0, 1, "Anu");
//Message print for bigger table
console.log("Good News! We have found a Bigger Table for Dinner.");
//Adding a new guest at starting index of Array
guestList.unshift("Areeba");
//Adding a new guest at ending index of Array
guestList.push("Nimra");
//Get a middle index of our guest list Array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of our Array
guestList.splice(middleIndex, 0, "Muskan");
console.log("Updated List of our Guests");
//Sending invitation messsage one by one to guest of our Aray
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me?")); });
