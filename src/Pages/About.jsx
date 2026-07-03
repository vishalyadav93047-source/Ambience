import React from 'react'
import "./About.css"
import Footer from '../Components/Footer'
import Chooseus from '../Components/Chooseus'
import Students from '../Components/Students'
// import Nav from '../Components/Nav'
import Introduction from '../Components/Introduction'
import Mainnav from '../Components/Mainnav'

function About() {
  return (
    <>
    
        {/* <Nav/> */}
        <Mainnav/>
        <Introduction/>
        <Chooseus/>
        <Students/>
        <Footer/>
    </>
  )
}

export default About
