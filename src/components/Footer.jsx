import React from "react";
import Image from "./images/logo-1.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer-flame">
      <nav class="M">
        <img src={Image} alt="logo" />
        <ul>
          <li>
            <a id="cart" href="/cart">
              shopping cart
            </a>
          </li>
          <li>/</li>
          <li>
            <a id="product" href="/product">
              production
            </a>
          </li>
          <li>/</li>
          <li>
            <a id="contact" href="/contact">
              cantact
            </a>
          </li>
        </ul>
      </nav>

      <div class="C">
        <p>
          <small>&copy;2023 KOUHEI MINAMI MASAMI RINA TAKUMI</small>
        </p>
      </div>
    </div>
  );
};
