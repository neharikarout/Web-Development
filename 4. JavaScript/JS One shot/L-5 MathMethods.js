console.log(Math.PI); // gives the value of pi - 3.14...
console.log(Math.trunc(Math.PI)); // omit the decimal values - 3
console.log(Math.round(Math.PI)); // round off the values - 3
console.log(Math.ceil(Math.PI)); // gives the upper integer value - 4
console.log(Math.floor(Math.PI)); // gives the lower integer value - 3

console.log(Math.pow(2,4)); // it gives power value - 16
console.log(Math.min(2,0.3,5)); // returns the min value out of all values
console.log(Math.max(2,3,5.3)); // returns the max value out of all values

console.log(Math.random()); // gives any float number from range of [0,1)

// generate a random number between 1 to 10
console.log(Math.floor(Math.random() * 10)+ 1);

// Why floor not ceil - Math.random() returns a range from 0 to 1 that includes 0 but not 1
// Math.ceil has a chance of resulting in zero but
// Math.floor((Math.random()*10) + 1) will never



