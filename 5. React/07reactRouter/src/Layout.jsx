import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// now we want to pass the components dynamically use Outlet from react-router

// outlet will use this as base and wherever you put outlet we can change it there . In this we have given in between that means we can change in b/w but not header and footer

function Layout() {
  return (
    <div>
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
    </div>
  )
}

export default Layout
