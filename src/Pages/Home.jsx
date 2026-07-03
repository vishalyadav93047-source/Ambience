import React from 'react'
import Mainnav from '../Components/Mainnav'
import './Home.css'
import Skills from '../Components/Skills'
import Chooseus from '../Components/Chooseus'
import { TbMarquee } from 'react-icons/tb'
import Footer from '../Components/Footer'
import Register from '../Components/Register'
import Students from '../Components/Students'
import Teacher from '../Components/Teacher'
import Scroll from '../Components/Scroll'
import Populercourse from '../Components/Populercourse'



function Home() {
  return (
    <>
    <div className='hero'>
        <Mainnav/>



        

        <h2>BEST COMPUTER INSTITUTE IN JAITPUR</h2>
        
      <div className='button'>
        <button className='button1'>VERIFY CERTIFICATE</button>
        <button className='button2'>SEE COURSE</button>
      </div>




      <Skills/>
      <Scroll/>
      <Populercourse/>
      <Register/>
      <Teacher/>
      <Students/>
      <Footer/>


      
    </div>
    
    </>
  )
}

export default Home
