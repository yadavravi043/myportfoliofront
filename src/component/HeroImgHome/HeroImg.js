import "./HeroImgStyle.css";
import React from "react";
import code from "../../assets/code.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={code} alt="intro-img" />
      </div>
      <div className="content">
      <h4>Unlocking the Digital World</h4>
      <p>Welcome to my corner of the web.</p>
      <h1>SOFTWARE DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
           Projects
          </Link>
          <Link to="/contact" className="btn">
          Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
