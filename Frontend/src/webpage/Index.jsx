import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import WhySmartPharm from './Components/WhySmartPharma'
import ServiceSection from './Components/ServiceSection'
import RolePanel from './Components/RolePanel'
import AboutSection from './Components/AboutSection'
import Footer from './Components/Footer'


const index = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <WhySmartPharm />
      <ServiceSection />
      <RolePanel />
      <AboutSection />
      <Footer />

    </div>
  )
}

export default index
