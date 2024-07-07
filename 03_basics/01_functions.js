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
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// ... operator known as spread opeartor and also known as rest operator use for like a cart in e commerce website.

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 500)); // gives output in the form of arrays.

const user = {
    username: "gautam",
    price: 199
}

function handleObject(anyobject){
    console.log("username is " + anyobject.username + " and price is " + anyobject.price);
}

// handleObject(user)

handleObject({
    username: "mishra",
    price: 799
})

const mynewArray = [200,400,100,600]

function returnsecondvalue(getArray){
    return getArray[2]
}

// console.log(returnsecondvalue(mynewArray));
console.log(returnsecondvalue([200,400,100,600]));