import React from 'react'
import Header from '../Components/Header'
import HeroPage from '../Components/HeroPage'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import ContactMe from '../Components/ContactMe'

const HomePage = () => {
  return (
   <>
   <Header/>
   <HeroPage/>
   <Services/>
   <AboutMe/>
    <Projects/>
    <ContactMe/>
<div className="fi  ">
    <Footer/>
</div>

   </>
  )
}

export default HomePage