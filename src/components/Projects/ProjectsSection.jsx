import projectsBG from '../../assets/backgrounds/projects-bg.svg'
import Project from './Project'
import Project2 from './Project2'
import { projects } from './ProjectDescriptions'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProjectSection() {

  const backgroundStyle = {
    backgroundImage: `url(${projectsBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'top',
  }

  return (
    <div className="bg-slate-100 w-full mt-24 pb-36 px-24 flex justify-center items-center " id="projects">
      <div className="max-w-[1400px] w-full">
        <h3 className="text-6xl mb-12 text-slate-800 font-semibold">My Projects</h3>
        <Carousel className="w-full aspect-video shadow-xl cursor-grab">
          <CarouselContent className="">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="">
                <Project2 project={project} key={project.title} stackArr={project.techStack} isDark={true}/>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}