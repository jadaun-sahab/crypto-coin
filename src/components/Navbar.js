import React from 'react'
import "../style/navbar.css";
import { Link } from 'react-router-dom';
import React1, { useState } from 'react';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };
  return (
    
    <>
      <div id="navbar">
     
          <div className='navbar'>
               <div id="logo">CRYPTIC</div>
               <div className={`navbar2 ${isActive ? 'active' : ''}`}>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Market">Market</Link></li>
                    <li><Link to="/Whychoose">Why Choose us</Link></li>
                    <li><Link to="/join">Join us</Link></li>
               </div>
               <div className={`nav3 ${isActive ? 'active' : ''}`}>
                    <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fa-solid fa-gamepad"></i></a></li>
               </div>
          </div>
          <i className="fa fa-bars" onClick={handleToggleClick}></i>
      </div>
    </>
  )
}
