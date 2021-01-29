import React from "react"
import NavBar from "./nav-bar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)
