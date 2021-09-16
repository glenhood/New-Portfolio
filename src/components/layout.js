import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"




const Layout = ({ children }) => {
  return (
    
    <>
      <main>
      <Navbar></Navbar>
        {children}
      </main>
    </>
    
  )
}
export default Layout
