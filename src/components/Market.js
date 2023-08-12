import React from 'react'
import '../style/market.css'
import img3 from '../img/bitcoin.webp';

export default function Market() {
  return (
    <>
      <div className='market'>
        <h1>Market Update</h1>
        <div className="tableheading">
                <ol>coin</ol>
                <ol>price</ol>
                <ol>24hour</ol>
                <ol>market cap</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>24hour</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>24hour</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>24hour</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>24hour</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>24hour</ol>
                <ol>$283629536</ol>
        </div>
        <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>24hour</ol>
                <ol>$283629536</ol>
        </div> <div className="tablebody">
                <ol><img src={img3} alt="Logo"/>Bitcoin</ol>
                <ol>$3657</ol>
                <ol>24hour</ol>
                <ol>$283629536</ol>
        </div>
        
              
              
      </div>
    </>
  )
}
