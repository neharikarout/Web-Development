// Javascript Errors and Error Handling
"use strict";    // strict mode 

// variable = "Neharika"; // it still works ,after strict mode it giving errors

// const variable = "Neharika";
// console.log(variable);

// Object..create();  // syntax error can be caught 

// const Name = "Neharika";
// Name = "Dave";

// const makeError = () => {
//   try {
//     const Name = "Neharika";
//     Name = "Dave"; 
//   }
//   catch(err) {
//     // console.log(err); // err : catch Id
//     // console.warn(err);
//     console.error(err);
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);
//     // console.table(err);
//   }
// };


// const makeError = () => {
//   try {
//     throw new Error("This is a custom error!");  // still runs if function customError is removed.
//   }
//   catch(err) {
//     console.error(err.name);
//     console.error(err.name);
//     console.error(err.stack);
//   }
// };


const makeError = () => {
    let i = 1;
    while(i <= 5) {
      try {
        if(i % 2 !== 0){
            throw new Error("Odd number");
        }
        console.log("Even number");
      }
      catch(err) {
        console.error(err.stack);
      }
      finally{
        console.log(" ...finally");
        i++;
      }
    }
    };
makeError();

// function customError(message){
//     this.message = message;
//     this.name = "custom Error";
//     this.stack = ` ${this.name} : ${this.message} `;
// }


