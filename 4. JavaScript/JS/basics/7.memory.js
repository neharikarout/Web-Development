//     Stack and Heap


// stack : used by primitives
// you get a copy when you declare it

let Name = "Neharika"
let anotherName = Name
anotherName = "Neha"

console.log(Name) // Neharika
console.log(anotherName) //Neha

// heap : used by non primitives
// you get a reference of that variable

let user = {
    email : "user@gmail.com" ,
    upi : "user@ybl"
}

let user2 = user

user2.email = "user2@gmail.com"
console.log(user.email)  //user2@gmail.com
console.log(user2.email) // user2@gmail.com

