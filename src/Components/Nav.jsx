import React from 'react'
import "./Nav.css"
import { FaPhone } from "react-icons/fa6";
import image from "../assets/image.png";


function Nav() {
  return (
    <>
    <div className='nav'>
     <nav className='nav0'>
      {/* <div className='nav0'> */}
          <img src="https://ambiencecomputereducation.com/img/event/Plant-Logo-New%20-%201%20-%20Edited.png" alt="" height='85px' />
    
    
          <ul className='navul'>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Photos</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
    
          <label className='phone1'><FaPhone /></label>
         
    
    

            <div className='nav2'>
              <h2>About Us</h2>
              <p>Home / About Us</p>
            </div>
            {/* </div> */}
        </nav>

        </div>


       
        </>
  )
}

export default Nav
