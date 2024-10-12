// //const http = require("http");
// import http from "http";
// //import {name,surname} from "./import.js";
// import * as myObj from "./import.js";


// // exported from file module
// //console.log(name + surname);  - destructured already
// console.log(myObj.name + myObj.surname);// - destructured Here


// const server = http.createServer((req,res) => {
//     if(req.url === "/"){
//         res.end("<h1>Homepage</h1>");
//     }

// })

// server.listen(5000, () => {
//     console.log("Server started and listening");
// })


// express
import express from "express";
import path from "path";


// 1. server creation
const app = express()

// setting up view engine for ejs
app.set("view engine", "ejs");

// setting up for public static file and app.use to use middleware
app.use(express.static(path.join(path.resolve(),"public")));


// 3. using methods and paths
app.get("/",(req,res) => {
    //res.send("Hi"); // send text
   // res.end("<h1> everyone </h1>") // send html as response
   // res.json({message : "hey" }); // send json
   //res.statusCode(200);

   // chaining
   //res.statusCode(200).json({sucess : "true"});

   // getting path of file and sending file
   //const pathlocation = path.resolve();

   //res.sendFile(path.join(pathlocation,"./index.html"));

   // update html from backend - ejs
   // for using this make views folder and inside that index.html
  // res.render("index", {name : "Neharika"} ); // sending object(locals) from server

    res.sendFile("index"); // sending public static file
    // if you want to add css,js to ejs files or any other keep it in public folder to make them work
    // public is accessible globally
   
})

// 2. server listening
app.listen("5000",() => {
    console.log("server started");
})
 