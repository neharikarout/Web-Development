// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("DB  CONNECTED");
// }

// chai()

// if we want to invoke immediately ;
// wrap function inside the parenthesis 
// ()() = one for wrapping function and another to call

(function chai(){
    // named iife
    console.log("DB  CONNECTED");
})();

// sometimes we have problem for global scope pollution ; so to remove from that we use iife

( (name) => {
    // anonymus iife or unnamed iife
    console.log(`DB CONNECTED ${name}`) // giving error
})('neharika'); // parameterizeds

// sometimes this iife doesnot know where to end this function so it is must to end the function with semicolon.