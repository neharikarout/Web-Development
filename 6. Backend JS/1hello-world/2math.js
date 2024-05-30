function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

//module.exports = "maths"
//module.exports = add
//module.exports = sub // wrong as 'add' got overridden 

//1.
// export as object
// default export

//module.exports = {add , sub} // to use to function on other files you need to export


//2.
// multiple exports
exports.add = (a,b) => a+b; // returns same value
exports.sub = (a,b) => a-b;
// anonymous functions