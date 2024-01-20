import { About, Contact, Header, Hero, ProjectsSection } from '../components'
import gradientLightBG from '../assets/backgrounds/gradient-light.svg'


export default function Home() {
  const heroStyle={
    backgroundImage: `url(${gradientLightBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  }

  return (
    <div className="bg-slate-100 max-w-[1400px] mx-auto px-24">
      <Header location={'home'}/>
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
    </div>
  )
}