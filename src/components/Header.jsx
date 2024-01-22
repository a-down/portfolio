import smileIcon from '../assets/smile.svg'
import resume from '../assets/alec-downing-resume.pdf'
import { HiMenu } from 'react-icons/hi'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ExternalLinks } from './Hero'


export default function Header({ location }) {

  const Navigation = ({ location }) => {
    return (
      <nav className=' text-base flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-6 text-brand-400'>
        <a 
          href='/' 
          className='hover:scale-105 transition-all active:scale-[102%]' 
          style={{color: location === 'home' ? '#2E459F' : '#699EE8'}}>
          Home
        </a>
        <a 
          href='/about' 
          className=' hover:scale-105 transition-all active:scale-[102%]'>
          About
        </a>
        <a 
          href='/projects' 
          className=' hover:scale-105 transition-all active:scale-[102%]' 
          style={{color: location === 'projects' ? '#2E459F' : '#699EE8'}}>
          Projects
        </a>
        <a 
          href='/contact' 
          className=' hover:scale-105 transition-all active:scale-[102%]'>
          Contact
        </a>

        <a 
          href={resume} 
          download='alec-downing-resume' 
          className='bg-brand-400/80 py-2 px-4 rounded-md text-slate-50 hover:scale-105 active:scale-[102%] transition-all w-full md:w-auto text-center'>
            Resume
        </a>
      </nav>
    )
  }


  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 w-full sticky top-0 left-0 md:static bg-slate-100 shadow-md md:shadow-none md:bg-transparent z-20">
      <header className=' w-full h-[64px] md:h-[100px]'>

        <div className='h-full items-center flex justify-between w-full'>

          <a href='/' className="hover:scale-105 active:scale-[102%]">
            <img src={smileIcon} className='w-8 h-8'/>
          </a>

          <span className="hidden md:flex">
            <Navigation location={location}/>
          </span>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <HiMenu className="text-2xl hover:scale-105 text-brand-400"/>
            </SheetTrigger>
            <SheetContent className="h-full flex flex-col justify-between">
              <SheetHeader>
                <SheetTitle>
                  <img src={smileIcon} className='w-8 h-8 mb-10'/>
                </SheetTitle>
                <Navigation location={location}/>
              </SheetHeader>
              <SheetFooter className=" bg-slate-50">
                <ExternalLinks />
              </SheetFooter>
            </SheetContent>
          </Sheet>

        </div>

      </header>
    </div>
  )
}