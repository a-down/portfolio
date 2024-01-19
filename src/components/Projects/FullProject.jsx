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
    <div className="flex flex-col gap-12 mb-24">
      <div className="flex justify-between">
        <h2 className="text-6xl font-bold" style={{color: project.color}}>{project.title}</h2>
        <div className="flex gap-4">
          <div className="w-16 aspect-square" style={{backgroundColor: project.color}}></div>
          <div className="w-16 aspect-square" style={{backgroundColor: project.color}}></div>
          <div className="w-16 aspect-square" style={{backgroundColor: project.color}}></div>
        </div>
      </div>

      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-4 leading-loose tracking-wide w-2/5 overflow-clip">
          <p>{project.description}</p>
          <p>{project.description2}</p>
          {/* <p>{project.description3}</p> */}
        </div>
        
        <div className="h-fit relative w-3/5" style={{backgroundColor: project.color}} >
          <div className="aspect-video bg-slate-50/20 flex justify-center items-center">
            <img src={project.browserImg} className={`h-[80%] rounded-lg shadow-2xl ${overlay ? 'scale-[101%]' : ''}`}/>
          </div>
        </div>
      </div>

      <StackDisplay stackArr={stackArr} isDark={true}/>
    </div>
  )
}