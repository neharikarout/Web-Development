// for loop 

for (let index = 0; index <= 10; index++) {
    const element = index;
    //if(element == 5) console.log("5 is best number")
    //console.log(element)
    
}

for(let i = 0 ; i<=10 ; i++){
   // console.log(`Outer loop : ${i}`)
    for(let j = 0 ; j<=10;j++){
       // console.log(`Inner loop value ${j} and inner loop is ${i}`)
    }
}

let myArray = ["Hwan", "Cein" , "Hosu" , "Dogeun"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}
// js has no out of bound exception so if go out of array bound give undefined


// break and continue

for (let index = 0; index <= 20 ; index++) {
    if(index == 5){
        console.log('detected 5')
        // break; // run out of loop
        continue; // skips the following iteration
    }
    console.log(index)
    
}