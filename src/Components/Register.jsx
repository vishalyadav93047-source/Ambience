import React from 'react'
import './Register.css'

function Register() {
  return (
    <>
      <div className='Register'>
        <div className='Register1'>
          <div className='Register4'>
            <h1>Register Now</h1>
            <p>Your time is valuable, your dreams are real, and your growth matters. Register now and take control of your path. With the right guidance and training, you won’t just learn—you’ll evolve. Your journey to success starts with this simple choice. Make it today.</p>

            <div className='Register3'>
              <div className='grade0'>
                <h1>1500+</h1>
                <p>Students</p>
              </div>

              <div className='grade7'>
                <h1>15+</h1>
                <p>Courses</p>
              </div>

              <div className='grade1'>
                <h1>10+</h1>
                <p>Accreditations</p>
              </div>

              <div className='grade8'>
                <h1>900+</h1>
                <p>Certified</p>
              </div>
            </div>
          </div>


          <div className='Register2'>
            <div className='Register2text'>
              <h3>Fill to get Offers</h3>
              <p>It is high time for learning</p>
            </div>

            <div className='textphone'>
              <div className='name'>
                <input type="text" placeholder="Your Name" />
              </div>

              <div className='phone'>
                <input type="text" placeholder="Your Phone Number" />
              </div>

              <div className='email'>
                <input type="text" placeholder="Your Email Address" />
              </div>
            </div>

            <div className='registerbutton'>

              <button className='registerbutton1'> SUBMIT </button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
