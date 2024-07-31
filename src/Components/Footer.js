import React from "react";
import facebook from "../Assates/facebook_1.png";
import insta from "../Assates/insta_1.png";
import twitter from "../Assates/twitter_1.png";
import youtub from "../Assates/youtub_1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icon_ft">
        <img src={facebook} alt="Facebook" />
        <img src={insta} alt="Instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtub} alt="Youtub" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Reletion</li>
        <li>Legal Notice</li>
        <li>Help Center</li>
        <li>jobs</li>
        <li>Cookies</li>
        <li>Privecy</li>
        <li>Gift Card</li>
        <li>Terms Of Us</li>
        <li>Corporet Info</li>
        <li>Media Center</li>
        <li>Privecy</li>
        <li>Contact Us</li>
      </ul>
      <p>All right are Reserve to Netflix India.</p>
    </div>
  );
};

export default Footer;
