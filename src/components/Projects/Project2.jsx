import { useState } from 'react'
import StackDisplay from '../StackDisplay/StackDisplay'


export default function Project({ project, stackArr, isDark }) {
  const [ repoLink, setRepoLink ] = useState({color: '#e2e8f0'})
  const [ liveLink, setLiveLink ] = useState({color: '#e2e8f0'})
  const [ extraLink, setExtraLink ] = useState({color: '#e2e8f0'})

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
    <div className="w-full aspect-video mb-[200px]" style={{backgroundColor: project.color}}>
      <div className="w-full h-full bg-slate-50/20 flex justify-center items-center">
        <img src={project.phoneImg} className="h-[80%] rounded-lg shadow-2xl"/>
      </div>
    </div>
  )
}