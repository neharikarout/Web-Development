const http = require('http')
const fs = require('fs')
const url = require('url')

// the callback here is request listener. and is responsible for handling requests. req,res are request handlers
const myServer = http.createServer((req,res) => {
    // creating log
    // const log = `${Date.now()}: ${req.url} New Request Received \n`
    // fs.appendFile('log.txt',log,(err,data) => {
    //     res.end('hello ! from Server')
    // })

    // we can use that req.url
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Request Received \n`
    const myUrl = url.parse(req.url,true) // it will parse the url into string tokens

    fs.appendFile('log.txt',log,(err,data) => {
        switch(myUrl.pathname){
            case '/': res.end("Hello , from Server again");
            break;
            case '/about': 
            const username = myUrl.query.myname;
            res.end(` Hi , ${username}`);
            break;
            default:
                res.end("404 Not Found")

        }
    })


    //console.log(req)
    //console.log("New request received");
    // res.end('hello ! from Server')
});

// to run a server we need a port to listen.
// one port can have one server
myServer.listen(3000, () => console.log("Server Started"))


// why two requests everytime 
// for favicon browser req twice . you need not to worry


// always try to do non blocking task
// avoid cpu intensive tasks such as image processing as it leads to blocking task