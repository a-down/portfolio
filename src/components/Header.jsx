import { HiOutlineFaceSmile } from 'react-icons/hi2'
import resume from '../assets/alec-downing-resume.pdf'
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'



export default function Header() {

  return (
    <div className="flex justify-center">
      <header className=' w-full h-[100px] max-w-[1200px]'>

        <div className='h-full items-center flex justify-between w-full opacity-100'>

          <div className='flex items-center gap-2'>
            <HiOutlineFaceSmile className=' text-brand-400 text-3xl'/>
            {/* <h2 className=' text-3xl text-brand-500'>Alec Downing</h2> */}
          </div>

          <nav className=' text-base flex items-center gap-6 text-brand-400 font-semibold'>
            <a href='/#about' className=' hover:underline'>About</a>
            <a href='/#projects' className=' hover:underline'>Projects</a>
            <a href='/#contact' className=' hover:underline'>Contact</a>
              {/* <a href='mailto: alec@alecdowning.com' className=' text-brand-400/80 hover:text-brand-400/100'> */}
                {/* <FaEnvelope className='w-8 h-8'/> */}
                {/* <p className="hidden md:inline">alec@alecdowning.com</p> */}
              {/* </a> */}

              {/* <a href='https://www.linkedin.com/in/alec-downing' target='_blank' className=' text-accent'>
                <FaLinkedin className='w-8 h-8 mt-[3px] text-brand-400/80 hover:text-brand-400/100'/>
              </a> */}

              {/* <a href='https://www.github.com/a-down' target='_blank'>
                <FaGithubSquare className='w-8 h-8 mt-[3px]  text-brand-400/80 hover:text-brand-400/100'/>
              </a> */}
            <a href={resume} download='alec-downing-resume' className='bg-brand-400/80 py-2 px-4 rounded-md text-slate-50 font-semibold hover:bg-brand-300 transition-all'>Resume</a>
          </nav>

        </div>

      </header>
    </div>
  )
}