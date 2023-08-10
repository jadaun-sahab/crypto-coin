import React from 'react'
import "../style/home.css";
// import '../../public/logo192.png'
import img from '../img/img1.png';
import img2 from '../img/img2.png';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="heading">
          <img src={img} alt="Logo" />;
          <h1>TRACK AND TRADE</h1>
          <img src={img2} alt="Logo" />;
        </div>
        
      </div>
    </>
  )
}
