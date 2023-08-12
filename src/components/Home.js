import React from 'react'
import "../style/home.css";
import "../style/homemediaq.css";
import img from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/bitcoin.webp';
import img4 from '../img/ethereum.webp';
import img5 from '../img/Tether.webp';
import img6 from '../img/bnb-icon2_2x.webp';
import img9 from "../img/img9.png";

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
          <div className="homechild">
            <img src={img3} alt="Logo"/>;
            <h2>Bitcoin<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="homechild">
            <img src={img4} alt="Logo"/>;
            <h2>Ethereum<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="homechild">
            <img src={img5} alt="Logo"/>;
            <h2>Tether<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="homechild">
            <img src={img6} alt="Logo"/>;
            <h2>BNB<span>-1.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
        </div>


        <div id="footer">
      <div className="footer">
        <img src={img9} alt="" />
        <div className="footerchild">
            <div className="footerchild1">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-gamepad"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="footerchild2">
              <a href="/">Privacy</a>
              <a href="/">Terms of use</a>
            </div>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}
