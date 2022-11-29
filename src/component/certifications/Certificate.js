import "./CertificateStyle.css";
import React from "react";
import  cer1 from'../../assets/cer1.jpg'
import  cer2 from'../../assets/cer2.jpg'
import cer3 from'../../assets/cer3.jpg'
import cer4 from'../../assets/cer4.jpg'
import cer5 from'../../assets/cer5.jpg'
import cer6 from'../../assets/cer6.jpg'
const Certification = () => {
  return (
    <div className="certificate-container">
    <div className="sports-heading">
    <h1>Certifications</h1>
    </div>
      <div className="cert-container">
        <div className="cert-card">
        <a href="http://certificate.codingninjas.com/verify/bd2efb9e1f0d27f8">
        <img src={cer1} alt='certtificate' />
        </a>
        </div>
        <div className="cert-card">
        <a href="http://certificate.codingninjas.com/verify/ced663e6d8767691">
        <img src={cer2} alt='certtificate' />
        </a>
        </div>
        <div className="cert-card">
          <img src={cer3} alt='certtificate' />  
            </div>
        <div className="cert-card">
          <img src={cer4} alt='certtificate' />  
            </div>
        <div className="cert-card">
          <img src={cer5} alt='certtificate'/>  
            </div>
        <div className="cert-card">
          <img src={cer6} alt='certtificate' />  
            </div>
        </div>
      </div>
  );
};

export default Certification;
