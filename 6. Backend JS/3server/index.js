const express = require('express')

const app = express() // app : handler function

app.get('/' , (req,res) => {
    return res.send("Hello From HOMEPAGE")
})

app.get('/about', (req,res) => {
    if(req.query.mynamename === undefined && req.query.age === undefined) return res.send("Hello from ABOUT page")
    return res.send(` hey , ${req.query.myname} and your age is ${req.query.age}` )
})



// const myServer = http.createServer(app)

// myServer.listen(8000, () => console.log('Server Started'))

app.listen(8000, ()=> console.log("Server Started"))