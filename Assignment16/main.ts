// Creating a guestList Array
let guestList = ["Anum", "Mahnoor", "Faiza", "Tooba"];

// Making variable for those who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi asakty hain");

// Add or Remove guests from guestList Array
guestList.splice(0, 1, "Muskan");

// Message print for bigger table
console.log("Good New ! We have found a Bigger table for dinner");

// Adding a new guest at starting index of Array
guestList.unshift("Anaya");

// Adding a new guest at ending index of Array
guestList.push("Rabia");

// Get a middle index of our guestList Array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to midddle index of Array
guestList.splice(middleIndex, 0, "Dania");

// Print message of Updated List
console.log("Updated list of our guest");

// Send message for Each Guest
guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, Would you like to dinner with me?`));