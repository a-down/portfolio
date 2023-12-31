import StackDisplay from './StackDisplay/StackDisplay'


export default function Footer() {
  const footerStack = [
    'React', 'Tailwind', 'JavaScript', 'Vite', 'Framer Motion', 'Vercel', 
  ]

  return (
    <footer className=" bg-navy w-full flex justify-center py-4">
      <div className='flex flex-col px-6 md:px-10 lg:px-24  gap-2'>
        <h5 className='w-full text-slate-500 text-center select-none'>alecdowning.com was built with</h5>
        <StackDisplay stackArr={footerStack} isDark={true}/>
      </div>
    </footer>
  )
}