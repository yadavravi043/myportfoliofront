import React from 'react'
import AboutContent from '../component/about/AboutContent'
import Footer from '../component/Footer/Footer'
import HeroImg2 from '../component/HeroimgAll/HeroImg2'
import Navbar from '../component/Navbar/Navbar'
const Contact = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="About" para="I am friendly Web Developer"/>
     <AboutContent/>
    <Footer/>
    </div>
  )
}

export default Contact