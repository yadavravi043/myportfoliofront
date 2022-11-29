import "./AboutContentStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import ravitrophy from'../../assets/ravitrophy.jpg'
import ravitrophy2 from'../../assets/ravitrophy2.jpg'
import ravigroup from'../../assets/ravigroup.jpg'
const AboutContent = () => {
  return (
    <div className="about-container">
    <div className="sports-heading">
    <h1>Sports</h1>
    </div>
      <div className="sports-container">
        <div className="sports-card">
        <img src={ravitrophy} />
        </div>
        <div className="sports-card">
        <img src={ravitrophy2} />
        </div>
        <div className="sports-card">
          <img src={ravigroup} />  
          <h4>College Cricket Trophy As Captain</h4> 
            </div>
        </div>
      </div>
  );
};

export default AboutContent;
