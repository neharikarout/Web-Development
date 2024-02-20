// Arrays 

// const myArray = [];

// // add elements to an array

// myArray[0] = "Neharika";
// myArray[1] = 1001;
// myArray[2] = false;

// // refer to an array
// console.log(myArray);

// // length property 
// console.log(myArray.length);

// // last element in an array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);

// // push element - inserting element at the end of the array
// myArray.push("school");

// console.log(myArray);

// // pop element - remove from front
// myArray.pop();

// console.log(myArray);

// // unshift - inserting element at the beginning

// myArray.unshift(43);

// console.log(myArray);

// // shift - remove from the beginning

// myArray.shift(43);

// console.log(myArray);

// // removing element from middle

// delete myArray[1]; // it doesn't remove the position it just delete the data and on accesing that place gives undefined

// // not recommended

// console.log(myArray);
// console.log(myArray[1]);

// myArray.splice(1,1,42); // used to remove or replace 
// // splice(no. of elements to be deleted, start index, replace element)
// console.log(myArray);
// console.log(myArray[1]);

//                Array methods

const myArrayA = ['A', 'B', 'C'];
const myArrayB = [ 'D', 'E', 'F'];

// const newArray = myArray.slice(2,5);
// console.log(newArray);

// myArray.reverse();
// console.log(myArray);

// const newString = myArray.join();
// console.log(newString);

// const newArray = newString.split(",");
// console.log(newArray);

// const newArray = myArrayA.concat(myArrayB);
// console.log(newArray);


//       Spread operator

const newArray = [...myArrayA, ...myArrayB];
const newArray2 = [myArrayA, myArrayB];

console.log(newArray);
console.log(newArray2);


//           NESTED ARRAYS

// const newArray2 = [myArrayA, myArrayB]; // ['A', 'B', 'C', 'D', 'E', 'F']
console.log(newArray2[0][1]); //B 2D array












