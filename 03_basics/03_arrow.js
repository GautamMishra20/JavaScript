// this keyword is a current context , it is use to access the variables with in the scope.

const user = {
    username: "gautam",
    price: 99,

    welcomeMessage: function(){
        console.log(this.username + " Welcome to website.");
        console.log(this); // here we get object as an output.
    }
}

// user.welcomeMessage()
// user.username = "Gautam"  
// we changed the context here.
// user.welcomeMessage()

// console.log(this); 
// here this gives us {} because we don't have any to print in the global context.

// we can't use this in the function.

// function me(){
//     let username = "gautam"
//     console.log(this.username);
// }

// me()

const me = () => {
    let username = "gautam"
    console.log(this);
}
// me()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) =>  (num1+num2) 
// implicit return -> in a single line.

const addTwo = (num1,num2) =>  ({username: "gautam"})
console.log(addTwo(5,6));