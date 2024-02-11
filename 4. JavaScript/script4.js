console.log(document.body)
console.log("Neharika Rout")

let div = document.createElement("div")
div.innerHTML = "I have been inserted <b>by Neharika<b> "
div.setAttribute("class","created");
document.querySelector(".container").append(div);
