const fs = require('fs')
const os = require('os')

// Sync..
//fs.writeFileSync('test.txt', "Hey, There!")
//fs.writeFileSync('./test.txt',"Hello World!")
// will override previous statement

// async
//fs.writeFile('./test.txt',"Hello World! async", (err) => {})

//const result = fs.readFileSync('./contact.txt','utf-8')
//console.log(result)


// if we are using without sync then giving error, 
//Also expects a callback and it does not return result like 'sync' one.

// fs.readFile('./contact.txt','utf-8',(err,result) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }
// })


// sync = returns something 
// async = returns nothing , expects a callback

// when we write function again it overrides previous one so to solve this we can use "append"

// fs.appendFileSync('./test.txt',`\n Hey There `)

//fs.cpSync('./test.txt','./copy.txt') // to copy
//fs.unlinkSync('./copy.txt') // to delete

// console.log(fs.statSync('./test.txt'))
// console.log(fs.statSync('./test.txt').isFile())

// mkdirSync = to make directory
//fs.mkdirSync('my-docs/a/b' , {recursive:true})
// it will make directory inside directory 
// my-docs -> a -> b




// ------------------------------------------------------------------------
//console.log('1')
// blocking request
// const result = fs.readFileSync('contact.txt','utf-8')
// console.log(result)
// console.log('2')

// It works in top to bottom . will wait till blocking request complete its task
//o/p : 1
// neharika rout = +91111111111
// 2

console.log('1')
// non blocking request
fs.readFile('contact.txt','utf-8',(err, result) => {
  console.log(result)
})
console.log('2')

// it will run as usual . it will not wait non blocking completes its request. gives result through callback
// o/p : 1
// 2
// neharika rout = +91111111111


console.log(os.cpus().length) // poolsize of your cpu : 16 


// By default : you have 4 threadpool size . Can you increase it .
// Max ? - 8 core cpu - 8




