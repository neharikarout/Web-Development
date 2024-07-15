let progress = document.querySelector("#progress")
let h3 = document.querySelector("h3");


h3.style.display = "none";

let count = 0;
let int = setInterval(function(){
    if(count === 100) {
        h3.style.display = "block";
        clearInterval(int);
    }
    count++;
    progress.style.width = count+'%';
}, 50 )

h3.style.display = "none";