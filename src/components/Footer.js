import React from "react";
import img from "../img/img9.png";
import "../style/footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer">
        <img src={img} alt="" />
        <div className="footerchild">
            <div className="footerchild1">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-gamepad"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="footerchild2">
              <a href="/">Privacy</a>
              <a href="/">Terms of service</a>
            </div>
        </div>
      </div>
    </div>
  );
}
