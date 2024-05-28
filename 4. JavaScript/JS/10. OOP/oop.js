// const user = {
//     username: "neharika",
//     loginCount: 8,
//     signedIn: true,


//     getUserDetails: function(){
//         //console.log("Got user details from Database")
//         //console.log(`${username}`) // not defined
//         console.log(`${this.username}`)// neharika
//     }
//     // this : current context
// }

//console.log(user.username)
//user.getUserDetails()

// "this" on global scope changes
// in node it is empty
// in browser it returns 'window'


// -------------------------------------------------------------------

// Constructor function : when we have to create many objects

//const promiseOne = new Promise()
//const data = new Date()

// 'new' is an constructor function . it creates new context for the object

function User(username , loginCount, isLoggenIn){
    // lhs - variable and rhs - value that you are passing
    this.username = username
    this.loginCount = loginCount
    this.isLoggenIn = isLoggenIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    

    return this // implicitly return so no need to write this
}

const userOne = User("hitesh",12,true)
//const userTwo =  User("neharika",11,false)

console.log(userOne)//userTwo overidden userOne if we dont use 'new' or make function to create new objects

// use 'new' keyword
const userTwo = new User('neharika',11 , false)

// -------------------------------------------------------------------

