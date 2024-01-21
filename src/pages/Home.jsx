import { About, Contact, Header, Hero, ProjectsSection } from '../components'
import gradientLightBG from '../assets/backgrounds/gradient-light.svg'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function Home() {
  const heroStyle={
    backgroundImage: `url(${gradientLightBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  }

  const { section } = useParams()
  useEffect(() => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="bg-slate-100">
      <Header location={'home'}/>
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
    </div>
  )
}