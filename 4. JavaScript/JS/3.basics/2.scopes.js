// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

{} // scope

// var c = 300 // defined
let a = 300 

if(true){
    let a = 10
    const b = 20
    // var c = 30 // re defined 
}

// console.log(a) // not defined as not in its scope 
// again defined globally so now 300
// console.log(b) // not defined as not in its scope
// console.log(c) // 30 still accessible outside scope

// c = 30 // stilll gives 30 i.e var


// var is global scoped
// let is block scoped





function one(){
    const username = "neharika"

    function two(){
        const website= "youtube"
        console.log(username) // can access parent data
    }
    // console.log(website); // not accessible outside the scope 
    // cann't access child's data

    //two() after commenting this it doesnot shows username
}

one()


if(true){
    const username = "neharika"
    if(username === "neharika"){
        const website = "youtube"
        // console.log(username + website); // neharikayoutube
    }
    // console.log(website) // out of scope
}

// console.log(username) // out of scope




// ++++++++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(5)) // running even if function defined later = 6
function addone(num){
    return num + 1
}

// addone(5) // value is not printed


// console.log(addTwo(3)) // giving error i.e accessing before initialization
const addTwo = function(num){ // sometimes also known as expressions
    return num+2
}

addTwo(3) // still a function 