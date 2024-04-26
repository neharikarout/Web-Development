// Dates

let myDate = new Date()
console.log(myDate.toString()) // Fri Apr 26 2024 10:53:30 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Fri Apr 26 2024
console.log(myDate.toJSON()) //2024-04-26T05:23:30.205Z
console.log(myDate.toLocaleString())//26/4/2024, 10:53:30 am
console.log(myDate.toISOString()) //2024-04-26T05:23:30.205Z
console.log(myDate.toLocaleDateString()) //26/4/2024

console.log(typeof myDate) //object

// let myCreatedDate = new Date(2023,0,23) // jan starts from 0
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14") // can give format for date and jan starts from 1
let myCreatedDate = new Date("01-03-2023") // indian standard
console.log(myCreatedDate.toLocaleString()) // gives answer in json format so used funtion to convert into string


// Timestamps

let myTimestamp = Date.now()  // gives answer in miliseconds

// console.log(myTimestamp); //1714109634382
// console.log(myCreatedDate.getTime()); //1672684200000

console.log(Math.floor(Date.now()/1000)) // converted to seconds



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) //4 ; +1 BECAUSE jan=0 here
console.log(newDate.getDay()) // 5 i.e friday


console.log(newDate.toLocaleString('default', {
    weekday : "long",
}))   //friday



