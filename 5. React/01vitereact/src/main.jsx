import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//    href : 'https://google.com',
//    target:'_blank'
//   },
//   children: 'Click me to visit google'

// }     it is a custom object thats why not running

// const anotherElement = (
//   <a href="https://google.com" target='_blank'> 
//   Visit Google
//   </a>
// ) 

const  anotherUser = " chai or react";


const ReactElement = React.createElement( //inject by babel
  'a',
  {href:'https://google.com',target:'_blank'}, 
  'click me to visit google', //children
  anotherUser //evaluated expressiom
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // anotherElement 
    //MyApp()
    ReactElement
    // <App/>
  
)
