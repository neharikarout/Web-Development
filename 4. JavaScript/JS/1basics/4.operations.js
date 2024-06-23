
let value = 3 
let negValue = -value
console.log(negValue) //-3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2) //exponents
// console.log(2%2) // modulus

let str1 = "hello"
let str2 = " Neharika"

let str3 = str1 + str2 ;
console.log(str3) // concatenate

console.log(typeof("1" + 2)) // 12 - string
console.log(typeof(1 + "2")) // 12 - string
console.log("1" + 2 + 2) // 122 no conversion
console.log(1 + 2 + "2") // 32  added then concatenate

// use parenthesis for readability
console.log((3+4) * 5 % 2)


console.log(true)
console.log(+true) //1 but not preffered
console.log(+"") // 0 


let num1 , num2 , num3

num1 = num2 = num3 = 2+2  // not readable therfore avoid

let gameCounter = 100
console.log(gameCounter++)  // first use then change => 100  used
console.log(++gameCounter) // first change then use  => 102  inc then inc then use
console.log(gameCounter)  //102
