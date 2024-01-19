import Badge from './Badge'


export default function StackDisplay({ stackArr, isDark, centered }) {

  return (
    <div className={`${centered ? 'justify-center' : 'justify-start'} w-full flex max-w-[1400] flex-wrap gap-4`}>

      { stackArr.map(stack => (
        <Badge stack={stack} isDark={isDark} key={stack}/>
      ))}

    </div>
  )
}