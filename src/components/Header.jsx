import smileIcon from '../assets/smile.svg'
import resume from '../assets/alec-downing-resume.pdf'
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { useLocation, useNavigation, useHref } from 'react-router-dom'


export default function Header({ location }) {
  // const navigation = useNavigation()
  // console.log(navigation)

  const href = useHref()
  console.log(href)

  return (
    <div className="flex mx-auto w-full justify-center">
      <header className=' w-full h-[100px]'>

        <div className='h-full items-center flex justify-between w-full opacity-100'>

          <a href='/' className="hover:scale-105">
            <img src={smileIcon} className='w-8 h-8'/>
          </a>

          <nav className=' text-base flex items-center gap-6 text-brand-400 font-semibold'>
            <a href='/' className={` hover:scale-105 transition-all active:text-brand-800 text-brand-${location === 'home' ? '800' : '400'}`}>
              Home
            </a>
            <a href='/#about' className=' hover:scale-105 transition-all active:text-brand-800'>
              About
            </a>
            <a href='/projects' className={` hover:scale-105 transition-all active:text-brand-800 text-brand-${location === 'projects' ? '800' : '400'}`}>
              Projects
            </a>
            <a href='/#contact' className=' hover:scale-105 transition-all active:text-brand-800'>
              Contact
            </a>

            <a href={resume} download='alec-downing-resume' className='bg-brand-400/80 py-2 px-4 rounded-md text-slate-50 font-semibold hover:scale-105 active:bg-brand-400 transition-all'>Resume</a>
          </nav>

        </div>

      </header>
    </div>
  )
}