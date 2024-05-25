const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// got nodelist
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor= e.target.id; // grey
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor= e.target.id; // grey
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor= e.target.id; // grey
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor= e.target.id; // grey
        }
    });
})