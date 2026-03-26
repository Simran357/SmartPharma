import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import ServiceSection from './Components/ServiceSection'
import RolePanel from './Components/RolePanel'
import AboutSection from './Components/AboutSection'

const index = () => {
  return (
    <div>
         <NavBar />
         <HeroSection />

         <ServiceSection />
              <RolePanel/>
              <AboutSection/>
        
    </div>
  )
}

export default index
