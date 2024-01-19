import lineGraphic from '../assets/line-graphic.png'
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import StackDisplay from './StackDisplay/StackDisplay';


export default function HeroText(){
  const heroQuickLinks = [
    { title: 'About', link: '#about' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact'}
  ]

  return (
    <div className="flex flex-col w-full items-start justify-between h-full min-h-[calc(100dvh-100px)] pb-12 px-24">
      {/* Text and Links */}
      <div className=" flex flex-col justify-between text-gray-200 pt-32 gap-2 w-full h-full flex-grow mx-auto relative max-w-[1400px]">
        <div>
          <h1 className=' text-[10rem] leading-none text-brand-900 tracking-tight font-bold'>Alec Downing</h1>
          <div className=" flex flex-row">
            <h2 className=" text-2xl text-slate-500">Frontend Developer</h2>
            <span className="text-2xl text-slate-400 font-thin mx-2">|</span>
            <h4 className=' text-2xl text-slate-400'>Making the Internet Easier to Use</h4>
          </div>
        </div>

        <div className="flex justify-between items-end w-full">
          <div>
            <StackDisplay stackArr={['React', 'Next.js', 'React Native', 'JavaScript', 'Tailwind', 'Figma', 'Clerk', 'App Store']} isDark={true} centered={true}/>
          </div>
          <div className='flex flex-col items-end justify-end gap-4 '>
            <a href='https://www.linkedin.com/in/alec-downing' target='_blank' className=' text-accent'>
              <FaLinkedin className='w-12 h-12 mt-[3px] text-brand-400/90 hover:text-brand-400/100 transition-all'/>
            </a>

            <a href='https://www.github.com/a-down' target='_blank'>
              <FaGithubSquare className='w-12 h-12 mt-[3px]  text-brand-400/90 hover:text-brand-400/100 transition-all'/>
            </a>

            <a href='mailto: alec@alecdowning.com' className='flex items-center gap-4 text-brand-400/90 hover:text-brand-400/100 transition-all'>
              <p className="hidden md:inline">alec@alecdowning.com</p>
              <FaEnvelope className='w-11 h-12 mr-[3px]'/>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="w-full max-w-[1200px] mx-auto flex justify-between">
        {heroQuickLinks.map((object, index) => (
          <a href={object.link} className="flex flex-col gap-1 items-center rounded-lg bg-brand-400/10 w-[30%] text-center p-6 text-xl text-brand-800 hover:bg-brand-400/25 cursor-pointer transition-all" key={index}>
            {object.title}
            <FaArrowDown className="inline text-sm"/>
          </a>
        ))}
      </div> */}
      
    </div>
  )
}