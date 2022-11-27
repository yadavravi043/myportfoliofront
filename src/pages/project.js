import React from 'react'
import Footer from '../component/Footer/Footer'
import HeroImg2 from '../component/HeroimgAll/HeroImg2'
import Navbar from '../component/Navbar/Navbar'
import PricingCard from '../component/StaticPricingCard/PricingCard'
const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="projects" para="This is my projects"/>
    <PricingCard/>
    <Footer/>
    </div>
  )
}

export default Project