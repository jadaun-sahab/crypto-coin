import React from 'react';
import '../style/join.css';
import img from '../img/img1.png';
import img2 from '../img/img2.png';

export default function Join() {
  return (
    <div className='join'>
        <div className="joinheading">
          <img src={img} alt="Logo" />;
          <h1>JOIN US VIA</h1>
          <img src={img2} alt="Logo" />;
        </div>

        <div className="joinheading2">
          <h1>DISCORD</h1>
        </div>

        <div className="joinheding3">
          <p>Invest and manage all your crypto at one place.</p>
        </div>
        
        <div className='joinbutton'>
          <button className="joinbtn">Join via Discord</button>
        </div>
    </div>
  );
}
