import StackDisplay from '../StackDisplay/StackDisplay'
import { HiExternalLink } from 'react-icons/hi'
import { SiGithub, SiAppstore } from 'react-icons/si'
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function FullProject({ project, stackArr }) {
  

  return (
    <div className="flex flex-col gap-8 py-12 text-slate-800" id={project.slug}>
      <div className="flex flex-wrap gap-4 justify-between">
        <h2 className="text-3xl md:text-6xl font-bold" style={{color: project.color}}>{project.title}</h2>
        <div className="flex flex-grow gap-4 items-center justify-end">
          {project.deployedLink && (
            <a 
              href={project.deployedLink} 
              target="_blank"
              style={{color: project.color}}
              className="hover:scale-105 transitiion-all">
              <HiExternalLink className="text-4xl"/>
            </a>
          )}
          {project.repoLink && (
            <a 
              href={project.repoLink} 
              target="_blank"
              style={{color: project.color}}
              className="hover:scale-105 transitiion-all">
              <SiGithub className="text-4xl"/>
            </a>
          )}
          {project.appStoreLink && (
            <a 
              href={project.appStoreLink} 
              target="_blank"
              style={{color: project.color}}
              className="hover:scale-105 transitiion-all">
              <SiAppstore className="text-4xl"/>
            </a>
          )}
          {project.documentationLink && (
            <a 
              href={project.documentationLink} 
              target="_blank"
              style={{color: project.color}}
              className="hover:scale-105 transitiion-all">
              <HiDocumentMagnifyingGlass className="text-4xl" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 mb-2">
        <div className="flex flex-col gap-4 leading-loose tracking-wide lg:w-2/5 overflow-clip text-slate-500 font-thin">
          <p>{project.description}</p>
          <p>{project.description2}</p>
          <p>{project.description3}</p>
        </div>
        
        <Carousel className="w-full h-fit aspect-video shadow-xl cursor-grab" style={{backgroundColor: project.color}}>
          <div className="bg-slate-50/20 h-full w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="">
                <div className=" relative" >
                  <div className="aspect-video flex justify-center items-center">
                    <img src={image.img} className='h-[80%] drop-shadow-2xl' />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <StackDisplay stackArr={stackArr} isDark={true}/>
    </div>
  )
}