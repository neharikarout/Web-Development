const Name = "Neharika"
const repoCount = 50

console.log(Name + repoCount + "Value") // outdated

// string intercoalation i.e back ticks or string template
console.log(`Hello , My name is ${Name} and my repo count is ${repoCount} `)

// string object
const gameName = new String("Neharika-Rout-com")
// functions for string object
console.log(gameName.length)
console.log(gameName.charAt(6))
console.log(gameName.__proto__)
console.log(gameName.indexOf('h'))

// string is immutable as it is a primitive type stored in stack memory

const newString = gameName.substring(0,4)
console.log(newString) // excluding 4th index

const anotherString = gameName.slice(-6,0) // can give negative and it starts with end
console.log(anotherString)

const newS = "     Neharika    "
console.log(newS)
console.log(newS.trim()) // trim the white spaces

const url = "https://neharika.com/neharika%20rout"

console.log(url.replace('%20', '-')) 

console.log(url.includes('neha'))


console.log(gameName.split('-'))

