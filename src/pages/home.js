import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import HeroImg from '../component/HeroImgHome/HeroImg'
import Footer from '../component/Footer/Footer'
import WorkData1 from '../component/dynamicCard/WorkData'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <WorkData1/>
      <Footer/>
    </div>
  )
}

export default Home
