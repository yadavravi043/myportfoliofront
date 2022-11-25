import './HeroImgStyle.css'
import React from 'react'
import ravi2 from '../../assets/ravi2.jpg'
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
    <div className="mask">
      <img className='into-img' src={ravi2} alt='intro-img' />
    </div>
    <div className="content">
      <p>Hii I am a web developer</p>
      <h1>React Developer</h1>
      <div>
      <Link to='/project' className='btn'>project</Link>
      <Link to='/contact' className='btn-light'>contact</Link>
      </div>
    </div>
    </div>
  )
}

export default HeroImg