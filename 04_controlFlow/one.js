// if statements
// -------------------------------------------------------------
// if (true) {
//     // then execute inside code.
// }

// if (false){
//     // then don't execute inside code.
// }

// comparisons => <, >, <=, >=, ==, !=, ===, !==

const temperature = 50
if (temperature < 50) {
    // console.log("less than 50");
}
else if(temperature == 50){
    // console.log("equals to 50");
}
else{
    // console.log("greater than 50")
}


if (2 === "2") {
    // console.log("executed");
}

const balance = 1000

// if(balance > 500) console.log("test");

if (balance < 500){
    console.log("less than");
} 
else if (balance < 750){
    console.log("less than 750");
} 
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const loggedInFromGoogle = true
const loggedInFromEmail = false
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}