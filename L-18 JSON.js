// JSON : Javascript Object Notation

/* 
JSON  is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & receive data in many languages
... not just in javascript.
*/

const myObj = {
    Name : "Neharika",
    hobbies : ["eat","sleep","code"],
    hello : function(){
        console.log("Hello!");
    }
};

console.log(myObj);
console.log(myObj.Name);
myObj.hello();
console.log(typeof myObj);

const SendJSON = JSON.stringify(myObj); // takes only key value pairs and convert into JSON 
console.log(SendJSON);
console.log(typeof SendJSON); //string
console.log(SendJSON.name); // now they are no longer JS objects they are strings o/p : undefined

const receiveJSON = JSON.parse(SendJSON); // convert it back into JS object
console.log(receiveJSON); // we lost our function as stringify has not taken function only key value pairs
console.log(typeof receiveJSON);
