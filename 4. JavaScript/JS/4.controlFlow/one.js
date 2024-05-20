// if(true){

// }

// if(false){
//     // will not run
// }

// if(1==1){

// }

// //const isUserLoggedIn = true

// if(isUserLoggedIn){

// }

// comparisons in conditions
//<,>, <= , >= , == , != , === , !==
// === -> strict equality : also checks the type
// !== -> strict inequality 

if(2=="2"){
    //console.log("executed")
}
if(2==="2"){ // not executed
    //console.log("executed")
}


const temp = 44

if(temp === 44){
    //console.log("less than 50")
}
else{
    console.log("greater than 50")
}

// use let and const as it is block scoped

// shorthand notation

const balance = 1000

// if(balance > 500) console.log("test"), // implicit scope : maan liya h
// console.log("test 2") // scope is increased but very unreadable


// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }



// multiple conditions

const isUserLoggedIn = true
const debitCard = true

if(isUserLoggedIn && debitCard){
    //console.log("Allow to buy course")
}

const month = 3

switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    default:
        console.log("Invalid input")
        break;

}

// if "break " is not inclu"ded it will not check remaining cases and print it except "default" case