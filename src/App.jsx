import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Mainnav from './Components/Mainnav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'
// import Footer from './Components/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Mainnav /> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/courses' element={<Courses/>}/>
        </Routes>
        {/* <Footer/> */}
      
    </>
  )
}

export default App
