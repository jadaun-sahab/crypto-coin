import React from 'react'
import "../style/home.css";
import "../style/homemediaq.css";
import img from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/cosmos_hub.webp';
import img4 from '../img/Optimism.webp';
import img5 from '../img/Tether.webp';
import img6 from '../img/cardano.webp';


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
            <h2>Cosmos<span className='green'>2.1%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="homechild">
            <img src={img4} alt="Logo"/>;
            <h2>Optimism<span className='red'>-2.5%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="homechild">
            <img src={img5} alt="Logo"/>;
            <h2>Tether<span className='green'>1.4%</span></h2>
            <p>$29,34,66.00</p>
          </div>
          <div className="homechild">
            <img src={img6} alt="Logo"/>;
            <h2>Cardano<span className='green'>3.6%</span></h2>
            <p>$29,34,66.00</p>
          </div>
        </div>


          
      </div>
    </>
  )
}
