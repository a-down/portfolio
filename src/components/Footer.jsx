import StackDisplay from './StackDisplay/StackDisplay'


export default function Footer() {

    const footerStack = [
      'React', 'Tailwind', 'JavaScript', 'CSS', 'Vercel'
    ]

  return (
    <footer className=" bg-navy w-full py-4">
      <div className='flex flex-col px-24 max-w-[974px] gap-2'>
        <h5 className='w-full text-slate-600 text-center'>alecdowning.com was built with</h5>
        <StackDisplay stackArr={footerStack} isDark={true}/>
      </div>
    </footer>
  )
}