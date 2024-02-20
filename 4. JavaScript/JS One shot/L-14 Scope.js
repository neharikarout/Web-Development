// var , let and const - freecode camp documentation
//https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/

// KEYWORD	SCOPE   	        REDECLARATION & REASSIGNMENT	    HOISTING
// var	- Global, Local	            yes & yes	                    yes, with default value
// let	Global, Local, Block	    no & yes	                    yes, without default value
// const	Global, Local, Block	no & no	                    yes, without default value

var x=1; // var let you redeclare and reassign
var x=4; // It doesn't gives error on redeclaration 
console.log(x);

// But "let" doesn't let you re-declare only re-assignment

// Global Scope - declared outside functions
var x=2;
let y = 3;
const z = 4; // const doesn't let you reassign

// local scope - declared inside block or functions
{
    // block scope
    let y = 4;
}

// function scope
function myFunc()
{
    const z=5;
}

