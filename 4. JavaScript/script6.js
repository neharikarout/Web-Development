console.log("Harry is a hacker")  // synchronous function
console.log("Rohan is a hecker")

setTimeout(() => {                      // asynchronous function
    console.log("I am inside setTimeout")
},2000);

setTimeout(() => {
    console.log("I am inside setTimeout2")
},2000);

console.log("The End")



// CALLBACK FUNCTION

const fn = () => {
    console.log("Nothing")
  }
  
//   const callback = (arg, fn) => {
//       console.log(arg)
//       fn()
//   }
  

const callback = (arg)=>{
    console.log(arg)
}

const loadScript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Neharika");
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
