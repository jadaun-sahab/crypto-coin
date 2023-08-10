import React from 'react'
import "../style/navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    
    <>
      <div id="navbar">
          <div className="navbar">
               <div id="logo">CRYPTIC</div>
               <div id="ul">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Market">Market</Link></li>
                    <li><Link to="/Whychoose">Why Choose us</Link></li>
                    <li><Link to="/Join">Join us</Link></li>
               </div>
               <div id="nav3">
                    <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="/"><i class="fa-solid fa-gamepad"></i></a></li>
               </div>
          </div>
      </div>
    </>
  )
}
