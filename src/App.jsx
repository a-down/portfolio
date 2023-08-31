import { useState } from 'react'
import heroBG from './assets/backgrounds/hero-bg.svg'
import Header from './components/Header'
import HeroText from './components/Hero'


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
    </>
  )
}

export default App
