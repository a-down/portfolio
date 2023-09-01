import safePawsPhone from '../../assets/project-visuals/safe-paws-phone.png'
import safePawsBrowser from '../../assets/project-visuals/safe-paws-browser.png'


export default function Project() {


  return (
    <div className="mx-auto w-[974px] flex flex-col items-center pt-24 gap-10">
      <div className='text-center'>
        <h2 className='text-7xl text-safePaws'>Safe Paws</h2>
        <div className="text-gray-200 font-serif text-xl font-thin">
          <p>- <a href='https://google.com'>Repo</a> - <a href='https://google.com'>Deployed Site</a> -</p>
        </div>
      </div>

      <div className=' flex w-[974px] h-[320px] space-between justify-between'>
        <img src={safePawsPhone} width='147px' className='content-fit'/>
        <img src={safePawsBrowser} width='491px'/>
        <p className='w-[255px] bg-slate-200'>Hello</p>
      </div>

      {/* <LanguageDisplay /> */}
      <div className='w-full bg-slate-600 h-[62px]'>

      </div>
    </div>
  )
}