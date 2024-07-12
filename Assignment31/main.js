var userNames = ["Anum", "Mahnoor", "Tooba", "Admin"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty, We need to find some users!");
}
else {
    //For each loop on array
    userNames.forEach(function (OneUser) {
        if (OneUser === "Admin") {
            console.log("Hello ".concat(OneUser, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(OneUser, ", Thankyou for Logging in Again"));
        }
    });
}
