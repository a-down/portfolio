import lineGraphic from '../assets/line-graphic.png'
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa'


export default function HeroText(){
  const circle1 = 280
  const circle2 = 240
  const circle3 = 140

  const heroQuickLinks = [
    { title: 'About', link: '#about' },
    { title: 'Creations', link: '#creations' },
    { title: 'Contact', link: '#contact'}
  ]

  return (
    <div className="flex flex-col w-full items-start justify-between gap-28">
      {/* Text and Links */}
      <div className=" flex flex-col text-gray-200 mt-40 gap-2 w-full max-w-[1200px] mx-auto">
        <h1 className=' text-9xl text-brand-500'>Alec Downing</h1>
        <h4 className=' text-2xl text-slate-500 font-thin'>
          <span className=" text-brand-400">
            Frontend Developer{' '}
          </span>
          Making the Internet Easier to Use</h4>

        <div className='flex gap-4 w-full justify-start mt-8'>
          <a href='https://www.linkedin.com/in/alec-downing' target='_blank' className=' text-accent'>
            <FaLinkedin className='w-12 h-12 text-slate-400 hover:text-slate-500'/>
          </a>

          <a href='https://www.github.com/a-down' target='_blank'>
            <FaGithubSquare className='w-12 h-12  text-slate-400 hover:text-slate-500'/>
          </a>

          <a href='mailto: alec@alecdowning.com' className=' text-slate-400 hover:text-slate-500 flex items-center gap-2'>
            <FaEnvelope className='w-12 h-12 '/>
            <p className="md:hidden">Contact</p>
            {/* <p className="hidden md:inline">alec@alecdowning.com</p> */}
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
        {heroQuickLinks.map((object, index) => (
          <a href={object.link} className="rounded-lg bg-brand-400/10 w-[30%] block text-center p-6 text-xl text-brand-800 hover:bg-brand-400/40 cursor-pointer transition-all" key={index}>
            {object.title}
          </a>
        ))}
      </div>

      {/* <div className="relative flex-grow">

        <svg height={circle1} width={circle1} className="absolute right-48">
          <circle cx={circle1 / 2} cy={circle1 / 2} r={circle1 / 2} fill="#699EE8" opacity="0.5" />
        </svg>

        <svg height={circle2} width={circle2} className="absolute right-32 top-40">
          <circle cx={circle2 / 2} cy={circle2 / 2} r={circle2 / 2} fill="#699EE8" opacity="0.5" />
        </svg>

        <svg height={circle3} width={circle3}>
          <circle cx={circle3 / 2} cy={circle3 / 2} r={circle3 / 2} fill="#699EE8" opacity="0.5" />
        </svg>

      </div> */}
    </div>
  )
}