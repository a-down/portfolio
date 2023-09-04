import { useState } from 'react'
import StackDisplay from '../StackDisplay/StackDisplay'

export default function Project({ project, stackArr, isDark }) {
  const [ repoLink, setRepoLink ] = useState({color: '#e2e8f0'})
  const [ liveLink, setLiveLink ] = useState({color: '#e2e8f0'})

  function setRepoLinkColor(isActive){
    const newColor = (isActive) ? project.color : '#e2e8f0'
    setRepoLink({...repoLink, color: newColor})
  }

  function setLiveLinkColor(isActive){
    const newColor = (isActive) ? project.color : '#e2e8f0'
    setLiveLink({...liveLink, color: newColor})
  }

  return (
    <div className="flex flex-col items-center lg:pt-24 md:pt-16 pt-14 px-8 md:px-10 lg:px-24 gap-10">
      <div className='text-center select-none'>
        <h2 className='text-7xl' style={{color: `${project.color}`}}>{project.title}</h2>
        <div className="text-gray-200 font-serif text-xl font-thin">
          <p className='select-none'>
            -
            <a href={project.repoLink} target='_blank' style={repoLink} onMouseEnter={() => setRepoLinkColor(true)} onMouseLeave={()=>setRepoLinkColor(false)}> Repo </a>
             
             -
              
            <a href={project.deployedLink} target='_blank' style={liveLink} onMouseEnter={() => setLiveLinkColor(true)} onMouseLeave={()=>setLiveLinkColor(false)}> Deployed Site </a> 
            -
          </p>
        </div>
      </div>

      <div className=' w-full flex flex-col lg:flex-row gap-4 lg:w-[974px]'>

        <div className='flex gap-4'>
          <div className=' hidden md:inline' style={{filter: `drop-shadow(0px 2px 3px ${project.color})`}}>
            <img src={project.phoneImg} className='' style={{borderRadius: '4px'}}/>
          </div>

          <div className='flex-grow' style={{filter: `drop-shadow(0px 2px 3px ${project.color})`}}>
            <img src={project.browserImg} className='' style={{borderRadius: '4px'}}/>
          </div>
        </div>

        <div className=' lg:max-w-[255px] text-navy font-thin font-serif p-3.5 text-sm flex flex-col gap-3.5 text-justify rounded' style={{backgroundColor: `${project.color}`, filter: `drop-shadow(0px 2px 3px ${project.color})`}}>
          <p>{project.description}</p>

          { (project.description2) ?? (
          <p>{project.description2}</p>
          )}
        </div>
      </div>

      <StackDisplay stackArr={stackArr} isDark={isDark}/>
    
    </div>
  )
}