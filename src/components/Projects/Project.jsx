

export default function Project({ project }) {

  return (
    <div className="mx-auto flex flex-col items-center pt-24 px-24 gap-10">
      <div className='text-center'>
        <h2 className='text-7xl' style={{color: `${project.color}`}}>{project.title}</h2>
        <div className="text-gray-200 font-serif text-xl font-thin">
          <p>- <a href={project.repoLink} target='_blank'>Repo</a> - <a href={project.deployedLink} target='_blank'>Deployed Site</a> -</p>
        </div>
      </div>

      <div className=' flex w-full h-[320px] max-w-[974px] space-between justify-between'>
        <img src={project.phoneImg} width='147px' className={`shadow-md shadow-${project.color}`}/>
        <img src={project.browserImg} width='491px' className={'shadow'} style={{dropShadow: '0px 4px 3px #DB7F67'}}/>
        <p className={`w-[255px] bg-slate-50 shadow-md shadow-${project.color}`}>Hello</p>
      </div>

      {/* <LanguageDisplay /> */}
      <div className='w-[974px] bg-slate-600 h-[62px]'>

      </div>
    </div>
  )
}