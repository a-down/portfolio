import ContactForm from './ContactForm'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMiniDocumentText } from 'react-icons/hi2'



export default function Contact(){

  return (
    <div className=" gap-4 md:gap-16 w-100 bg-accent p-4 pb-8 md:p-10 lg:p-24 items-center ">

      <div className="flex flex-col justify-between max-w-[974px] mx-auto">

        <h2 className='text-4xl w-full text-center font-sans'>Get In Touch</h2>
        
        <div className='flex justify-between text-xl font-serif'>
          <div className='flex flex-col justify-between'>
            <a href='' className='flex items-center gap-4 hover:text-slate-600'>
              <SiGithub />
              <h4>GitHub: a-down</h4>
            </a>

            <a href='' className='flex items-center gap-4 hover:text-slate-600'>
              <SiLinkedin />
              <h4>LinkedIn: alec-downing</h4>
            </a>

            <a href='' className='flex items-center gap-4 hover:text-slate-600'>
              <HiMiniDocumentText />
              <h4>Resume</h4>
            </a>


          </div>

          <ContactForm />
        </div>

      </div>


    </div>
  )
}