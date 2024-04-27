const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros) // push into the existing array

// console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) //flash

// const all_heros = marvel_heros.concat(dc_heros) // combines elements of two arrays into new array
// console.log(all_heros) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// // Spread operator

// const all_new_heros = [...marvel_heros, ...dc_heros] // it all add all elements to the new array
// console.log(all_new_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array = [1,2,3,[4,5,6],7,[6,7,[1,2]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 1, 2 ]


console.log(Array.isArray("Neharika")) //false

console.log(Array.from("Neharika")) //['N', 'e', 'h','a', 'r', 'i', 'k',a'  ]

console.log(Array.from({name : "neharika"})) // []  Intersting 

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1,score2 , score3)) //[ 100, 200, 400 ] made array


