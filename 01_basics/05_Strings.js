const name = "Gautam"
const AccBal = 49  //1 type to declare string.

// console.log(name + AccBal + "Value");

console.log('Hello my name is '+ name +' and my account balance is Rs.' +AccBal +'/-')

const gameName = new String("GautamGM") //2 type to declare strings.
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("u"));

const newString = gameName.substring(0,4) //never provide negative nnumber in substring method.
console.log(newString);

const anotherString = gameName.slice(0,-1) //we can provide a negative number in slice method.
console.log(anotherString);

const newString1 = "     Gautam    "
console.log(newString1);
console.log(newString1.trim());


const url = "https://gautam.com/gautam%20mishra"
console.log(url);
const url1 = url.replace('%20','-')
console.log(url1);

console.log(url.includes("gautam"));

// 0: "G"
// 1: "a"
// 2: "u"
// 3: "t"
// 4: "a"
// 5: "m"
// 6: "G"
// 7: "M"
// length: 8
// [[Prototype]]: String
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// smal: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// [[PrimitiveValue]]: ""
// [[PrimitiveValue]]: "GautamGM"