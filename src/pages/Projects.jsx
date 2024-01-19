import { Header } from '../components'
import FullProject from '@/components/Projects/FullProject'
import { projects } from '@/components/Projects/ProjectDescriptions'


export default function Projects() {

  return (
    <div className='bg-slate-100 flex flex-col px-24'>
      <Header />
      <div className="max-w-[1200px] py-32">
        <h1 className="text-8xl leadinig-none font-bold tracking-tight text-brand-900">Projects</h1>
      </div>

      {projects.map((project, index) => (
        <FullProject project={project} key={project.title + index} stackArr={project.techStack} isDark={true} index={index}/>
      ))}
    </div>
  )
}