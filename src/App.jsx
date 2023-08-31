import { useState } from 'react'
import heroBG from './assets/backgrounds/hero-bg.svg'
import Header from './components/Header'


function App() {

  return (
    <>
      <div style={{backgroundImage: `url(${heroBG})`}} className='h-[765px]'>
        <Header />
      </div>
    </>
  )
}

export default App
