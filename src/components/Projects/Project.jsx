import safePawsPhone from '../../assets/project-visuals/safe-paws-phone.png'
import safePawsBrowser from '../../assets/project-visuals/safe-paws-browser.png'


export default function Project() {

  // title
  // color
  // phoneImg
  // browserImg
  // Repo Link
  // Deployed Link
  // techStack: ['asdf', 'asdf', 'asdf']

  return (
    <div className="mx-auto flex flex-col items-center pt-24 px-24 gap-10">
      <div className='text-center'>
        <h2 className='text-7xl text-safePaws'>Safe Paws</h2>
        <div className="text-gray-200 font-serif text-xl font-thin">
          <p>- <a href='https://google.com'>Repo</a> - <a href='https://google.com'>Deployed Site</a> -</p>
        </div>
      </div>

      <div className=' flex w-full h-[320px] max-w-[974px] space-between justify-between'>
        <img src={safePawsPhone} width='147px' className='content-fit shadow-md shadow-safePaws'/>
        <img src={safePawsBrowser} width='491px' className='shadow-md shadow-safePaws'/>
        <p className='w-[255px] bg-slate-50 shadow-md shadow-safePaws'>Hello</p>
      </div>

      {/* <LanguageDisplay /> */}
      <div className='w-[974px] bg-slate-600 h-[62px]'>

      </div>
    </div>
  )
}