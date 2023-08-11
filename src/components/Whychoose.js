import React from "react";
import "../style/why.css";
import img from "../img/img7.png";

export default function Whychoose() {
  return (
    <div className="why">
      <h1>WHY <span> CHOOSE US</span></h1>
      <div id="maincontainer">
        <div className="childcontainer">

          <div className="child">
            <div className="child1">
            <i class="fa-solid fa-wallet"></i>
            </div>
            <div className="child2">
              <h2>CONNECT YOUR WALLET</h2>
              <p>Use Trust Wallet, Metamask or to connect to the app.</p>
            </div>
          </div>

          <div className="child">
            <div className="child1">
            <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <div className="child2">
              <h2>SELECT YOUR QUANTITY</h2>
              <p>Upload your crypto and set a title, description and price.</p>
            </div>
          </div>

          <div className="child">
            <div className="child1">
            <i class="fa-solid fa-bolt-lightning"></i>
            </div>
            <div className="child2">
              <h2>CONFIRM TRANSACTION</h2>
              <p>Earn by selling your crypto on our marketplace.</p>
            </div>
          </div>

        </div>

        <div className="childcontainer">
          <img src={img} alt="" />;
        </div>

        <div className="childcontainer">

          <div className="child">
            <div className="child1">
            <i class="fa-solid fa-satellite-dish"></i>
            </div>
            <div className="child2">
              <h2>RECEIVE YOUR OWN NFTS</h2>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>

          <div className="child">
          <div className="child1">
          <i class="fa-solid fa-horse-head"></i>
            </div>
            <div className="child2">
              <h2>TAKE A MARKET TO SELL</h2>
              <p>Discover, collect the right crypto collections to buy or sell.</p>
            </div>
          </div>

          <div className="child">
            <div className="child1">
            <i class="fa-solid fa-cubes"></i>
            </div>
            <div className="child2">
              <h2>DRIVE YOUR COLLECTION</h2>
              <p>We make it easy to Discover, Invest and manage.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
