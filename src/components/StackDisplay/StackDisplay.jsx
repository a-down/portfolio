import Badge from './Badge'


export default function StackDisplay({ stackArr, isDark }) {

  return (
    <div className=" w-full flex justify-center max-w-[974px] flex-wrap gap-4">

      { stackArr.map(stack => (
        <Badge stack={stack} isDark={isDark} key={stack}/>
      ))}


    </div>
  )
}