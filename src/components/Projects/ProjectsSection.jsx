import projectsBG from '../../assets/backgrounds/projects-bg.svg'
import Project from './Project'
import Project2 from './Project2'
import { projects } from './ProjectDescriptions'

export default function ProjectSection() {

  const backgroundStyle = {
    backgroundImage: `url(${projectsBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'top',
  }

  return (
    <div className="bg-slate-50 w-full py-24 px-24 " id="creations">
      <h3 className="text-4xl mb-8 text-slate-800">Creations</h3>
      <div className="max-w-[1200px]">
      { projects.map((project) => (
        <Project2 project={project} key={project.title} stackArr={project.techStack} isDark={true}/>
      ))}
      </div>
    </div>
  )
}