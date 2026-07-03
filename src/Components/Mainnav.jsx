import React from 'react'
import './Mainnav.css'
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Mainnav() {
  return (
    <nav>
      <img src="https://ambiencecomputereducation.com/img/event/Plant-Logo-New%20-%201%20-%20Edited.png" alt="" height='85px' />


      <ul className='ul'>
        <Link to={'/'} style={{color:"black", textDecoration:"none"}}><li>Home</li></Link>
        <Link to={'/about'} style={{color:"black", textDecoration:"none"}}><li>About</li></Link>
        <Link to={'/courses'} style={{color:"black", textDecoration:"none"}}><li>Course</li></Link>
        <li>Photos</li>
        <li>Blog</li>
        <Link to={'/contact'} style={{color:"black", textDecoration:"none"}}><li>Contact</li></Link>
        
      </ul>

      <label className='phone'><FaPhone /></label>
      <label className='login'><FaUser />  LogIn</label>


    </nav>
  )
}
