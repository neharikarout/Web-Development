// DOM Tree

//       Window
//          |
//       Document
//           |
//          Html 
//         /     \
//     Head       Body
//     /   \           \
//  title  meta          div
//    |      |        /       \
//   text  attribute  h1       p
//   node             / \       \
//              text   attribute text node
//              node


// innerHtml vs innerText vs textContent

// innerText : only shows the text which is visible in the page . if you set disPlay "none " in any of the text then it will not show that part

// textContent : shows all text whether its visible or not on the page

// innerHtml : it returns html values inside that element also not only text


//querySelector : returns the first element that matches the query
document.querySelector('.heading') // get class
document.querySelector('#title') // get id
document.querySelector('input[type="password"]')


const myul = document.querySelector('ul')
const item = myul.querySelector('li')
item.style.backgroundColor="green"



// node list has not map() function
tempList = document.querySelectorAll("li") // returns all elements in node list
// it is somewhat different from array but has some functionality like array
tempList.style.color="green" // not applicable
tempList[0].style.color="green" // now applicable to first element


tempList.foreach(function(l) {
    l.style.backgroundColor = 'green'
}) // to apply to all elements at once



const tempClassList = document.getElementsByClassName('list-item') // return all elements in html collection

// it has no method to apply loop


// so we have to convert it to array
Array.from(tempClassList)

const myConvertedArray = Array.from(tempClassList)

myConvertedArray.forEach(function(li){
    li.style.color= "orange"
})
