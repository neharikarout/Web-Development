//const math = require("./math") 
// usermade modules : need to mention whole path otherwise it will try to find in its own package considering it as built-in module
const {add, sub} = require("./2math") // you can destructure it too

//node js has many built-in packages too
// to import those packages you just need to write its name unlike usermade modules it will find in its package
const file = require("fs") 

//console.log("hey there ! I am JS")
//console.log(math) // maths i.e exported from math.js

//console.log("math value is ", math(3,5)) // 8
//console.log(add(2,4)) // throwing error 



// console.log(math.add(4,5)) if you use without destructuring
// console.log(math.sub(5,2))


console.log(add(4,6))// now with destructuring you can use it directly

