import React, { useState } from 'react'
import './Mainnav.css'
import { FaPhone, FaUser, FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Mainnav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>

      <img
        src="https://ambiencecomputereducation.com/img/event/Plant-Logo-New%20-%201%20-%20Edited.png"
        alt=""
        height="85px"
      />

      {/* Desktop Menu */}
      <ul className='ul'>

        <Link to={'/'} style={{ color: "black", textDecoration: "none" }}>
          <li>Home</li>
        </Link>

        <Link to={'/about'} style={{ color: "black", textDecoration: "none" }}>
          <li>About</li>
        </Link>

        <Link to={'/courses'} style={{ color: "black", textDecoration: "none" }}>
          <li>Course</li>
        </Link>

        <li>Photos</li>
        <li>Blog</li>

        <Link to={'/contact'} style={{ color: "black", textDecoration: "none" }}>
          <li>Contact</li>
        </Link>

      </ul>


      {/* Desktop Phone + Login */}
      <label className='phone'>
        <FaPhone />
      </label>

      <label className='login'>
        <FaUser /> LogIn
      </label>


      {/* Mobile Hamburger */}
      <button
        className='mobile-menu-button'
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>


      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>

        <button
          className='close-button'
          onClick={closeMenu}
        >
          <FaXmark />
        </button>


        <ul className='mobile-links'>

          <li>
            <Link to='/' onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to='/about' onClick={closeMenu}>About</Link>
          </li>

          <li>
            <Link to='/courses' onClick={closeMenu}>Courses</Link>
          </li>

          <li onClick={closeMenu}>Photos</li>

          <li onClick={closeMenu}>Blog</li>

          <li>
            <Link to='/contact' onClick={closeMenu}>Contact</Link>
          </li>

          <li className='mobile-phone'>
            <FaPhone />
          </li>

          <li className='mobile-login'>
            <FaUser />
            <span>LogIn</span>
          </li>

        </ul>

      </div>

    </nav>
  )
}