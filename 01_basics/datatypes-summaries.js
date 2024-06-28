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