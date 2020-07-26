import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper flex space-between">
        <div className="rights">All rights reserved</div>
        <div className="icons flex ">
          <a href="https://www.facebook.com">
            <FaFacebookSquare className="icon fa" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="icon in" />
          </a>
          <a href="https://www.linkedin.com/in/roy-amar-9b848224/">
            <FaLinkedin className="icon fa" />
          </a>
        </div>
      </div>
    </div>
  );
}
