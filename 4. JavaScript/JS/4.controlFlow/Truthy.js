const userEmail =  'neharika.com'
// assumed string has true value i.e truthy value

if(userEmail){
    console.log("got user email")
}
else{
    console.log("don't have user email")
}


// falsy values

// false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN


// truthy values

// "0" , "false" , " " , [] , {} , function(){}

const arr = []

if(arr.length === 0){
    console.log("Array is empty")
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
        console.log("object is empty")
    }

// false == 0 : true
// false == '' : true
// '' == 0 : true


// Nullish Coalescing Operator (??) : null undefined

let val1;

//val1 = 5 ?? 10 // 5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10


console.log(val1); 


//                       Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")