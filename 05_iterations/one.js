// for loop:-

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
} 

for(let i=0; i<=10; i++){
    // console.log("Outer loop value: "+ i);
    for(let j=0; j<=10; j++){
        // console.log(i+' * '+j+' = '+i*j);
    }
}

let myArray = ["flash", "batman", "superman"]
for(let i=0; i<myArray.length; i++){
    const element = myArray[i]
    // console.log(element);
}

// break and continue:-

for (let index = 1; index <= 20; index++) {
    console.log('value of i is :- '+index);
    if(index==5){
        console.log("WE REACHED OUR FAVOURITE NUMBER:-)");
        break
    }    
}