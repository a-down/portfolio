import lineGraphic from '../assets/line-graphic.png'


export default function HeroText(){
  

  return (
    <div className=" flex flex-col text-white h-[665px] my-40 items-center gap-2">
      <h1 className=' text-5xl p-2'>Alec Downing</h1>
      <img src={lineGraphic} className='p-2'/>
      <h3 class=' text-3xl font-serif font-thin'>Front End Developer</h3>
      <h4 class=' text-xl font-serif font-thin'>Making the Internet Easier to Use</h4>
    </div>
  )
}