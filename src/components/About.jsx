import headshot from '../assets/headshot.png'
import StackDisplay from './StackDisplay/StackDisplay'
import { motion, useScroll } from "framer-motion"


export default function About() {
  const myTechStack = ['React', 'React Native', 'Next.js', 'JavaScript', 'Tailwind', 'Expo', 'jQuery', 'Framer Motion', 'Figma', 'React Router',  'HTML', 'CSS', 'Radix UI', 'Bootstrap', 'GitHub', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'MySQL', 'Sequelize', 'Clerk', 'npm', 'App Store Connect', 'Google AdMob', 'Vercel', 'Heroku', 'Render']

  return (
    <div className='bg-gradient-to-br from-brand-300 to-brand-200/20 py-24 w-full flex justify-center items-center px-24' id="about">
      <div
          // viewport={{ once: true, amount: 0.4 }}
          // initial={{ visibility: 'hidden', opacity: 0.4 }}
          // whileInView={{ visibility: 'visible', opacity: 1 }}
          // transition={{ duration: 0.4 }}
        >
        <div className=" w-full flex flex-col justify-center max-w-[1200px] gap-20">

          <div className='flex flex-row flex-start'>
            <img src={headshot} className='w-[320px] h-[320px] rounded-full shadow-sm m-4 md:m-0 flex-shrink-0'/>

            <div className="text-slate-950 flex flex-col gap-4 pl-8">
              <h3 className='pt-0 text-4xl mb-2 text-slate-800 tracking-tight'>I am a Frontend and Mobile App Developer.</h3>
              <p className='text-lg font-thin leading-relaxed'>I build websites and apps that are easy to view, understand, and navigate. I will collaborate and communicate with designers and developers to create user-focused experiences. As a former teacher, I have used everything from beautiful creative websites to outdated software. Confusing tools either impede the user or get ignored. Accessible websites make for a better internet!</p>
              <p className='text-lg font-thin leading-relaxed'>I focus on React, React Native, NextJS, JavaScript, and Tailwind. I am also comfortable using jQuery, various CSS Frameworks (Bootstrap, Material UI, Radix UI, Chakra, Bulma), GitHub, and Figma. I have cross-platform mobile experience with React Native and Expo, and I have full-stack experience with NodeJS, ExpressJS, MongoDB, Mongoose, MySQL, Sequelize, JWT, and Clerk.</p>
            </div>

          </div>

          <StackDisplay stackArr={myTechStack} isDark={true}/>

        </div>
      </div>
    </div>
  )
}