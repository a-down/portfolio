import { useState } from 'react'
import StackDisplay from '../StackDisplay/StackDisplay'


export default function Project({ project, stackArr, isDark }) {
  const [ repoLink, setRepoLink ] = useState({color: '#e2e8f0'})
  const [ liveLink, setLiveLink ] = useState({color: '#e2e8f0'})
  const [ extraLink, setExtraLink ] = useState({color: '#e2e8f0'})
  const [ overlay, setOverlay ] = useState(false)

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

  function displayOverlay() {

  }

  return (
    <a 
      className="block hover:scale-[102%] cursor-pointer " 
      style={{backgroundColor: project.color}} 
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}>
      <div className="w-full aspect-video bg-slate-50/20 flex justify-center items-center relative">
        <img src={project.phoneImg} className="h-[80%] rounded-lg shadow-2xl"/>

        <div className="absolute bottom-12 left-12 p-4 rounded-lg" style={{backgroundColor: project.color}}>
          <h5 className="text-4xl font-medium text-white">{project.title}</h5>
          
        </div>

        {overlay && ( <div className={`h-full w-full absolute top-0 left-0 opacity-20`} style={{backgroundColor: project.color}}></div> )}
      </div>
    </a>
  )
}