import { useState } from 'react'
import StackDisplay from '../StackDisplay/StackDisplay'
import { HiOutlineExternalLink } from 'react-icons/hi'


export default function Project({ project, stackArr, isDark }) {
  const [ repoLink, setRepoLink ] = useState({color: '#e2e8f0'})
  const [ liveLink, setLiveLink ] = useState({color: '#e2e8f0'})
  const [ extraLink, setExtraLink ] = useState({color: '#e2e8f0'})
  const [ overlay, setOverlay ] = useState(false)

  // function setRepoLinkColor(isActive){
  //   const newColor = (isActive) ? project.color : '#e2e8f0'
  //   setRepoLink({...repoLink, color: newColor})
  // }

  // function setLiveLinkColor(isActive){
  //   const newColor = (isActive) ? project.color : '#e2e8f0'
  //   setLiveLink({...liveLink, color: newColor})
  // }

  // function setExtraLinkColor(isActive){
  //   const newColor = (isActive) ? project.color : '#e2e8f0'
  //   setExtraLink({...liveLink, color: newColor})
  // }

  // function displayOverlay() {

  // }

  return (
    <div 
      className="block cursor-pointer relative active:scale-[101%] transition-all" 
      style={{backgroundColor: project.color}} 
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}>
      <div 
        onClick={() => window.location.href = `/projects/${project.slug}`}
        className="p-4 md:p-0 w-full h-[calc(100dvh-64px)] md:h-auto md:aspect-video bg-slate-50/20 flex justify-center items-center">
        <img 
          src={project.images[0].img} 
          className={`max-h-[70%] md:h-[80%] shadow-2xl ${overlay ? 'scale-[101%]' : ''}`}
          style={{borderRadius: project.images[0].type === 'phone' ? 36 : 8}}/>

        {overlay && ( 
        <>
          <div className='h-full w-full absolute top-0 left-0 opacity-20 flex justify-center items-center' style={{backgroundColor: project.color}}></div> 
          {/* <p className='text-2xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-800 py-1.5 px-3 bg-slate-800/5 rounded-md'>View Details</p> */}
        </>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full md:top-auto md:w-auto md:left-4 md:bottom-4 lg:bottom-12 lg:left-12 p-4 shadow-md md:shadow-none md:rounded-lg text-slate-50" style={{backgroundColor: project.color}}>
        <a href={`/projects/${project.slug}`}>
          <h5 className=" text-2xl md:text-2xl lg:text-4xl font-medium flex w-fit gap-2 items-center hover:scale-105">
            {project.title}
            <HiOutlineExternalLink className="md:hidden"/>
          </h5>
        </a>
        
        <div className="flex flex-row gap-2 text-slate-50/90">
          <a href={project.repoLink} className="hover:scale-105 transition-all" target="_blank">Repo</a>
          <span className="select-none">/</span>
          <a href={project.deployedLink} className="hover:scale-105 transition-all" target="_blank">Deployed Site</a>
          <span className="select-none">/</span>
          <a href={`/projects/${project.slug}`} className="hover:scale-105 transition-all">Full Project Details</a>
        </div>
      </div>
    </div>
  )
}