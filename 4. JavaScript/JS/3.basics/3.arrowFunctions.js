const user = {
    username : "neharika",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // this is used to access current context
        console.log(this)
        // this = 
        // {
        //     username: 'neharika',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }
}

// user.welcomeMessage() //neharika , welcome to website
// user.username = "sam" // changed the context
// user.welcomeMessage() //sam , welcome to website

// user.welcomeMessage()

// user.username = "sam" // changed the context
// user.welcomeMessage() 

console.log(this)
// {
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }


// if we dont change the context then in node environment the this is empty brace i.e {}

// in browser it shows "Window" 
// Window is a global object in browser


// function one(){
//     console.log(this);
// }

// one()
//                                     output
// {}
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }



// function one(){
//     let username = "neharika"
//     console.log(this.username);
// }

// one() // undefined


// const chai = () => {
//     let username = "neharika"
//     console.log(this.username)
// }

// chai() // undefined

// in functions we cannt access "this" it shows undefined



//                       Arrow Functions

// const addTwo = (num1,num2) => {
//     return num1 + num2    // explicit return
// }

// console.log(addTwo(3,4)) // 7

//                   implicit return = maan leta hun

// const addTwo = (num1,num2) =>   num1 + num2
// const addTwo = (num1,num2) =>   (num1 + num2) // for clarity

// if curly braces are there you need to use return statement

// console.log(addTwo(3,4)) // 7



// how to return objects in implicit return

// const addTwo = (num1,num2) =>  {username : "neharika"}  // wrong
const addTwo = (num1,num2) =>  ({username : "neharika"}) // must to wrap inside parenthesis



const myArray = [ 2, 5, 4]

// myArray.forEach(function() {})
// myArray.forEach(() => {})








