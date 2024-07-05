// singleton when we make object by constructor
// ------->>>>> object.create

// object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Gautam",
    "full name": "Gautam Mishra",
    [mySym]: "myKey1",    // use sqr bracket for use symbol.
    age: 18,
    location: "Jaipur",
    email: "gautam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);
        //or
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser["age"]);

//JsUser.age = 21   // how to change the value in the object
//console.log(JsUser["age"]);

//Object.freeze(JsUser)  // it is a way to lock the object for the further changes.
//JsUser.name = "Mishra Gautam"
//console.log(JsUser["name"]);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user",this.name);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());