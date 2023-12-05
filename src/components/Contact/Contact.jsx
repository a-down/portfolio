import ContactForm from './ContactForm'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMiniDocumentText } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'
import resume from '../../assets/alec-downing-resume.pdf'
import { motion, useScroll } from "framer-motion"


export default function Contact(){
  const { scrollYProgress } = useScroll();


  return (
    <div className='bg-navy'>
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial={{ visibility: 'hidden', opacity: 0.4 }}
        whileInView={{ visibility: 'visible', opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className=" gap-4 md:gap-16 w-100 bg-accent px-6 py-8 md:px-10 lg:px-24 items-center ">

          <div className="flex flex-col justify-between max-w-[974px] mx-auto">

            <h2 className='text-4xl w-full text-center font-sans'>Get In Touch</h2>
            
            <div className='flex flex-col md:flex-row gap-10 justify-between text-xl font-serif w-full py-10'>

              <div className='flex flex-col gap-8 order-1 md:-order-1'>
                <a href='https://github.com/a-down' target='_blank' className='flex items-center gap-4 hover:text-slate-600 active:text-slate-200'>
                  <SiGithub />
                  <h4>a-down</h4>
                </a>

                <a href='https://linkedin.com/in/alec-downing/' target='_blank' className='flex items-center gap-4 hover:text-slate-600 active:text-slate-200'>
                  <SiLinkedin />
                  <h4>alec-downing</h4>
                </a>

                <a href="mailto: alec@alecdowning.com" className='flex items-center gap-4 hover:text-slate-600 active:text-slate-200'>
                  <HiOutlineMail />
                  <h4>alec@alecdowning.com</h4>
                </a>

                <a href={resume} download='alec-downing-resume' className='flex items-center gap-4 hover:text-slate-600 active:text-slate-200'>
                  <HiMiniDocumentText />
                  <h4>Resume</h4>
                </a>
              </div>

              {/* <ContactForm /> */}
            </div>

          </div>


        </div>
      </motion.div>
    </div>
  )
}