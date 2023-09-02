import StackDisplay from './StackDisplay/StackDisplay'


export default function Footer() {

    const footerStack = [
      'React', 'Tailwind', 'JavaScript', 'CSS', 'Vercel'
    ]

  return (
    <footer className=" bg-navy w-full flex justify-center py-4">
      <div className='flex flex-col px-24 max-w-[974px] gap-2'>
        <h5 className='w-full text-slate-600 text-center select-none'>alecdowning.com was built with</h5>
        <StackDisplay stackArr={footerStack} isDark={false}/>
      </div>
    </footer>
  )
}