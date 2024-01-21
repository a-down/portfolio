import lineGraphic from '../assets/line-graphic.png'
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import StackDisplay from './StackDisplay/StackDisplay';


export const ExternalLinks = () => (
  <div className='flex md:flex-col items-end justify-end gap-4'>
    <a href='https://www.linkedin.com/in/alec-downing' target='_blank' className=' text-accent'>
      <FaLinkedin className='w-12 h-12 mt-[3px] text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all'/>
    </a>

    <a href='https://www.github.com/a-down' target='_blank'>
      <FaGithubSquare className='w-12 h-12 mt-[3px]  text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all'/>
    </a>

    <a href='mailto:alec.downing.development@gmail.com' className='flex items-center gap-4 text-brand-400/90 hover:scale-105 active:text-brand-400 transition-all'>
      {/* <p className="hidden lg:inline">alec.downing.development@gmail.com</p> */}
      <FaEnvelope className='w-11 h-12 mr-[3px]'/>
    </a>
  </div>
)

export default function HeroText(){
  const heroQuickLinks = [
    { title: 'About', link: '#about' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact'}
  ]

  return (
    <div className="flex flex-col w-full items-start justify-between h-full min-h-[calc(100dvh-100px)] pb-12 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-24">
      {/* Text and Links */}
      <div className=" flex flex-col justify-between text-gray-200 gap-2 w-full h-full flex-grow mx-auto relative">
        <div className="h-[50%] flex-grow flex flex-col justify-center gap-4 lg:gap-1">
          <h1 className=' text-7xl md:text-[10rem] leading-none text-brand-900 tracking-tight font-bold'>Alec Downing</h1>
          <div className=" flex flex-col gap-1 md:gap-0 md:flex-row">
            <h2 className=" text-2xl text-slate-500">Frontend Developer</h2>
            <span className="text-2xl text-slate-400 font-thin mx-2 hidden md:inline select-none">|</span>
            <h4 className=' text-2xl text-slate-400'>Making the Internet Easier to Use</h4>
          </div>
        </div>

        <div className="flex justify-between items-end w-full h-[50%]">
          <div className="md:w-2/3 lg:hidden">
            <StackDisplay stackArr={['React', 'Next.js', 'React Native', 'JavaScript', 'Tailwind', 'Figma', 'Clerk', 'App Store']} isDark={true} centered={false}/>
          </div>
          <div className="hidden lg:flex">
            <StackDisplay stackArr={['React', 'Next.js', 'React Native', 'JavaScript', 'Tailwind', 'Figma', 'Clerk', 'App Store']} isDark={true} centered={true}/>
          </div>
          <span className="hidden md:flex">
            <ExternalLinks />
          </span>
        </div>
      </div>
      
    </div>
  )
}