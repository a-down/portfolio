import heroMockup from '../assets/quick-measure/quick-measure-hero-mockup.png'

export default function QuickMeasure() {

  return (
    <div className="font-jost px-4 md:px-16 lg:px-24 relative">
      <div className=" flex justify-between my-8">
        <a href="/" className="transition-all hover:opacity-60">alecdowning.com</a>
        <a href="https://apps.apple.com/us/app/quick-measure-gps/id6473677147" target="_blank">View on app store</a>
      </div>
      <div className="mt-24">
        <h1 className="font-bold text-[64px] leading-tight">Easy Tools for a <span className="text-[96px] text-[#6DAB64] block">Quick Measure</span></h1>
        <img src={heroMockup} alt="Quick Measure Hero Mockup" className=" absolute right-0 top-24 h-[578px] w-[771px]" />
      </div>
    </div>
  )
}