require('dotenv').config()
const express = require("express");
// import express from "express"

const app = express(); // very powerful variable
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res) => {
    res.send('neharikaroutdotcom')
})

app.get('/login',(req,res) => {
  res.send('<h1> Server Created Successfully</h1>')
})

app.get('/youtube',(req,res) => {
  res.send('<h2> youtube app </h2>')
})

// using .env variable
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
