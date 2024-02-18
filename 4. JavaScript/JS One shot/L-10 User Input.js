// User input 
// alert(" Hello! ");

// let myBoolean = confirm("Ok === True\nCancel === False ")
// console.log(myBoolean);

let Name = prompt("please enter your name.");
// console.log(Name);
// if you click ok without entering anything then it will be considered as string
console.log(Name ?? "You didn't enter your name.") //if you cancel and the data is null or undefined