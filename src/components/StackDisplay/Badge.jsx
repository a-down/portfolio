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
  SiMongodb 
} from 'react-icons/si'


export default function Language({stack, isDark}) {

  let badgeColor
  isDark ? badgeColor = '' : badgeColor = 'bg-gray-50'

  let iconColor

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'React':
        isDark ? iconColor = '#475569' : iconColor = '#61DAFB'
        return <SiReact className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'JavaScript':
        isDark ? iconColor = '#475569' : iconColor = '#F7DF1E'
        return <SiJavascript className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'HTML':
        isDark ? iconColor = '#475569' : iconColor = '#E34F26'
        return <SiHtml5 className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'CSS':
        isDark ? iconColor = '#475569' : iconColor = '#1572B6'
        return <SiCss3 className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'Tailwind':
        isDark ? iconColor = '#475569' : iconColor = '#06B6D4'
        return <SiTailwindcss className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Bootstrap':
        isDark ? iconColor = '#475569' : iconColor = '#7952B3'
        return <SiBootstrap className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Chakra':
        isDark ? iconColor = '#475569' : iconColor = '#318795'
        return <SiChakraui className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'jQuery':
        isDark ? iconColor = '#475569' : iconColor = '#0769AD'
        return <SiJquery className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'GitHub':
        isDark ? iconColor = '#475569' : iconColor = '#181717'
        return <SiGithub className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Node.js':
        isDark ? iconColor = '#475569' : iconColor = '#339933'
        return <SiNodedotjs className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
      
      case 'Express':
        isDark ? iconColor = '#475569' : iconColor = '#000000'
        return <SiExpress className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;

      case 'MongoDB':
        isDark ? iconColor = '#475569' : iconColor = '47A248'
        return <SiMongodb className=' w-full h-full p-2' style={{color: iconColor}}/>
        break;
    }

    if (isDark) {
      iconColor = '#000000'
    }
  }

  const icon = getIcon(stack)

  console.log(icon)

  return (
    <div>
      <div className={` w-[64px] h-[64px] rounded-xl ${badgeColor}`}>
        {icon}
      </div>

      <p className=' font-serif font-thin text-center text-sm text-gray-200'>{stack}</p>
    </div>
  )
  }