import StackDisplay from './StackDisplay/StackDisplay'
import { HiOutlineExternalLink, HiOutlineMail } from 'react-icons/hi'
import { projects } from '@/components/Projects/ProjectDescriptions'
import { useEffect, useState } from 'react'


export default function Footer() {
  const [projectsArr, setProjectsArr] = useState([])

  const footerStack = [
    'React', 'Tailwind', 'JavaScript', 'Vite', 'Vercel', 
  ]

  const linksLinks = {
    title: 'Links',
    links: [
      {name: 'Home', link: '/'},
      {name: 'About', link: '/about'},
      {name: 'Projects', link: '/projects'},
      {name: 'GitHub', link: 'https://github.com/a-down', isExternal: true, icon: <HiOutlineExternalLink/>}
    ]
  }

  const contactLinks = {
    title: 'Links',
    links: [
      {name: 'Form', link: '/contact'},
      {name: 'Email', link: 'mailto:alec@alecdowning.com', icon: <HiOutlineMail/>},
      {name: 'LinkedIn', link: 'https://linkedin.com/in/alec-downing/', isExternal: true, icon: <HiOutlineExternalLink/>}
    ]
  }

  let projectsLinks = {
    title: 'Projects',
    links: projectsArr
  }

  useEffect(() => {
    let projectsForState = []
    projects.forEach(project => {
      projectsForState.push({name: project.title, link: `/projects/${project.slug}`})
    })
    setProjectsArr(projectsForState)
  }, [])

  const LinkColumn = ({ column }) => {
    return (
      <div className='flex flex-col gap-2'>
        <h5 className='text-brand-200 font-semibold'>{column.title}</h5>
        {column.links.map((link, index) => {
          return (
            <a className='text-brand-100 hover:scale-[102%] flex gap-1 items-center' href={link.link} target={link.isExternal ? '_blank' : ''} key={index + link}>
              {link.name}
              {link.icon}
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <footer className=" bg-brand-950 w-full py-12 flex justify-center">
      <div className="w-full max-w-[1400px] px-24 flex gap-12 flex-shrink-0">
        <LinkColumn column={linksLinks}/>
        <LinkColumn column={contactLinks}/>
        <LinkColumn column={projectsLinks}/>
        <div className="flex flex-col ml-auto justify-start items-end gap-2">
          <h5 className='text-slate-400 w-full text-center'>alecdowning.com is built with</h5>
          <StackDisplay stackArr={footerStack} isDark={false}/>
        </div>
      </div>
    </footer>
  )
}