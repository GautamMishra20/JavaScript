const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myObject = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myObject.forEach( (item) => {
    console.log(item.languageFileName);
})