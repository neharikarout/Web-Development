//before consuming you need to know that how it is made
// Q and bluebird libraries before es6

const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
}) // promise created

// consuming
promiseOne.then(function(){
    console.log("promise consumed")
})
// Before when resolve() is not called promise consumed wasn't printing because resolve and then were not connected


// promise can be created without storing into variable . So, you have to use then here only using '.then'
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved")
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "neharika" , email: "neharika@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "neharika" , password:"123"})
        }
        else{
            reject("ERROR: Something went wrong")
        }    
    },1000)
})

promiseFour.then((user) => {
  console.log(user)
  return user.username
}).then((username) => { // can use previous then values ; will run if there is no error
    console.log(username)
}).catch(function(error){ // will run when there is an error
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected")) // it will whether there is an error or not



const promiseFive  = new Promise(function(reject , resolve){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "javascript" , password:"123"})
        }
        else{
            reject("ERROR: Javascript went wrong")
        }    
    },1000)
})

// async-await : an alternative to .then/.catch
async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() // response comes in string
//     console.log(data)
//     } catch(error){
//         console.log(error)
//     }
// }

//getAllUsers() // no problem in code but promise is pending as response also take time so use await .



// doing same thing as above with .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))


