import { PiSmileyBold } from 'react-icons/pi'


export default function Header() {


  return (
    <header className=' w-full h-[100px] bg-navy opacity-70 shadow-2xl drop-shadow-header'>

      <div className='h-full items-center flex justify-between mx-32 opacity-100'>

        <div className='flex items-center gap-3'>
          <PiSmileyBold className=' text-gray-300 text-3xl'/>
          <h2 className=' text-3xl text-accent font-bold'>Alec Downing</h2>
        </div>

        <nav className=' text-base font-thin text-gray-100 flex gap-3'>
          <a href='' className=' hover:text-accent'>About</a>
          <a href='' className=' hover:text-accent'>Projects</a>
          <a href='' className=' hover:text-accent'>Contact</a>
          <a href='' className=' hover:text-accent'>Resume</a>
        </nav>

      </div>

    </header>
  )
}