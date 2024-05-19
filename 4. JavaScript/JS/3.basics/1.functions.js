// console.log("N")
// console.log("E")
// console.log("H")
// console.log("A")

function sayMyName(){
    console.log("N")
console.log("E")
console.log("H")
console.log("A")
}

sayMyName // reference
// sayMyName() // execution

// function addTwoNumbers(number1,number2){ // parameters
//     console.log(number1+number1);
// }

addTwoNumbers() // NaN as no arguements given
addTwoNumbers(3,4) // 7
addTwoNumbers(3,"4") // 34 considered both as string 

// when values passed in function call called as arguements

// const result = addTwoNumbers(3,5)

// console.log("Result: ", result) //undefined because we are not returning we are only printing

function addTwoNumbers(num1 , num2){
    // let result = num1 + num2;
    // return result;
    return num1+num2;
}

const result = addTwoNumbers(3,5) // doesnot print anything

// console.log("Result: ", result) // 8 returns sum

// lines after return statement are never executed



function loginUserMessage(username = "Neha"){ // default value is given
    if(username === undefined){ // if(!username) can be written too
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

loginUserMessage("Neharika") // doesn't print anything as it is returning only

// console.log(loginUserMessage("Neharika") ) // now prints

// what if user doesn't pass anything - returns undefined
// console.log(loginUserMessage() ) // handled undefined through "if" block

// can give default values to avoid this condition



function calculateCartPrice(...num1){ // rest operator : bundle it and give 
// this symbol also known as spread on basis of functionality their name is decided
    return num1
}
// without rest operator(...) it will take only one value i.e 200
//function calculateCartPrice(num1 , num2 , ...val) // here num1 : 200 , num2 : 400 , val :rest of the values

// console.log(calculateCartPrice(200, 400 , 500)) // [ 200, 400, 500 ]

const user = {
    username : "Neharika" ,
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username: "ana",
    price: 400
})


const myNewArray = [200, 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 500 , 400]))