import { HiOutlineFaceSmile } from 'react-icons/hi2'
import resume from '../assets/alec-downing-resume.pdf'


export default function Header() {

  return (
    <>
      <div className='w-full h-[100px]'>
      </div>

      <header className=' w-full h-[100px] absolute top-0'>

        <div className='h-full items-center flex justify-between w-full px-4 opacity-100 md:px-10 lg:px-24 2xl:px-[15%]'>

          <div className='flex items-center gap-2'>
            <HiOutlineFaceSmile className=' text-brand-400 text-3xl'/>
            {/* <h2 className=' text-3xl text-brand-500'>Alec Downing</h2> */}
          </div>

          <nav className=' text-base font-thin text-gray-100 flex gap-3'>
            {/* <a href='' className=' hover:text-accent'>About</a> */}
            {/* <a href='' className=' hover:text-accent'>Projects</a> */}
            {/* <a href='' className=' hover:text-accent'>Contact</a> */}
            <a href={resume} download='alec-downing-resume' className='bg-brand-400/10 py-2 px-4 rounded-md text-brand-800 hover:bg-brand-400/25 transition-all'>Resume</a>
          </nav>

        </div>

      </header>
    </>
  )
}