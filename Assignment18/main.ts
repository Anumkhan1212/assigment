// Making a Array of Countries and print its orignal orders
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];

console.log("Orignal Order:", countriesToVisit);

//Print the Array in Alphabetical Order without modifying the actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the Array is in orignal order
console.log("Still in Orignal Order:", countriesToVisit);

//Print the Array in Reverse order without modifying the actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

//Show that the Array is in orignal order
console.log("Still in Orignal Order:", countriesToVisit);

//We have changed the orignal Array order now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

//Print the Array to show that its back to its orignal order
console.log("Back to Orignal Order:", countriesToVisit.reverse());

//Print the Array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//We have changed the orignal Array order now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());


