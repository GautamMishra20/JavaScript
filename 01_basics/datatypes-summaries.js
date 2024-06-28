// Primittive.
//-->> 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scorevalue = 100.8

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1235727625626245265363636n


// Reference(Non-primittive).
//-->> Array, Objects, Functions.

const heros = ["Shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Gautam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);


//************************************************************************************************************************************

// Stack(Primittive) , Heap(Non-Primittive)

// stack gives a copy of the value of one variable to the value of the another variable.
let mywork = "Engineering"

let anotherWork = mywork
anotherWork = "ui&ux_designer"
console.log(mywork);
console.log(anotherWork);

// heap gives a reference of the one variable to the other variable.
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "gautam@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);