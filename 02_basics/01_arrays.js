// Arrays:-

const myArr = [0,1,2,3,4,5]
const myHeros = ["Ironman","Thor","Hulk"]

const myArr2 = new Array(1,3,5,7,8)
console.log(myArr[0]);
console.log(myArr2[3]);

// Array Methods:-

// myArr.push(6)            ------>>>> push() for insert element at last position.
// myArr.push(7)
// myArr.pop()              ------>>>> pop() for remove element from last position.

// myArr.unshift(2)         ------>>>> unshift() used for insert element at first position or at 0th index.
// myArr.shift()            ------>>>> shift() used for remove element from 0th index.
// myArr.shift()

// console.log(myArr.includes(9));   ---->>>> To check that the given element is present in an array or not.  
// console.log(myArr.indexOf(3));    ---->>>> For the index.

// const newArr = myArr.join()    ----->>>> It changes the number array into Strings.
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice And Splice:-

console.log("A :-", myArr);

// const myn1 = myArr.slice(3, 5)  ----->>>> Never manipulate an original Array.

// console.log(myn1);

console.log("B :-", myArr);

// const myn2 = myArr.splice(1,3)  ----->>>> It manipulate an original Array. 
console.log("C :-", myArr);
// console.log(myn2);