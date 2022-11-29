import React from 'react'
import Footer from '../component/Footer/Footer'
import Form from '../component/form/Form'
import HeroImg2 from '../component/HeroimgAll/HeroImg2'
import Navbar from '../component/Navbar/Navbar'
const Contact = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Contact" para="How can I help you"/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact