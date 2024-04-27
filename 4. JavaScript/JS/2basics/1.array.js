// array 

const myArr = [0, 1 , 2 , 3 , 4]
const bt21 = ["shooky" , "mang" , "koya"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0])

//when we perform copy operation in array it makes shallow copy(copy share the same reference)
// deep copy(copy do not share the same reference)



// Array methods

// myArr.push(6) // add element at last
// myArr.pop()  // removes last element
// console.log(myArr)

// myArr.unshift(9) // add element at start (not optimized)
// console.log(myArr)

// myArr.shift() // delete from beginning
// console.log(myArr)


// console.log(myArr.includes(9)) // boolean data 
// console.log(myArr.index(9)) // -1 if not present

// const newArr = myArr.join()
// console.log(myArr) //[ 0, 1, 2, 3, 4 ] i.e array
// console.log(newArr)//0,1,2,3,4 i.e string

// slice , splice
console.log("A" , myArr) //[ 0, 1, 2, 3, 4 ]

const myn1 = myArr.slice(1,3) 

console.log(myn1) // [ 1, 2 ]
console.log("B" , myArr) //[ 0, 1, 2, 3, 4 ]

const myn2 = myArr.splice(1,3)
console.log("C" , myArr) // [ 0, 4 ]
console.log(myn2) // [ 1, 2, 3 ]

