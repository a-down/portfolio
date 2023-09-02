import Language from './Language'


export default function StackDisplay() {
  const stackArr = ['React', 'JavaScript', 'Html']

  return (
    <div className=" w-full flex justify-center gap-6">

      { stackArr.map(stack => (
        <Language stack={stack} key={stack}/>
      ))}


    </div>
  )
}