import React from 'react';
import img from '../img/img9.png';
import '../style/footer.css';

export default function Footer() {
  return (
    <div id='footer'>
      <div className="footer">
        <img src={img} alt="" />
        <div className="footerchild">
<div className="footerchild1">
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-youtube"></i>
</div>
        </div>
       
      </div>
      
    </div>
  )
}
