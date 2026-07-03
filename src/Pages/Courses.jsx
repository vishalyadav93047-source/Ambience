import React from 'react'
import "./Courses.css"
// import Nav from '../Components/Nav'
import Populercourse from '../Components/Populercourse'
import Footer from '../Components/Footer'
import Register from '../Components/Register'
import Chooseus from '../Components/Chooseus'
import Mainnav from '../Components/Mainnav'

function Courses() {
  return (
    <div>
      {/* <Nav/> */}
      <Mainnav/>
      <Populercourse/>
      <Register/>
      <Chooseus/>
      <Footer/>
    </div>
  )
}

export default Courses
