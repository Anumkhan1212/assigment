//Array of current users
var current_users = ["Anum", "mahnoor", "Sadia", "Tooba", "Faiza"];
//Array of new users
var new_users = ["Farah", "Sana", "Anum", "Hania", "Mahnoor"];
//Loop through new user to check for usernames for avaibility
new_users.forEach(function (new_one_user) {
    //Making a condition for username already exist and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This user name ".concat(new_one_user, " is Available"));
    }
});
