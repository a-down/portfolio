import projectsBG from '../../assets/backgrounds/projects-bg.svg'
import Project from './Project'
import Project2 from './Project2'
import { projects } from './ProjectDescriptions'
import { HiArrowRight } from 'react-icons/hi'
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
    <div className="bg-slate-100 w-full py-12 lg:mt-24 lg:pb-36 flex justify-center items-center " id="projects">
      <div className="max-w-[1400px] px-4 md:px-12 lg:px-24 w-full">
        <span className="flex justify-between items-center mb-4 md:mb-8 lg:mb-12">
          <h3 className="text-2xl md:text-4xl lg:text-6xl text-slate-800 font-semibold">My Projects</h3>
          <a href="/projects" className="text-brand-400/80 hover:scale-105 transition-all flex gap-2 items-center">
            View All
            <HiArrowRight />
          </a>
        </span>
        <Carousel className="w-full aspect-video shadow-xl">
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