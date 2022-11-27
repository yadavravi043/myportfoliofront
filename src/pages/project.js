import React from 'react'
import Footer from '../component/Footer/Footer'
import HeroImg2 from '../component/HeroimgProj/HeroImg2'
import Navbar from '../component/Navbar/Navbar'
const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="projects" para="This is my projects"/>
    <Footer/>
    </div>
  )
}

export default Project