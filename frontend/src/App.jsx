import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact';
// import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
    </Router>
    // <div>
    //   <Navbar />
    //   <Home />
    //   <About />
    // </div >
  )
}

export default App
