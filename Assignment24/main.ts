// Define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Banana", "Orange", "Mango"];

//Test for equality and unequality with strings

console.log("Is apple equal to an apple?");
console.log(apple == "apple");

console.log("\nIs apple not equal to an apple?");
console.log(apple != "apple");

//Test using lower case function
console.log("\nIs APPLE equal to apple after converting to lowerCase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE not equal to apple after converting to lowerCase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//Numerical Tests

//equal
console.log("\nIs ten equal to twenty");
console.log(ten == twenty);

//not equal
console.log("\nIs ten not equal to twenty?");
console.log(ten != twenty);

//greater than
console.log("\nIs ten greater than zero?");
console.log(ten > 0);

//less than
console.log("\nIs twenty less than ten?");
console.log(twenty < 10);

//greater than or equal to
console.log("\nIs ten greater than or Equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\nIs twenty less than or equal to ten?");
console.log(twenty <= 10);

// Tests using "and" & "or" operators

//Using && (and)
console.log("\nTwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);

console.log("\nTwenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);

//Using || (or)
console.log("\n20 is greater than 30 Or twenty is equal to 20?");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 30 Or twenty is not equal to 20?");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in Array
console.log("\nIs Orange include in my fruits Array");
console.log(fruits.includes("Orange"));

//Not Include
console.log("\nIs Orange not include in my fruits Array");
console.log(!fruits.includes("Orange"));
