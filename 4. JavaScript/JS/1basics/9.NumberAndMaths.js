// const score = 400
// console.log(score)

// const balance = new Number(100)   // Number object
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // precision upto value 2 : 100.00

// const num = 23.454545

// console.log(num.toPrecision(3)) 

// const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // international number system
// console.log(hundreds.toLocaleString('en-IN')) // indian number system


// ++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++

console.log(Math)  // object

// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.6)) // 5
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.9)) //4
// console.log(Math.min(4,3,5,9)) //3
// console.log(Math.max(4,5,2,6)) //6

console.log(Math.random()) // gives random value b/w 0 and 1

console.log(Math.random()*10) // value is range b/w 0-9

// value range in b/w 1 to 10 
console.log(Math.floor(Math.random()*10 )+ 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max-min+1) )+ min)

