function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("T");
    console.log("A");
    console.log("M");
}
//sayMyName()

// here number1 & number2 are parameters.
// function addTwoNumbers(number1, number2){  
//     console.log(number1+number2);
// }

// addTwoNumbers(1,5)   // 1 and 5 are arguments.
// addTwoNumbers(1,"4")
// addTwoNumbers("1",6)
// addTwoNumbers("1","7")

// function addTwoNumbers(number1, number2){  
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){  
    // let result = number1+number2
    // return result

    return number1+number2
}
const result = addTwoNumbers(4,5)
// console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username.");
        return
    }
    return username + " just logged in."
}
// console.log(loginUserMessage("Gautam"));
console.log(loginUserMessage());