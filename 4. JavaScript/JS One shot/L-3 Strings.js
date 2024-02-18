  // Strings 
const myVariable = "Mathematics";   //by const we cann't reassign value

   //String Methods

// length property - returns the length of string
console.log(myVariable.length);  //11

// charAt - returns the character at index
console.log(myVariable.charAt(6));  //a

//indexOf - returns the index of first character and first occurence
console.log(myVariable.indexOf("at"));  //1

//lastIndexOf - returns the index of first character at last occurence
console.log(myVariable.lastIndexOf("at")); //6

//slice - returns the sub string whose first and last index given as parameter 
console.log(myVariable.slice(5,8)); //mat
console.log(myVariable.slice(5)); //matics
console.log(myVariable.slice(5,2)); //returns nothing

// toUpperCase - returns all string in uppercase
console.log(myVariable.toUpperCase());

//toLowerCase - returns all string in lowercase
console.log(myVariable.toLowerCase());

// includes - returns boolean whether the substring present in the string or not
console.log(myVariable.includes("mat")); //true

//split - returns the strings from the character it got split
console.log(myVariable.split("e")); // "Math" , "matics"
console.log("god".split("")); // "g" , "o", "d"
console.log("John,Dav,Gray".split(",")); //"John" , "Dav" , "Gray"






