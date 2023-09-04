import headshot from '../assets/headshot.png'
import StackDisplay from './StackDisplay/StackDisplay'


export default function About() {

  const myTechStack = ['React', 'JavaScript', 'Tailwind', 'Chakra', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'GitHub', 'Node.js', 'Express', 'MongoDB']

  return (
    <>
      <div className=" flex flex-col justify-center gap-16 w-100 bg-accent p-24 items-center">

        <div className='flex justify-between w-full max-w-[974px]'>
          <div className="font-serif max-w-[800px]">
            <p className='p-4 pt-0 font-sans text-2xl'>I am a Front End Developer</p>
            <p className='p-4 pt-0'>with full-stack experience. My goal is to build websites that are easy to view, understand, and navigate. As a former teacher, I have used everything from beautiful creative websites to outdated software. Confusing websites either impede the user or get ignored. Accessible websites make for a better internet. </p>
            <p className='p-4'>I specialize in React and JavaScript while using Tailwind, Chakra, Bootstrap, and GitHub. I also have experience with Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, and Handlebars.</p>
          </div>

          <img src={headshot} className='w-[250px] h-[250px] rounded-2xl shadow-lg'/>
        </div>

        <StackDisplay stackArr={myTechStack} isDark={true}/>

      </div>
    </>



  )
}