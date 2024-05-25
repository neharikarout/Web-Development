const clock = document.getElementById('clock')



// now we will get values after every one second
setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
} , 1000)