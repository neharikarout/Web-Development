// for each

const coding = ["js" , "py" , "java" , "ruby" , "cpp"]

// for each expects a callback function : callback function has no name
// coding.forEach(  function (item) {
//     console.log(item)
// })


// coding.forEach((value) => {
//     console.log(value)
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe) // only give reference of function

coding.forEach( (item , index , arr) => {
    console.log(item , index , arr )
})
// this function parameter has not only value access but also index and whole array as whole


const myCoding = [
    {
        languageName : "javascript",
        extension : "js"
    },
    {
        languageName : "python",
        extension : "py"
    },
    {
        languageName : "javat",
        extension : "java"
    },
    {
        languageName : "C++",
        extension : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})