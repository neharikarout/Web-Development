// settle means resolve or reject
// resolve means promise has setteled successfully 
// reject means promise has not setteled successfully

async function getData() // returning promise
{
    // Simulate getting data from a server
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(455)
        },3500);
 
    })
}

// async function getData()
// {
//     // Simulate getting data from a server
//      let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//      let data = await x.json()
//      console.log(data)
// }

async function getData()
{
    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = x.json()
    return data
        
}
async function main()
{
    console.log("Loading modules")

    console.log("Do something else")
    console.log("Load data")

    let data =  await getData() // waiting for promise to resolve

    console.log(data)
    console.log("process data")

    console.log(" task 2")
}

main()

//     data.then((v) => {
//       console.log(data)
//       console.log("process data")

//     console.log(" task 2")
//  })

