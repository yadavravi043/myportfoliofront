import "./CertificateStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import  cer1 from'../../assets/cer1.jpg'
import  cer2 from'../../assets/cer2.jpg'
import cer3 from'../../assets/cer3.jpg'
import cer4 from'../../assets/cer4.jpg'
import cer5 from'../../assets/cer5.jpg'
import cer6 from'../../assets/cer6.jpg'
const Certification = () => {
  return (
    <div className="work-container">
    <div className="sports-heading">
    <h1>Certifications</h1>
    </div>
      <div className="cert-container">
        <div className="cert-card">
        <img src={cer1} />
        </div>
        <div className="cert-card">
        <img src={cer2} />
        </div>
        <div className="cert-card">
          <img src={cer3} />  
            </div>
        <div className="cert-card">
          <img src={cer4} />  
            </div>
        <div className="cert-card">
          <img src={cer5} />  
            </div>
        <div className="cert-card">
          <img src={cer6} />  
            </div>
        </div>
      </div>
  );
};

export default Certification;
