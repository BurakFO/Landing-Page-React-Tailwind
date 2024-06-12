import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>

      </Routes>
    </>
  )
}

export default App
