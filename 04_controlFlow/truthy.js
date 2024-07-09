const userEmail = "g@gautam.ai"

if(userEmail){
    console.log("Got user's email");
}
else{
    console.log("Don't have user's email");
}

// falsy values:-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:-
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

val2 = null ?? 10



console.log(val2);
console.log(val1);

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");