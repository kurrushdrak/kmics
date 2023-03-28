import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Courses from './Courses'
import Home from './Home'
import Services from './Services'

export default function Navbar() {
  return (
    <div className="container" >
        
      <BrowserRouter>
      <ul>
        
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/courses' target="_blank">Courses</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
      <Routes>
        <Route path='/home' element={< Home/>}/>
        <Route path='/Service' element={< Services/>}/>
        <Route path='/courses' element={< Courses/>}/>
        <Route path='/about' element={< Aboutus/>}/>
        <Route path='/contact' element={< Contactus/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  )
}
