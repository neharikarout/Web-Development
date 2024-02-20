// Functions : Provide reusable code

// Methods = Built-in functions 

"Neharika".toLowerCase();
Math.random();

// functions are user defined 

// function sum(num1, num2)
// { 
//     if(num2 === undefined){
//         return num1 + num1;
//     }
//     console.log(num1);
//     console.log(num2);  //undefined
//     return num1 + num2;  // NaN
// }

// console.log(sum(2));


// Anonymous function

// const getUserNameFromEmail = function(email)
// {
//     return email.slice(0,email.indexOf("@"));
// }


// Arrow Function

// const getUserNameFromEmail = (email) =>
// {
//     return email.slice(0,email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("playerOne@gmail.com"));


const toProperCase = (Name) => {
    return Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase();
};

console.log(toProperCase("nehAriKA"));