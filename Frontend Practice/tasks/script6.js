let home = document.querySelector("#home");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

let homeText = document.querySelector("#homeText");
let aboutText = document.querySelector("#aboutText");
let contactText = document.querySelector("#contactText");

homeText.style.display = "block";
homeText.style.width = "50%";


home.addEventListener("click",function(){
    removeAllText();
    homeText.style.display = "block";
    homeText.style.width = "50%";
})

about.addEventListener("click",function(){
    removeAllText();
    aboutText.style.display = "block";
    aboutText.style.width = "50%";

})

contact.addEventListener("click",function(){
    removeAllText();
    contactText.style.display = "block";
    contactText.style.width = "50%";
})


function removeAllText(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}