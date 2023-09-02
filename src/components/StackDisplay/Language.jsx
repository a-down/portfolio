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


export default function Language({stack}) {

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'React':
        return <SiReact className=' w-full h-full p-2' style={{color: '#61DAFB'}}/>
        break;
      
      case 'JavaScript':
        return <SiJavascript className=' w-full h-full p-2' style={{color: '#F7DF1E'}}/>
        break;
      
      case 'HTML':
        return <SiHtml5 className=' w-full h-full p-2' style={{color: '#F7DF1E'}}/>
        break;
      
      case 'CSS':
        return <SiCss3 className=' w-full h-full p-2' style={{color: '#1572B6'}}/>
        break;

      case 'Tailwind':
        return <SiTailwindcss className=' w-full h-full p-2' style={{color: '#06B6D4'}}/>
        break;
      
      case 'Bootstrap':
        return <SiBootstrap className=' w-full h-full p-2' style={{color: '#7952B3'}}/>
        break;
      
      case 'Chakra':
        return <SiChakraui className=' w-full h-full p-2' style={{color: '#318795'}}/>
        break;
      
      case 'jQuery':
        return <SiJquery className=' w-full h-full p-2' style={{color: '#0769AD'}}/>
        break;
      
      case 'GitHub':
        return <SiGithub className=' w-full h-full p-2' style={{color: '#181717'}}/>
        break;
      
      case 'Node.js':
        return <SiNodedotjs className=' w-full h-full p-2' style={{color: '#339933'}}/>
        break;
      
      case 'Express':
        return <SiExpress className=' w-full h-full p-2' style={{color: '#000000'}}/>
        break;

      case 'MongoDB':
        return <SiMongodb className=' w-full h-full p-2' style={{color: '47A248'}}/>
        break;
      
    }
  }

  const icon = getIcon(stack)

  return (
    <div>
      <div className=" w-[64px] h-[64px] bg-gray-50 rounded-xl">
        {icon}
      </div>

      <p className=' font-serif font-thin text-center text-sm text-gray-200'>{stack}</p>
    </div>
  )
  }