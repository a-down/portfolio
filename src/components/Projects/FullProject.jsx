import { useState } from 'react'
import StackDisplay from '../StackDisplay/StackDisplay'
import { HiExternalLink } from 'react-icons/hi'
import { SiGithub, SiAppstore } from 'react-icons/si'
// import { useParams } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Project({ project, stackArr, isDark }) {
  // let { scrollTarget } = useParams()


  return (
    <div className="flex flex-col gap-8 mb-24 text-slate-800">
      <div className="flex justify-between">
        <h2 className="text-6xl font-bold" style={{color: project.color}}>{project.title}</h2>
        <div className="flex gap-4 items-center">
          {project.deployedLink && (
            <a 
              href={project.deployedLink} 
              target="_blank"
              style={{color: project.color}}
              className="hover:opacity-80">
              <HiExternalLink className="text-4xl"/>
            </a>
          )}
          {project.repoLink && (
            <a 
              href={project.repoLink} 
              target="_blank"
              style={{color: project.color}}
              className="hover:opacity-80">
              <SiGithub className="text-4xl"/>
            </a>
          )}
          {project.appStoreLink && (
            <a 
              href={project.appStoreLink} 
              target="_blank"
              style={{color: project.color}}
              className="hover:opacity-80">
              <SiAppstore className="text-4xl"/>
            </a>
          )}
        </div>
      </div>

      <div className="flex justify-between gap-8 mb-2">
        <div className="flex flex-col gap-4 leading-loose tracking-wide w-2/5 overflow-clip">
          <p>{project.description}</p>
          <p>{project.description2}</p>
          {/* <p>{project.description3}</p> */}
        </div>
        
        <Carousel className="w-full h-fit aspect-video shadow-xl cursor-grab" style={{backgroundColor: project.color}}>
          <div className="bg-slate-50/20 h-full w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="">
                <div className=" relative" >
                  <div className="aspect-video flex justify-center items-center">
                    <img src={image.img} className='h-[80%] shadow-2xl' style={{borderRadius: image.type === 'phone' ? 28 : 8}}/>
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