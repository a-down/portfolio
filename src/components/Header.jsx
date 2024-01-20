import smileIcon from '../assets/smile.svg'
import resume from '../assets/alec-downing-resume.pdf'
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'



export default function Header() {

  return (
    <div className="flex mx-auto w-full justify-center">
      <header className=' w-full h-[100px] max-w-[1400px] px-24 pl-[84px]'>

        <div className='h-full items-center flex justify-between w-full opacity-100'>

          <a href='/' className="hover:scale-105">
            <img src={smileIcon} className='w-8 h-8'/>
          </a>

          <nav className=' text-base flex items-center gap-6 text-brand-400 font-semibold'>
            <a href='/' className=' hover:scale-105 transition-all'>Home</a>
            <a href='/#about' className=' hover:scale-105 transition-all'>About</a>
            <a href='/projects' className=' hover:scale-105 transition-all'>Projects</a>
            <a href='/#contact' className=' hover:scale-105 transition-all'>Contact</a>
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
            <a href={resume} download='alec-downing-resume' className='bg-brand-400/80 py-2 px-4 rounded-md text-slate-50 font-semibold hover:scale-105 transition-all'>Resume</a>
          </nav>

        </div>

      </header>
    </div>
  )
}