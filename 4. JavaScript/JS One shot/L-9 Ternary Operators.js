// Conditionals : Ternary operators

// syntax 
// condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle soup";
let isCustomerBanned = false;

let response = isCustomerBanned ? "Sorry , no soup for you" : soup ? `Yes, we have ${soup}` : `Sorry , we are out of ${soup}`;

// let response = soup ? "Yes we have soup" : "No, We are out of soup" ;

console.log(response);
