import lineGraphic from '../assets/line-graphic.png'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'


export default function HeroText(){
  

  return (
    <>
      <div className=" flex flex-col text-white h-[665px] my-40 items-center gap-2">

        <h1 className=' text-5xl p-2'>Alec Downing</h1>
        <img src={lineGraphic} className='p-2'/>
        <h3 class=' text-3xl font-serif font-thin'>Front End Developer</h3>
        <h4 class=' text-xl font-serif font-thin'>Making the Internet Easier to Use</h4>

        <div className='flex mt-52 text-accent gap-4 w-full justify-end mr-64'>
          <FaLinkedin className='w-12 h-12'/>
          <FaGithubSquare className='w-12 h-12'/>
        </div>

      </div>
    </>
  )
}