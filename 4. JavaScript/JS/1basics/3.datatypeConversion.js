let score = 33
let scores = "33abc"
let temp = null
let c = undefined

 console.log(typeof scores)  // string
 console.log(typeof(score))  // number
 console.log(temp) //null
 console.log(c) //undefined

 let valueInNumber = Number(scores) 
console.log(typeof valueInNumber) // number 
//issue as it is converted into number but it isn't a number
console.log(valueInNumber) //Nan i.e Not a number


// 33 => 33
// "33abc" => NaN but type is number
//true = 1 ; false = 0



// let isLoggedIn = 1  
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true ; 0 => false
// "" => false
//"hello" => true

let someNum = 33

let stringNum = String(someNum) // "33" => string type