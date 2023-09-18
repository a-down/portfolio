import projectsBG from '../../assets/backgrounds/projects-bg.svg'
import Project from './Project'
import { projects } from './ProjectDescriptions'

export default function ProjectSection() {

  const backgroundStyle = {
    backgroundImage: `url(${projectsBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'top',
  }

  return (
    <div style={backgroundStyle} className='pb-24'>
      { projects.map((project) => (
        <Project project={project} key={project.title} stackArr={project.techStack} isDark={true}/>
      ))}
    </div>
  )
}