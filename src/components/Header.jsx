import { HiOutlineFaceSmile } from 'react-icons/hi2'


export default function Header() {


  return (
    <>

      <div className='w-full h-[100px] bg-navy opacity-50 shadow-2xl drop-shadow-header'>
      </div>

      <header className=' w-full h-[100px] absolute top-0'>

        <div className='h-full items-center flex justify-between w-full px-4 opacity-100 md:px-10 lg:px-24'>

          <div className='flex items-center gap-2'>
            <HiOutlineFaceSmile className=' text-gray-300 text-3xl'/>
            <h2 className=' text-3xl text-accent'>Alec Downing</h2>
          </div>

          <nav className=' text-base font-thin text-gray-100 flex gap-3'>
            {/* <a href='' className=' hover:text-accent'>About</a> */}
            {/* <a href='' className=' hover:text-accent'>Projects</a> */}
            {/* <a href='' className=' hover:text-accent'>Contact</a> */}
            <a href='' className=' hover:text-accent'>Resume</a>
          </nav>

        </div>

      </header>


    </>
  )
}