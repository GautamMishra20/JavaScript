const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(1));

const otherNumber = 12.6784
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.56478
console.log(otherNumber1.toPrecision(3));

const hundreds = 10000000000
console.log(hundreds.toLocaleString("en-IN"));


// +++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5678));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,5,8,6,4));
console.log(Math.max(2,4,6,8,4));

console.log(Math.random());
console.log(Math.random()*10 + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);