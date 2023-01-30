import React from "react";
import Image from "./images/logo-1.png";
import "./Footer.css";
export const Footer = () => {

  return (
    <div className="footer-flame">
      <img src={Image} alt="logo"/>
      <nav class="M"> 
        <ul>
            <li><a id="cart" href="/cart">shopping cart</a></li>
              <li>/</li>
            <li><a id="product" href="/product">production</a></li>
              <li>/</li>
            <li><a id="contact" href="/contact">cantact</a></li>
        </ul>
        </nav>
        
      <div class="C">
               <p><small>&copy;KEN school</small></p>
      </div>
    </div>
  );
};
