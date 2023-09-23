import lineGraphic from '../assets/line-graphic.png'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'


export default function HeroText(){
  

  return (
    <div className=" flex flex-col text-gray-200 h-[665px] my-40 items-center gap-2">

      <h1 className=' text-5xl p-2'>Alec Downing</h1>
      <img src={lineGraphic} className='p-2 select-none'/>
      <h3 className=' text-3xl font-serif font-thin'>Frontend Developer</h3>
      <h4 className=' text-xl font-serif font-thin'>Making the Internet Easier to Use</h4>

      <div className='flex mt-52 gap-4 w-full justify-center md:justify-end md:px-10 lg:px-24'>
        <a href='https://www.linkedin.com/in/alec-downing' target='_blank' className=' text-accent'>
          <FaLinkedin className='w-12 h-12 hover:text-blue-200'/>
        </a>

        <a href='https://www.github.com/a-down' target='_blank'>
          <FaGithubSquare className='w-12 h-12  text-accent hover:text-blue-200'/>
        </a>
      </div>

    </div>
  )
}