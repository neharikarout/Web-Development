import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader} from './components/Github/Github.jsx'



// when we use router then we need RouterProvider component and it takes one prop router and now we will make that
//createBrowserRouter is a function provided by router

// const router = createBrowserRouter([
//   {
//     path: '/',// top level element
//     element : <Layout/> ,// the nesting elements inside that it will render
//     //it has more element inside layout so to render them will use children 
//     children : [
//       {
//       path:"",
//       element: <Home/>
//       },
//     {   path:"about",
//         element: <About/>
//     },
//     {   path:"contact",
//     element: <Contact/>
//     },
// ]}
// ])

//another method to do above routing
// the userid which you are giving after colon note it down it is important (dynamic values)
// we can nest route elements

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>} /> 
       <Route path='about' element={<About/>}>
         <Route path='abc' element={<Home/>}/> 
       </Route>
       <Route path='contact' element={<Contact/>} />
       <Route path='user/:userid' element={<User/>} />
       <Route
       loader={githubInfoLoader}
        path='github' element={<Github/>} /> 
    </Route>
  )
)
// loader is an optimized approach to fetch from api even faster than useEffect as when you hover over that component it starts fetching even before useEffect
// you can call api here through callback

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
