import "./FooterStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Dehri On Sone </p>
              <p>Rohtash ,Bihar</p>
            </div>
          </div>
          <div className="phone">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>7903771035 </p>
              </div>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>ravi18016925@gmail.com</p>
              <p>yadavravi000043@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            Hello everyone this is Ravi from computer science engineering
            background and currently working on MERN stack technology
          </p>

          <div className="social">
          <a href="https://github.com/yadavravi043" >
          <FaGithub
          size={20}
          style={{ color: "#fff", marginRight: "2rem" }}
          />
          </a>
            <a href="https://www.linkedin.com/in/ravi-yadav-8184441a6/">
            <FaLinkedin
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
            />
            </a>
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
