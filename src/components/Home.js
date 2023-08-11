import React from 'react'
import "../style/home.css";
import img from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/bitcoin.webp';
import img4 from '../img/ethereum.webp';
import img5 from '../img/Tether.webp';
import img6 from '../img/bnb-icon2_2x.webp';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="heading">
          <img src={img} alt="Logo" />;
          <h1>TRACK AND TRADE</h1>
          <img src={img2} alt="Logo" />;
        </div>

        <div className="heading2">
          <h1>CRYPTO CURRENCIES</h1>
        </div>
        
        <div className="heading3">
          <div className="child">
            <img src={img3} alt="Logo"/>;
            <h2>Bitcoin<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="child">
            <img src={img4} alt="Logo"/>;
            <h2>Ethereum<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="child">
            <img src={img5} alt="Logo"/>;
            <h2>Tether<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="child">
            <img src={img6} alt="Logo"/>;
            <h2>BNB<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
        </div>
      </div>
    </>
  )
}
