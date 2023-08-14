import React from 'react'
import '../style/market.css'
import img3 from '../img/bnb-icon2_2x.webp';
import img2 from '../img/cosmos_hub.webp';
import { Link } from 'react-router-dom';

export default function Market3() {
  return (
     <>
     <div className='market'>
       <h1>Market Update</h1>
       <div className="tableheading">
               <ol>Coin</ol>
               <ol>Price</ol>
               <ol>24hour</ol>
               <ol>Market cap</ol>
       </div>
       <div className="tablebody">
               <ol><img src={img2} alt="Logo"/>Solana</ol>
               <ol>$3657</ol>
               <ol>24hour</ol>
               <ol>$283629536</ol>
       </div>
       <div className="tablebody">
               <ol><img src={img3} alt="Logo"/>Solana</ol>
               <ol>$3657</ol>
               <ol>24hour</ol>
               <ol>$283629536</ol>
       </div>
       <div className="tablebody">
               <ol><img src={img2} alt="Logo"/>Solana</ol>
               <ol>$3657</ol>
               <ol>24hour</ol>
               <ol>$283629536</ol>
       </div>
       <div className="tablebody">
               <ol><img src={img3} alt="Logo"/>Solana</ol>
               <ol>$3657</ol>
               <ol>24hour</ol>
               <ol>$283629536</ol>
       </div>
       <div className="tablebody">
               <ol><img src={img2} alt="Logo"/>Solana</ol>
               <ol>$3657</ol>
               <ol>24hour</ol>
               <ol>$283629536</ol>
       </div>
       <div className="tablebody">
               <ol><img src={img3} alt="Logo"/>Solana</ol>
               <ol>$3657</ol>
               <ol>24hour</ol>
               <ol>$283629536</ol>
       </div> <div className="tablebody">
               <ol><img src={img2} alt="Logo"/>Solana</ol>
               <ol>$3657</ol>
               <ol>24hour</ol>
               <ol>$283629536</ol>
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
