import heroBG from '../assets/backgrounds/hero-bg.svg'
import bubblesBG from '../assets/backgrounds/bubbles.svg'
import { About, Contact, Footer, Header, Hero, ProjectsSection } from '../components'
import HeroText from '../components/Hero'


export default function Home() {
  const heroStyle={
    backgroundImage: `url(${bubblesBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  }

  return (
    <div>
      <div style={heroStyle} className='bg-slate-50'>
        <Header />
        <Hero/>
      </div>

      <About />

      <ProjectsSection />

      <Contact />

      <Footer />
    </div>
  )
}