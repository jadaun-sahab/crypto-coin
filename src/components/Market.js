import React from 'react'
import '../style/market.css'
import '../style/marketmedia.css'
import img from '../img/cardano.webp';
import img1 from '../img/bitcoin.webp';
import img2 from '../img/cosmos_hub.webp';
import img3 from '../img/ethereum.webp';
import img4 from '../img/steth_logo.webp';
import img5 from '../img/solana.webp';
import img6 from '../img/Optimism.webp';
import { Link } from 'react-router-dom';

export default function Market() {
  return (
    <>
      <div className='market'>
        <h1>Market Update</h1>
        <div className="table">
        <div className="tableheading">
                <ol>Coin</ol>
                <ol>Price</ol>
                <ol>24hour</ol>
                <ol>Market</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img} alt="Logo"/>Cardano</ol>
                <ol>$3657</ol>
                <ol>-0.4%</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img1} alt="Logo"/>Cosmos</ol>
                <ol>$3657</ol>
                <ol>0.9%</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img2} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>3.1%</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Monero</ol>
                <ol>$3657</ol>
                <ol>-2.0%</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img4} alt="Logo"/>Steller0</ol>
                <ol>$3657</ol>
                <ol>3.4%</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img5} alt="Logo"/>Solanaa</ol>
                <ol>$3657</ol>
                <ol>-1.5%</ol>
                <ol>$283629536</ol>
        </div> <div className="tablebody">
                <ol><img src={img6} alt="Logo"/>Optimis</ol>
                <ol>$3657</ol>
                <ol>2.9%</ol>
                <ol>$283629536</ol>
        </div>
        </div>
        

        
        <div className="pages">
                <li><Link to="/Market">1</Link></li>
                <li><Link to="/Market2">2</Link></li>
                <li><Link to="/Market3">3</Link></li>
                <li><Link to="/Market4">4</Link></li> 
        </div>
              
              
      </div>
    </>
  )
}
