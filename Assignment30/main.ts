//Creating an Array
let userNames = ["Anum", "Mahnoor", "Sadia", "Admin", "Tooba"];

//Using for Each Loop of Array
userNames.forEach(OneUser => {
    if(OneUser === "Admin"){
        console.log(`Hello ${OneUser}, Would you like to see a status report?`)

    }else{
        console.log(`Hello ${OneUser}, Thankyou for Logging in Again`)
    }
})