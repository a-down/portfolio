import { useState } from 'react'
import StackDisplay from '../StackDisplay/StackDisplay'
import { motion, useScroll } from "framer-motion"

export default function Project({ project, stackArr, isDark }) {
  const [ repoLink, setRepoLink ] = useState({color: '#e2e8f0'})
  const [ liveLink, setLiveLink ] = useState({color: '#e2e8f0'})
  const [ extraLink, setExtraLink ] = useState({color: '#e2e8f0'})
  const { scrollYProgress } = useScroll();

  function setRepoLinkColor(isActive){
    const newColor = (isActive) ? project.color : '#e2e8f0'
    setRepoLink({...repoLink, color: newColor})
  }

  function setLiveLinkColor(isActive){
    const newColor = (isActive) ? project.color : '#e2e8f0'
    setLiveLink({...liveLink, color: newColor})
  }

  function setExtraLinkColor(isActive){
    const newColor = (isActive) ? project.color : '#e2e8f0'
    setExtraLink({...liveLink, color: newColor})
  }

  return (
    <motion.div
      viewport={{ once: true, amount: 0.4 }}
      initial={{ visibility: 'hidden', opacity: 0.4 }}
      whileInView={{ visibility: 'visible', opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center lg:pt-24 md:pt-16 pt-14 px-8 md:px-10 lg:px-24 gap-4 md:gap-10">
        <div className='text-center select-none'>
          <h2 className='text-7xl font-semibold' style={{color: `${project.color}`}}>{project.title}</h2>
          <div className="text-gray-200 font-serif text-xl font-thin">
            <p className='select-none'>
              -
              <a href={project.repoLink} target='_blank' style={repoLink} onMouseEnter={() => setRepoLinkColor(true)} onMouseLeave={()=>setRepoLinkColor(false)}> Repo </a>
              
              -
                
              <a href={project.deployedLink} target='_blank' style={liveLink} onMouseEnter={() => setLiveLinkColor(true)} onMouseLeave={()=>setLiveLinkColor(false)}> Deployed Site </a> 
              -

              {(project.extraLink) && (
                <>
                  <a href={project.extraLink} target='_blank' style={extraLink} onMouseEnter={() => setExtraLinkColor(true)} onMouseLeave={()=> setExtraLinkColor(false)}> {project.extraLinkTitle} </a> 
                  -
                </>
              )}
            </p>
          </div>
        </div>

        <div className=' w-full flex flex-col gap-2 md:gap-4 lg:w-[974px]'>
          <div className=' w-full text-neutral-200 font-sans font-thin py-1.5 px-3.5 text-md flex flex-col gap-3.5 order-1 text-justify rounded  leading-loose' >
            <p>{project.description}</p>

            { (project.description2) && (
            <p>{project.description2}</p>
            )}

            { (project.description3) && (
            <p>{project.description3}</p>
            )}
          </div>

          <div className='flex gap-2 md:gap-4 w-full md:order-2'>
            <div className='xs:w-full md:inline' style={{filter: `drop-shadow(0px 2px 3px ${project.color})`}}>
              <img src={project.phoneImg} className='' style={{borderRadius: '4px'}}/>
            </div>

            <div className='flex-grow' style={{filter: `drop-shadow(0px 2px 3px ${project.color})`}}>
              <img src={project.browserImg} className='' style={{borderRadius: '4px'}}/>
            </div>
          </div>

          
        </div>

        <StackDisplay stackArr={stackArr} isDark={isDark}/>
      
      </div>
    </motion.div>
  )
}