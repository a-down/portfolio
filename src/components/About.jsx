import headshot from '../assets/headshot.png'
import StackDisplay from './StackDisplay/StackDisplay'


export default function About() {
  const myTechStack = ['React', 'React Native', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind', 'Expo', 'Figma', 'React Router', 'Radix UI', 'Bootstrap', 'jQuery', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Clerk', 'npm', 'App Store', 'Google AdMob', 'GitHub']

  return (
    <div className='bg-gradient-to-br from-brand-300 to-brand-200/20 py-28 w-full flex justify-center items-center px-24 relative overflow-clip' id="about">
      <div>
        <div className=" w-full flex flex-col justify-center max-w-[1400px] px-24 gap-24">

          <div className='flex flex-row flex-start gap-4 relative'>
            <img src={headshot} className='w-[320px] h-[320px] rounded-full shadow-sm flex-shrink-0 z-10'/>

            <div className="text-slate-950 flex flex-col gap-4 pl-8">
              <h3 className='pt-0 text-4xl mb-2 text-slate-800 tracking-tight'>I am a Frontend and Mobile App Developer.</h3>
              <p className='text-lg font-thin leading-relaxed tracking-wide'>I build websites and apps that are easy to view, understand, and navigate. I will collaborate and communicate with designers and developers to create user-focused experiences. As a former teacher, I have used everything from beautiful creative websites to outdated software. Confusing tools either impede the user or get ignored. Accessible websites make for a better internet!</p>
              <p className='text-lg font-thin leading-relaxed tracking-wide'>I focus on React, React Native, NextJS, JavaScript, and Tailwind. I am also comfortable using jQuery, various CSS Frameworks (Bootstrap, Material UI, Radix UI, Chakra, Bulma), GitHub, and Figma. I have cross-platform mobile experience with React Native and Expo, and I have full-stack experience with NodeJS, ExpressJS, MongoDB, Mongoose, MySQL, Sequelize, JWT, and Clerk.</p>
            </div>
          </div>

          <StackDisplay stackArr={myTechStack} isDark={true} centered={true}/>

        </div>
      </div>

      {/* <div className=" bg-brand-950/90 w-[800px] h-[800px] absolute -left-[520px] -top-[400px] rotate-45 blur-3xl"></div> */}
    </div>
  )
}