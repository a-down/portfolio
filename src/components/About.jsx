import headshot from '../assets/headshot.png'


export default function About() {


  return (
    <>
      <div className=" flex flex-col justify-center gap-16 w-100 bg-accent p-24 items-center">

        <div className='flex justify-between w-full max-w-[974px]'>
          <div className="font-serif max-w-[800px]">
            <p className='p-4 pt-0'>I am a Front End Developer with full-stack experience. My goal is to build websites that are easy to view, understand, and navigate. As a former teacher, I have used everything from beautiful creative websites to outdated software. Confusing websites either slow down the user or just get ignored. Accessible websites make for a better internet. </p>
            <p className='p-4'>I specialize in JavaScript and React while using Tailwind, Bootstrap, Bulma, Chakra, and GitHub. I also have experience with Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, and Handlebars.</p>
          </div>

          <img src={headshot} className='w-[250px] h-[250px] rounded-2xl shadow-lg'/>
        </div>

        {/* <LanguageDisplay /> */}
        <div className='w-full bg-slate-600 h-[62px] max-w-[974px]'>

        </div>
      </div>
    </>



  )
}