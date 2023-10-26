import "./FooterStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaPaperclip,
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
          Passionate and forward-thinking Software Developer with a knack for crafting exceptional solutions. My journey has been enriched by the mastery of React.js, Node.js, and the art of database management with MongoDB and PostgreSQL. I've taken on the challenge of harnessing these technologies to build dynamic and responsive applications that thrive on innovation.
          From crafting engaging user interfaces with React.js to architecting robust server-side solutions with Node.js, and ensuring seamless data management with MongoDB and PostgreSQL, I've embarked on a journey where code meets creativity. I'm dedicated to creating meaningful and efficient software that adds value to every project I undertake.        
          What truly drives me is the relentless pursuit of excellence in software development, and I'm excited to continue my journey in crafting solutions that make a difference.
          </p>
           <a href="https://drive.google.com/file/d/1TDNyIFfEgUZynD3xGrnvaL-V7KHctaQa/view?usp=sharing"
           style={{color:"#34e8eb"}}
           >
           <FaPaperclip
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
            />
           click for my resume</a>
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
