// const redditUser = new Object() // singleton object

const redditUser = {} // not a singleton object

redditUser.id = "123abc"
redditUser.name = "Ian"
redditUser.isLoggedIn = false

// console.log(redditUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullname:{
            firstName : "Neharika",
            lastName :"Rout"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName) // Neharika
// what if any object is missing in this chaining to check this we put ternaryoperator
// console.log(regularUser.fullName?.userFullname.firstName)

const obj1 = {
    1:"a" , 2:"b"
}
const obj2 = { 3:"a" , 4:"b"}


// const obj3 = {obj1,obj2} // object inside object 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({} /*optional parameter  i.e target*/ , obj1 , obj2 ) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1 , ...obj2} //spread operator

// console.log(obj3)




// Array of objects

const users = [
    {
        id : 1,
        email : "nr@gmail.com"
    },
    {
        id : 1,
        email : "nr@gmail.com"
    },
    {
        id : 1,
        email : "nr@gmail.com"
    }

]

// console.log(users[1].email) // accessing array of objects : nr@gmail.com


// console.log(redditUser)

// console.log(Object.keys(redditUser)) // very imp to know the keys : [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(redditUser)) // [ '123abc', 'Ian', false ]
// console.log(Object.entries(redditUser)) //[ [ 'id', '123abc' ], [ 'name', 'Ian' ], [ 'isLoggedIn', false ] ]

// console.log(redditUser.hasOwnProperty('isLoggedIn')) // to check whether this property exists in the object






//              Destructuring of objects
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course

// can name on your own 

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);



// const navbar = (props.company) => {

// }

// navbar(company= "hitesh")

// instead of this we do this in react

// const navbar = ({company}) => { // destructuring
  
// }
// navbar(company = "hitesh")


// object in Api comes in form of JSON format

// {
//     "name": "Neharika",
//     "courseName" : "js in hindi",
//    " price": "free"
// }

// one api url : https://api.github.com/users/neharikarout

// sometimes api comes in array format ; and array has many objects .
// so first destructure array then object

// tools json formatter