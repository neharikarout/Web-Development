let button = document.getElementById("btn")


button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked</b> Enjoy your click"
})


button.addEventListener("dbl click",()=>{
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked</b> Enjoy your click"
})

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})