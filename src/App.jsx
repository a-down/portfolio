import heroBG from './assets/backgrounds/hero-bg.svg'
import { About, Contact, Footer, Header, HeroText, ProjectsSection } from './components'


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
