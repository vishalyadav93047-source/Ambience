import React from 'react'
import "./Chooseus.css"
import { FaGraduationCap } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";


function Chooseus() {
  return (
    <>
      <div className='Chooseus'>

        <div className='Chooseus1'>
          <div className='text'>
            <h3>Why Choose us?</h3>
          </div>
          <div className='text2'>
            <p>“Your journey to innovation starts here - where passion meets<br />technology and learning transforms in success"</p>
          </div>
        </div>

        <div className='Choose'>
          <div className='Choose1'>
            <div className='icon1'>
              <FaGraduationCap />
            </div>
            <div className='Choosetext'>
              <h3>Best Faculty</h3>
              <p>Ambience provides top faculty focused on skill development and student achievement.</p>
            </div>
          </div>

          <div className='Choose1'>
            <div className='icon1'>
              <SlBookOpen />
            </div>
            <div className='Choosetext'>
              <h3>Best Study Material</h3>
              <p>Well-structured study material helps students understand concepts easily and score better.</p>
            </div>
          </div>

          <div className='Choose1'>
            <div className='icon1'>
              <FaGlobe />
            </div>
            <div className='Choosetext'>
              <h3>National Level certification</h3>
              <p>Get nationally certified and stand out with trusted, government-recognized qualifications.</p>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default Chooseus
