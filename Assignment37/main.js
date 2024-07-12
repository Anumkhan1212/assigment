//Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//Calling a function with by defualt values
make_shirt();
//Calling a function now with medium size and default message
make_shirt("Medium");
//Calling a function now with different size and message
make_shirt("small", "I Love java script");
