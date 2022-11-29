import React from 'react'
import WorkData from '../component/dynamicCard/WorkData'
import Footer from '../component/Footer/Footer'
import HeroImg2 from '../component/HeroimgAll/HeroImg2'
import Navbar from '../component/Navbar/Navbar'
import PricingCard from '../component/StaticPricingCard/PricingCard'
const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Projects" para="Here is my most recent works"/>
    <WorkData/>
    <Footer/>
    </div>
  )
}

export default Project