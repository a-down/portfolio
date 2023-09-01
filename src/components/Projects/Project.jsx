import { useState } from 'react'

export default function Project({ project }) {
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
    <div className="mx-auto flex flex-col items-center pt-24 px-24 gap-10">
      <div className='text-center'>
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

      <div className=' flex w-full h-[320px] max-w-[974px] space-between justify-between'>
        <img src={project.phoneImg} width='132px' className={`shadow-md shadow-${project.color}`} style={{filter: `drop-shadow(0px 4px 3px ${project.color})`}}/>

        <img src={project.browserImg} width='476px' className={'shadow'} style={{filter: `drop-shadow(0px 4px 3px ${project.color})`}}/>

        <p className={`w-[255px] bg-slate-50 shadow-md shadow-${project.color}`} style={{filter: `drop-shadow(0px 4px 3px ${project.color})`}}>Hello</p>
      </div>

      {/* <LanguageDisplay /> */}
      <div className='w-[974px] bg-slate-600 h-[62px]'>

      </div>
    </div>
  )
}