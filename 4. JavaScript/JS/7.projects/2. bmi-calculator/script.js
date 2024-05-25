const form = document.querySelector('form')

// if you will write here then when scripts will run it will store empty values in these variables
// const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    // getting values when submited
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }

    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }

    else{
        const bmi = (weight / ((height*height)/10000).toFixed(2))
        // show the result

        if(bmi < 18.6){
            results.innerHTML= `<span>Your bmi: ${bmi}. <br>You are under weight </span>`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML = `<span>Your bmi: ${bmi}. <br>You are in normal range </span>`
        }
        else{
            results.innerHTML= `<span>Your bmi: ${bmi}.<br> You are over weight </span>`
        }
    }

})