const express = require("express")
const mongoose = require("mongoose")
const fs = require("fs")
const {logReqRes} = require("./middlewares")

const userRouter = require("./routes/user")
const {connectMongoDb} = require("./connection")


const app = express();
const PORT =  8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/app-1")
.then(() => console.log("mongodb connected"))

// Middlewares
app.use(express.urlencoded({extended : false}))
app.use(logReqRes("log.txt"))

// Routes
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))
