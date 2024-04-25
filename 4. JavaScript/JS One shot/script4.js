console.log(document.body)
console.log("Neharika Rout")

let div = document.createElement("div")
div.innerHTML = "I have been inserted <b>by Neharika<b> "
div.setAttribute("class","created");
document.querySelector(".container").append(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")