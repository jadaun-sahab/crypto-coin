import React from 'react'
import "../style/navbar.css";

export default function Navbar() {
  return (
    <div>
      <div id="navbar">
          <div className="navbar">
               <div id="logo">CRYPTIC</div>
               <div id="ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Market</a></li>
                    <li><a href="#">Why Choose us</a></li>
                    <li><a href="#">Join us</a></li>
               </div>
               <div id="nav3">
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#">ty</a></li>
               </div>
          </div>
      </div>
    </div>
  )
}
