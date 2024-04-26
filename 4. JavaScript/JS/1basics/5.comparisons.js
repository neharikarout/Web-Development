// console.log(2 > 1)  // true
// console.log(2 >= 1)  // true

console.log("2" > 1) // true but not always give predictable result
console.log("02" > 1)


// avoid these type of comparisons below





console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// the reason is that an equality check == and comparisons ><>= <= work differently
//comparisons convert null to a number treating it as 0
//that's why null >= 0 is true and null > 0 is false

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

console.log(undefined == 0) // false
// gives false in all cases


// strict checking === : checks also data type
console.log("2" === 2)  // false