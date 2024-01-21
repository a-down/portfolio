import heroMockup from '../assets/quick-measure/hero-mockup.png'
import heroBg from '../assets/backgrounds/qm-hero-bg.png'
import appIcon from '../assets/quick-measure/icon.png'
import walkingIcon from '../assets/quick-measure/walking-icon.png'
import satelliteIcon from '../assets/quick-measure/satellite-dish.svg'
import downloadIcon from '../assets/quick-measure/download.svg'
import { SiAppstore } from 'react-icons/si'
import { FiArrowLeft } from 'react-icons/fi'

export default function QuickMeasure() {
  const units = ['feet', 'yards', 'miles', 'acres', 'meters', 'kilometers', 'hectares']

  const heroStyle = {
    backgroundImage: `url(${heroBg})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    scale: 110
  }

  return (
    <>
      <div className="font-jost relative w-full ">

        {/* HEADER AND HERO */}
        <div className="w-full lg:h-[100dvh] pt-8 pl-4 md:pl-16 lg:pl-24 overflow-clip" style={heroStyle} >
          {/* HEADER */}
          <div className=" flex justify-between pr-4 md:pr-16 lg:pr-24">
            <a href="/" className="transition-all hover:opacity-60 flex gap-2 items-center">
              <FiArrowLeft />alecdowning.com</a>
            <a href="https://apps.apple.com/us/app/quick-measure-gps/id6473677147" target="_blank" className="bg-black/90 backdrop-blur-xl hover:bg-black/75 transition-all rounded-2xl flex justify-between items-center text-lg text-white font-medium px-4 py-2.5">
              <p className="hidden md:inline mr-1.5">View on the Apple</p>
              <p className="mr-4">App Store</p>
              <SiAppstore className="w-8 h-8 "/>
            </a>
          </div>

          {/* HERO */}
          <div className=" relative h-full pt-16 lg:pt-32 flex flex-col gap-8 md:gap-0 pb-12 lg:pb-0">
            <div className="lg:max-w-[720px xl:max-w-none] pr-4 md:pr-16 lg:pr-24">
              <h1 className="font-semibold md:font-bold text-[32px] md:text-[64px] leading-none">Easy Tools for a <span className="text-[48px] md:text-[96px] text-[#6DAB64] block font-bold mb-4">Quick Measure</span></h1>
              <p className="sm:text-lg md:text-xl leading-loose max-w-[460px] xl:max-w-[720px]">Quick Measure is a quick and simple tool to find GPS measurements. Use your GPS position to measure distance and area. It only takes two taps and feet to start measuring with your location!</p>
            </div>
            <img src={heroMockup} alt="Quick Measure Hero Mockup" className="ml-auto w-[100%] md:w-[90%] lg:max-w-[700px] xl:max-w-[760px] 2xl:max-w-[1000px] scale-125 lg:scale-100 lg:absolute lg:bottom-0 lg:right-0" />
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="mt-16 mx-4 md:mx-16 lg:mx-24 xl:mx-auto max-w-[1200px]">
          <h2 className="text-4xl font-semibold">Features</h2>

          <div className="grid grid-cols-8 grid-rows-2 gap-4 my-4">

            {/* MEASURE WITH GPS */}
            <div className="order-2 md:order-4 lg:order-none col-span-8 md:col-span-4 h-[280px] bg-gray-200/40 shadow-sm backdrop-blur-md rounded-3xl px-6 py-4 flex flex-col">
              <div className="flex gap-4 justify-end">
                <img src={satelliteIcon} className="h-[128px]"/>
              </div>
              <div className="h-full flex flex-col justify-end">
                <h3 className="text-2xl font-medium text-green-700 mb-2">Measure with GPS</h3>
                <p className=" leading-snug max-w-[200px] text-gray-800">Measure automatically or manually with your location</p>
              </div>
            </div>

            {/* UNITS */}
            <div className="order-3 md:order-5 lg:order-none col-span-8 md:col-span-4 lg:col-span-2 h-[280px] bg-gray-200/40 shadow-sm rounded-3xl px-6 py-4 flex items-end">
              <div className="flex flex-wrap gap-2">
                <h3 className="text-xl font-medium text-gray-700 w-full">Units</h3>
                {units.map((measurement, index) => (
                  <div className="bg-green-600 rounded-full px-4 py-1 " key={index}>
                    <p className=" leading-snug text-green-100">{measurement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* APP ICON */}
            <div  className=" order-6 md:order-2 lg:order-none col-span-8 md:col-span-4 lg:col-span-2 h-[280px] bg-green-600 shadow-sm rounded-3xl px-6 py-4 flex justify-center items-center">
              <img src={appIcon} className="h-[200px] lg:h-[148px] xl:h-[200px]"/>
            </div>

            {/* WALKING ICON */}
            <div className="order-5 md:order-3 lg:order-none col-span-8 md:col-span-4 lg:col-span-2 h-[280px] bg-green-600 shadow-sm rounded-3xl px-6 py-4 flex justify-center items-center">
              <div className='flex flex-col items-center justify-center'>
                <img src={walkingIcon} className="h-[200px] mr-4 lg:h-[148px] xl:h-[200px]"/>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className=" order-1 lg:order-noone col-span-8 md:col-span-4 h-[280px] bg-gray-200/40 shadow-sm rounded-3xl px-6 py-4 flex items-center justify-center">
              <p className="text-2xl font-semibold text-green-700 text-center max-w-[480px]">Quick Measure was built so you can quickly and easily measure area and distance. It only takes 2 taps and feet to start!</p>
            </div>

            {/* SAVE */}
            <div className="order-4 md:order-6 col-span-8 md:col-span-4 lg:col-span-2 h-[280px] bg-gray-950 shadow-sm rounded-3xl px-6 py-4 flex justify-center items-center relative">
              <div className='flex flex-col items-center justify-center'>
                <img src={downloadIcon} className="mb-2 h-[200px] lg:h-[148px] xl:h-[200px]" />
                <p className="leading-none text-center text-gray-300 absolute bottom-6">Save Measurements</p>
              </div>
            </div>

          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-24 mb-36 mx-4 md:mx-16 lg:mx-24 xl:mx-auto max-w-[1200px]">
          <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>

          <p className="text-xl">
            Please reach out at{' '}
            <a href="mailto:alec.downing.development@gmail.com" className="text-green-700 underline hover:text-green-500 transition-all">alec.downing.development@gmail.com</a>
            {' '} with any questions, concerns, or feedback. I'd love to hear from you!
          </p>
        </div>

        {/* FOOTER */}
        <footer className="w-full bg-gray-200/40 mt-16 ">
          <div className="h-0.5 bg-gradient-to-r from-green-500/80 to-green-700"></div>
          <div className=" flex justify-between py-8 mx-4 md:mx-16 lg:mx-24 xl:mx-auto max-w-[1200px]">
            <a href="/" className="transition-all hover:opacity-60 flex gap-2 items-center text-xl">
              <FiArrowLeft />Return to alecdowning.com</a>
              <a href="https://apps.apple.com/us/app/quick-measure-gps/id6473677147" target="_blank" className="bg-black/90 backdrop-blur-xl hover:bg-black/75 transition-all rounded-2xl flex justify-between items-center text-lg text-white font-medium px-4 py-2.5">
              <p className="hidden md:inline mr-1.5">View on the Apple</p>
              <p className="mr-4">App Store</p>
              <SiAppstore className="w-8 h-8 "/>
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}