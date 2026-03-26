import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import RolePanel from './Components/RolePanel'
import AboutSection from './Components/AboutSection'
import Footer from './Components/Footer'
import ServiceSection from './Components/ServiceSection'

const index = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <RolePanel />
      <AboutSection />
      <Footer />

    </div>
  )
}

export default index
