// Footer.js
import React from "react";
import logo from "../../../asset/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <img className="imglogo" src={logo} />
        <h3 className="h3logo">Offshore Energy Installation JSC</h3>
      </div>
      <div className="footer2">
        <div className="footer-item">
          <span>About</span>
          <span>Projects</span>
          <span>Clients & partners</span>
          <span>News and event</span>
          <span>sustainability</span>
          <span>download profile company</span>
        </div>
      </div>
      <div className="footer2">
        <div className="footer-item">
          <span>Careers</span>
          <span>Contact</span>
          <span>Blog</span>
          <span>FAQ</span>
          <span>Disclaimer</span>
          <span>privacy policy</span>
        </div>
      </div>
      <div className="footer-item">
        <div>
          <h4 style={{ width: "278px" }} className="email1">
            Sign up for email to receive the latest information
          </h4>
          <h4 className="email1" style={{ width: "400px" }}>
            Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit rhoncus
            id dictum.
          </h4>
          <input
            className="email-input"
            type="email"
            placeholder="Your email"
          />{" "}
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faTiktok} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
