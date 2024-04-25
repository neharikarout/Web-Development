// async await >> promise chains >> callback hell

//synchronous programming
// console.log("one");
// console.log("two");
// console.log("three");

//asynchronous programming

// function hello()
// {
//     console.log("hello!");
// }

// setTimeout(hello,4000); // timeout function let us decide after how many miliseconds we want to run our function

// We can make arrow function inside setTimeout too

// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(() => {              // asynchronous function
//     console.log("Hello!");
// },2000);
// console.log("four");
// console.log("five");

// function sum(a,b){
//     console.log(a + b);
// }

// function calculator(a,b,sumCallback){
//     // sumCallback is a callback function which means it passed as parameter to another function
//     // pass without parenthesis
//     sumCallback(a,b);
// }

// // can make arrow function in parameter area too
// calculator(1,2,(a,b) => {
//     console.log(a+b);
//   });

// calculator(1,2,sum);

// const hello = () => {
//   console.log("hello");
// }

// setTimeout(hello,3000); // hello passed as callback

// CALLBACK HELL : nesting of callbacks

// nesting
// let age = 19;
// if(age >= 18)
// {
//     if(age >= 60)
//     {
//         console.log("senior");
//     }
//     else{
//         console.log("middle");
//     }
// }
// else{
//     console.log("child");
// }

// function getData(dataId){
//     // 2s
//     setTimeout(() => {
//     console.log("data",dataId);
//     },2000);
// }

// function getData(dataId, getNextData) {
//   // 2s
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
//  }

// getData(1);
// getData(2);
// getData(3);  // came all together but we needed one by one after 2s delay

// data1
//data2
//data3

// getData(1, getData(2)); // cannot pass it like this as it is executes as soon as this line executes even faster than getData 1

// getData(1, () => {    // passed as callback
//     console.log("getting data 2...");
//   getData(2, () => {
//     console.log("getting data 3...");
//     getData(3); // now they will come after one by one with 2s delay
//   });
// });

//          this is what callback hell is or pyramid doom as it create a pyramid like structure

// To solve the problem of callback hell PROMISES came to rescue

//              PROMISES

//Promises are "eventual" completion of task.
// It is an object in JS.
// It is a solution to callback hell

// let promise = new Promise((resolve,reject) => {
//   console.log("I am a promise");
// //   resolve("sucess");
// reject("some error occured");
// });

// console.log(promise);

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("data", dataId);
//         resolve("sucess");
//         if(getNextData){
//             getNextData();
//         }
//       },5000);
//     });
// }

// use of promise

// const getPromise = () => {
//   return new Promise ((resolve,reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject(" Network error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => { // res is a message that is passed to resolve as parameter
//   console.log("promise fulfilled",res)
// });

// promise.catch((err) => { //err is a message that is passed to resolve as parameter
//   console.log("rejected",err);
// });

// PROMISE CHAINING

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(" data 1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(" data 2");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("fetching data 1 ....");

// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data 2 ....");

// let p2 = asyncFunc();
// p2.then((res) => {
//   console.log(res);
// });

// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log("fetching data 2 ....");
//   let p2 = asyncFunc2();
//   p2.then((res) => {});
// });

// asyncFunc().then((res) => {
//   console.log("fetching data 2 ....");
//   asyncFunc2().then((res) => {});
// });


// getData(1).
// then((res) => {
//   return getData(2);
// })
// .then((res) => {
//   console.log(res);
// });








//        ASYNC - AWAIT

// async function hello(){   // returns promise
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200); // 200 : success
//         },2000);
//     });
// }

// // await api();  // wait for async function api

// async function getWeatherData(){
//     await api(); // 1st 
//     await api(); //2nd
// }


function getData(dataId)
{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
      },2000);
    });
}

async function getAllData(){
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
}



//  IIFE : immediately invoked function expression

(async function (){
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
}) ();