// for of 

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1,2, 3, 4, 5]

for (const num of arr){
    //console.log(num)
}

const greetings = " Borahae"

for(const greet of greetings){
   // console.log(`Each char is ${greet}`)
}

// Maps : object that holds key value pairs ; ordered ;  unique values

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('KOR', "Republic of Korea")

console.log(map)

for(const key of map){
    console.log(key)
} // for only keyss

for(const [key , value] of map){
    console.log(`${key} := ${value}`)
} // destructuring of map 


const myObject = { // not iteratable unlike maps
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for(const [key , value] of myObject){
//     console.log(`${key} := ${value}`)
// }
