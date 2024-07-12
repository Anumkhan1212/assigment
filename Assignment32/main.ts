//Array of current users
let current_users = ["Anum", "mahnoor", "Sadia", "Tooba", "Faiza"]

//Array of new users
let new_users = ["Farah", "Sana", "Anum", "Hania", "Mahnoor"]

//Loop through new user to check for usernames for avaibility
new_users.forEach(new_one_user => {

    //Making a condition for username already exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //Print different messages using if.else
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)

    }else{
        console.log(`This user name ${new_one_user} is Available`)
    }
})
