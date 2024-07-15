let input = document.querySelector("input");

let data = [
    {name: "harsh" , src: "img/ami.png"},
    {name: "harshita" , src: "img/ami.png"},
    {name: "namjoon" , src: "img/ami.png"},
    {name: "seokjin" , src: "img/ami.png"},
    {name: "hoseok" , src: "img/ami.png"},
    {name: "yoongi" , src: "img/ami.png"},
    {name: "jimin" , src: "img/ami.png"},
    {name: "taehyung" , src: "img/ami.png"},
    {name: "jungkook" , src: "img/ami.png"}, 
]

let person = '';

data.forEach(function(elem){
    person += ` <div class="person">
            <div class="img">
                <img src= ${elem.src}>
            </div>
            <h4>${elem.name}</h4>
        </div>` ;
})


document.querySelector(".people").innerHTML = person;

// searching 

let matching ;

input.addEventListener("input",function(){
    matching = data.filter(function(elem){
        return elem.name.startsWith(input.value);
    })
    
    let newusers = "";

matching.forEach(function(elem){
    newusers += ` <div class="person">
            <div class="img">
                <img src= ${elem.src}>
            </div>
            <h4>${elem.name}</h4>
        </div>` ;
})
   
document.querySelector(".people").innerHTML = newusers; 
})


