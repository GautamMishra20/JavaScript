// const tinderUser = new Object()   ------>>>>>> this is a singleton.
const tinderUser = {}  //----->>>>>>>> this is non singleton.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "gautam",
            lastname: "mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}  ----->>> one in another.
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // spread operator "..."

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "Gautam@gamil.com"
    }
]
// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object Destructuring.

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "angela yu"
}

// course.courseInstructor

// const {courseInstructor} = course
    //    or
const {courseInstructor: instructor} = course

console.log(instructor);

// JASON API

// {
//     name: "Gautam Mishra",
//     coursename: "JavaScript",
//     price: "free"
// }