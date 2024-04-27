// singleton : when we make through constructors only single instance

// Object.create

// object literals : dont make single instance

const mySym = Symbol("key1") // can't declare it directly in object

const JsUser = {  // key-value pairs
    name : "Neharika" ,
    "full name": "Neharika Rout",
    // mySym : "mykey1" // treat it as a string
    [mySym] : "mykey1" ,  // syntax for symbol
    age : 18,
    location: "Jaipur",
    email : "neharika@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email) // dot notation
// console.log(JsUser["email"]) // square notation

// //console.log(JsUser.full name) // cant access through dot 
// console.log(JsUser["full name"])

// // accessing symbol
// console.log(JsUser[mySym]) // using square brackets without quotes



// JsUser.email = "neharika@google.com" // modification

// Object.freeze(JsUser) ; //lock the value cant change after that
// JsUser.email = "neharika@yahoo.com"
// console.log(JsUser);

//               OUTPUT 
// {
//     name: 'Neharika',
//     'full name': 'Neharika Rout',
//     age: 18,
//     location: 'Jaipur',
//     email: 'neharika@google.com', // no change in email propagated
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'  // symbol type
//   }



// functions in objects 

JsUser.greeting = function() {
    console.log("hello Js User ") 
}

JsUser.greetingTwo = function() {
    console.log(`hello Js User ${this.name}`) // to access the values of the same object 
}

console.log(JsUser.greeting); // [Function (anonymous)] : only reference is given
console.log(JsUser.greeting());//hello Js User  //undefined
console.log(JsUser.greetingTwo());  //hello Js User Neharika
