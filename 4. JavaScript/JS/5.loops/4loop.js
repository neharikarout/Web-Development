const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    py: "python"
}

for(const key in myObject){
    console.log(`${key} extension for ${myObject[key]}`)
}

// for in : for array

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for(const key in programming){
    console.log(key) // keys
    console.log(programming[key])
}

// unlike simple for loops where it was giving values here for in is returning keys of array values


// in maps the for in loops is not iteratable