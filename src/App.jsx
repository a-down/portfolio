import { useState } from 'react'
import heroBG from './assets/backgrounds/hero-bg.svg'
import Header from './components/Header'
import HeroText from './components/Hero'
import About from './components/About'
import ProjectsSection from './components/Projects/ProjectsSection'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'


function App() {

  const heroStyle={
    backgroundImage: `url(${heroBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  }

  return (
    <>
      <div style={heroStyle} className='h-[765px] w-100'>
        <Header />
        <HeroText />
      </div>

      <About />

      <ProjectsSection />

      <Contact />

      <Footer />
    </>
  )
}

export default App
