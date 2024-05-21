//const coding = ["js" , "py" , "java" , "ruby" , "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// }) // it does not return anything,

// console.log(values) // undefined


const myNums = [1,2,3,4,5,6,7,8,9,10]

// it returns values
// const newNums = myNums.filter( (num) => num>4) // implicit return

// const newNums = myNums.filter( (num) => {
//     return num>4 
// }) 
//console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ]

//but if you write function in more than one line than you have to write return 


// same work through forEach function

// const newNums = []

// myNums.forEach( (num) =>{
//  if(num > 4){
//     newNums.push(num)
//  }
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === "History")
  userBooks = books.filter( (bk) => bk.publish >= 2000)
  userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
}
)

  console.log(userBooks)