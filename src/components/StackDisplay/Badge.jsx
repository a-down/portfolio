import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3, 
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
  SiJquery, 
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb ,
  SiHandlebarsdotjs,
  SiMysql,
  SiSequelize,
  SiBulma,
  SiHeroku,
  SiVercel
} from 'react-icons/si'


export default function Language({stack, isDark}) {

  let badgeColor
  isDark ? badgeColor = '' : badgeColor = 'bg-slate-100'

  // default icon color if isDark === true
  let iconColor = '#475569'

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'React':
        if (!isDark) iconColor = '#61DAFB'
        return <SiReact className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'JavaScript':
        if (!isDark) iconColor = '#F7DF1E'
        return <SiJavascript className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'HTML':
        if (!isDark) iconColor = '#E34F26'
        return <SiHtml5 className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'CSS':
        if (!isDark) iconColor = '#1572B6'
        return <SiCss3 className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'Tailwind':
        if (!isDark) iconColor = '#06B6D4'
        return <SiTailwindcss className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Bootstrap':
        if (!isDark) iconColor = '#7952B3'
        return <SiBootstrap className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Chakra':
        if (!isDark) iconColor = '#318795'
        return <SiChakraui className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'jQuery':
        if (!isDark) iconColor = '#0769AD'
        return <SiJquery className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'GitHub':
        if (!isDark) iconColor = '#181717'
        return <SiGithub className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Node.js':
        if (!isDark) iconColor = '#339933'
        return <SiNodedotjs className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Express':
        if (!isDark) iconColor = '#000000'
        return <SiExpress className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'MongoDB':
        if (!isDark) iconColor = '#47A248'
        return <SiMongodb className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
        
      case 'Handlebars':
        if (!isDark) iconColor = '#000000'
        return <SiHandlebarsdotjs className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'MySQL':
        if (!isDark) iconColor = '#4479A1'
        return <SiMysql className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'Sequelize':
        if (!isDark) iconColor = '#52B0E7'
        return <SiSequelize className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'Bulma':
        if (!isDark) iconColor = '#00D1B2'
        return <SiBulma className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'Heroku':
        if (!isDark) iconColor = '#430098'
        return <SiHeroku className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'Vercel':
        if (!isDark) iconColor = '#000000'
        return <SiVercel className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

    }
  }

  const icon = getIcon(stack)

  return (
    <div>
      <div className={` w-[64px] h-[64px] rounded-xl ${badgeColor}`}>
        {icon}
      </div>

      <p className=' font-serif font-thin text-center text-sm text-gray-200 select-none'>{stack}</p>
    </div>
  )
  }