import { Header } from '../components'
import FullProject from '@/components/Projects/FullProject'
import { projects } from '@/components/Projects/ProjectDescriptions'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function Projects() {
  const { projectSlug } = useParams()
  
  useEffect(() => {
    const element = document.getElementById(projectSlug);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [])

  return (
    <div className='bg-slate-100 flex flex-col items-center mx-auto'>
      <Header location={'projects'}/>
      <div className="max-w-[1400px] mx-auto px-24">
        <div className="py-24 w-full">
          <h1 className="w-full text-left text-8xl leading-none font-bold tracking-tight text-brand-900">Projects</h1>
        </div>

        <div className="w-full">
          {projects.map((project, index) => (
            <FullProject project={project} key={project.title + index} stackArr={project.techStack} isDark={true} index={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}