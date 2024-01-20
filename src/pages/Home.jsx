import heroBG from '../assets/backgrounds/hero-bg.svg'
import bubblesBG from '../assets/backgrounds/bubbles.svg'
import { About, Contact, Footer, Header, Hero, ProjectsSection } from '../components'
import HeroText from '../components/Hero'
import gradientLightBG from '../assets/backgrounds/gradient-light.svg'


export default function Home() {
  const heroStyle={
    backgroundImage: `url(${gradientLightBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  }

  return (
    <div className="bg-slate-100">
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
    </div>
  )
}