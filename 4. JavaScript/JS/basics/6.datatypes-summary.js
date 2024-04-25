// Primitive : all references are passed as call by value

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


// dynamically typed language 

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId) // false

const bigNumber = 545452165684512326878432n // bigInt

// Reference (Non - Primitive)

// Array , Objects , Functions

const bt21 = ["shooky" , "tata", "chimmy" , "mang" , "cooky" , "RJ" , "koya"]

let myObj = {
    Name : "Neharika",
    age : 14
}

const myFunc = function(){
    console.log("hello world")
}

console.log(typeof bigNumber) // undefined

console.log(typeof myFunc) // object function

console.log(typeof null) // object