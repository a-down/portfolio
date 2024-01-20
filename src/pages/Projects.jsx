import { Header } from '../components'
import FullProject from '@/components/Projects/FullProject'
import { projects } from '@/components/Projects/ProjectDescriptions'


export default function Projects() {

  return (
    <div className='bg-slate-100 flex flex-col items-center'>
      <Header location={'projects'}/>
      <div className="py-24 px-24 w-full max-w-[1400px]">
        <h1 className="w-full text-left text-8xl leading-none font-bold tracking-tight text-brand-900">Projects</h1>
      </div>

      <div className="w-full px-24 max-w-[1400px]">
        {projects.map((project, index) => (
          <FullProject project={project} key={project.title + index} stackArr={project.techStack} isDark={true} index={index}/>
        ))}
      </div>
    </div>
  )
}