import Language from './Language'


export default function StackDisplay() {
  const stackArr = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Chakra', 'jQuery', 'GitHub', 'Node.js', 'Express', 'MongoDB']

  return (
    <div className=" w-full flex justify-center max-w-[974px] flex-wrap gap-4">

      { stackArr.map(stack => (
        <Language stack={stack} key={stack}/>
      ))}


    </div>
  )
}