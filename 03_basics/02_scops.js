// {} this is a scope when it is used with a functions, if-else loops, while loops, etc.

// var c = 300

let a = 300 // global scope

if(true){
    let a = 10
    const b = 20  // block scope 
    var c = 30
    // console.log("INNER: ",a);
}



// console.log(a); 
// console.log(b); ---->>>> 2nd out
// console.log(c);   // not out


function one(){
    const username = "gautam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "gautam"
    if(username === "gautam"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++++++++ interesting +++++++++++++++++++++++++


console.log(addOne(5));
function addOne(num){
    return num+1
}
// addOne(5)


addTwo(6)
const addTwo = function(num){
    return num + 2
}
// addTwo(5)