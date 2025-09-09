import React from 'react'
import Navbar from "../src/components/Navbar/Navbar.jsx"
import Footer from '../src/components/Footer/Footer.jsx'



const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
      {children}
        <Footer/>
    </div>
  )
}

export default MainLayout
