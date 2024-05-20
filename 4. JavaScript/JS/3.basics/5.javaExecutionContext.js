// Javascript execution context

// {} -> global execution context -> this 
// in browser : this has window object

//function execution context
// Eval execution context

// {} -> memory creation phase : allocation
// -> execution phase

let val1 = 10
let val2 = 5 

function addNum(num1 , num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,3)

// phases

// 1. global execution -> this
// 2. memory creation phase
//  val1 -> undefined
//  val2 -> undefined
//  addNum -> definition
// result1 -> undefined
// result2 -> undefined

//3. execution phase
// val1 = 10
// val2 = 5
// nothing happens till line 6

// addNum -> New variable environment + execution thread
// so for this function first two phases will be done
//  1. val1 -> undefined
//     val2 -> undefined
//     total -> undefined
// 2.  execution phase
//      num1 -> 10
//      num2 -> 5
//      total -> 15 (return to global executional context)

// after completion of function its context will be deleted


// now for result1 again NVE and thread will be created and follow first two phases




// ++++++++++++++++++++++  CALL STACK ++++++++++ 

// whenever a new environment is created stored in stack and after completion it got deleted
// call stack -> LIFO


