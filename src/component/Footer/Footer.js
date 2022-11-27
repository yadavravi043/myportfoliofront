import './FooterStyle.css'
import React from 'react'
import { FaHome } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
      <div className="left">
       <div className="location">
       <FaHome size={30} style={{color:'#fff',marginRight:'2rem'}} />
       </div>
      </div>
      <div className="right"></div>
    </div>
      
    </div>
  )
}

export default Footer
