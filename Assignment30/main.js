//Creating an Array
var userNames = ["Anum", "Mahnoor", "Sadia", "Admin", "Tooba"];
//Using for Each Loop of Array
userNames.forEach(function (OneUser) {
    if (OneUser === "Admin") {
        console.log("Hello ".concat(OneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(OneUser, ", Thankyou for Logging in Again"));
    }
});
