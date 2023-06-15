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
        <p>Hii I am a web developer</p>
        <h3>MERN STACK DEVELOPER</h3>
        <div>
          <Link to="/project" className="btn">
            project
          </Link>
          <Link to="/contact" className="btn">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
