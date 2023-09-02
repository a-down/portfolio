import {
  SiReact,
  SiJavascript,
  SiHtml5
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
      
      case 'Html':
        return <SiHtml5 className=' w-full h-full p-2' style={{color: '#F7DF1E'}}/>
        break;
    }
  }

  const icon = getIcon(stack)

  return (
    <div>
      <div className=" w-[64px] h-[64px] bg-gray-50 rounded-xl ">
        {icon}
      </div>

      <p className=' font-serif font-thin text-center text-sm text-gray-200'>{stack}</p>
    </div>
  )
  }