import projectsBG from '../../assets/backgrounds/projects-bg.svg'
import Project from './Project'

export default function ProjectSection() {

  const backgroundStyle = {
    backgroundImage: `url(${projectsBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'top',
  }

  return (
    <div style={backgroundStyle} class='pb-24'>
      <Project />
      <Project />
      {/* Project */}
      {/* Project */}
      {/* Project */}
      {/* Project */}
      {/* Project */}
    </div>
  )
}