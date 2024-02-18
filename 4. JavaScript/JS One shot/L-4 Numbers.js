// Numbers

const myNumber = 42; //integer is a whole number

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0;

const myString  = "42.123abc";

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat); //true
console.log(myString + myNumber);  //423  - concatenate
console.log(Number(myString) + 3);  // converting string to number and ans is 45
console.log(Number(myString) === myNumber); //true
console.log(Number("Neharika")); //NaN - not a number


// Number Methods

// Number.isInteger() method determines whether passed value is an integer
console.log(Number.isInteger(myNumber)); //true

// The Number.parseFloat() method parses an arguement and returns a floating point number. If a number cannot be parsed from the arguement , it returns NaN

console.log(Number.parseFloat(myString));   //42.123 - converts the string to number and omits alphabets

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.

console.log(Number.parseFloat(myString).toFixed(2)); //42.12

// the toString() method returns a string representing the number.

console.log(typeof Number.parseFloat(myString));

// chaining - Using several methods chained together

console.log(Number.parseFloat("4.23abc").toFixed(2).toString());


// The Number.isNaN() determines whether the passsed value is NaN and its type is Number.

console.log(Number("Neharika")); //NaN
console.log(Number.isNaN(myNumber)); // false

// global isNaN() tells whether parameter is NaN or not
console.log(isNaN("Neharika"));

console.log(Number.isNaN("Dav"));
