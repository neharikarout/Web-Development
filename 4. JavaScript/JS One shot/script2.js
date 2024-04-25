console.log("Neharika")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="red"

document.getElementById("red").style.backgroundColor="red"

document.querySelector(".box").style.backgroundColor="green" //selects the first element and returns

console.log(document.querySelectorAll(".box")) // it will return collection items of node list of box class 

//use of for each

document.querySelectorAll(".box").forEach(e=>e.style.backgroundColor="green")

e = document.getElementsByTagName("div")

console.log(e[4].matches("#red"))

console.log(e[3].closest("html"))

console.log(document.querySelector(".container").contains(e[0]))