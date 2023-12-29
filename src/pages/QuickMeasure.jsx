import heroMockup from '../assets/quick-measure/quick-measure-hero-mockup.png'
import heroBg from '../assets/backgrounds/qm-hero-bg.png'

export default function QuickMeasure() {
  const units = ['feet', 'yards', 'miles', 'acres', 'meters', 'kilometers', 'hectares']

  const heroStyle={
    backgroundImage: `url(${heroBg})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  }

  return (
    <>
      <div className="font-jost relative w-full ">
        <div className="h-[100dvh] pt-8 px-4 md:px-16 lg:px-24" style={heroStyle} >
          <div className=" flex justify-between">
            <a href="/" className="transition-all hover:opacity-60">alecdowning.com</a>
            <a href="https://apps.apple.com/us/app/quick-measure-gps/id6473677147" target="_blank">View on app store</a>
          </div>
          <div className="mt-32">
            <h1 className="font-bold text-[64px] leading-none">Easy Tools for a <span className="text-[96px] text-[#6DAB64] block">Quick Measure</span></h1>
            <p className="mt-8 text-xl leading-loose max-w-[600px] ">Quick Measure is a quick and simple tool to find GPS measurements. Use your GPS position to measure distance and area. It only takes two taps and feet to start measuring with your location!</p>
            <img src={heroMockup} alt="Quick Measure Hero Mockup" className=" absolute right-0 top-24 h-[578px] w-[771px]" />
          </div>
        </div>

        <div className="mt-16 px-4 md:px-16 lg:px-24">
          <h2 className="text-4xl font-semibold">Features</h2>

          <div className="grid grid-cols-8 grid-rows-3 gap-4 my-4">
            <div className="col-span-4 h-[280px] bg-gray-200/40 shadow-sm backdrop-blur-md rounded-3xl px-6 py-4 flex flex-col">
              <div className="flex gap-4 justify-end">
                <img src="https://placehold.co/128" />
                <img src="https://placehold.co/128" />
              </div>

              <div className="h-full flex flex-col justify-end">
                <h3 className="text-2xl font-medium text-green-700 mb-2">Measure with GPS</h3>
                <p className=" leading-snug max-w-[200px] text-gray-800">Measure automatically or manually with your location</p>
              </div>
            </div>

            <div className="col-span-2 h-[280px] bg-gray-200/40 shadow-sm rounded-3xl px-6 py-4 flex justify-center items-center relative">
              {/* <h3 className="text-2xl font-medium text-gray-800">Save</h3> */}
              <div className='flex flex-col items-center justify-center'>
                <img src="https://placehold.co/128" className="mb-2" />
                <p className="leading-none text-center text-gray-700 absolute bottom-6">Save Measurements</p>
              </div>
            </div>

            <div className="col-span-2 h-[280px] bg-gray-200/40 shadow-sm rounded-3xl px-6 py-4 flex justify-center items-center">
              <img src="https://placehold.co/224" />
            </div>

            <div className="col-span-2 h-[280px] bg-gray-200/40 shadow-sm rounded-3xl px-6 py-4 flex justify-center items-center relative">
              {/* <h3 className="text-2xl font-medium text-gray-800">Save</h3> */}
              <div className='flex flex-col items-center justify-center'>
                <img src="https://placehold.co/128" className="mb-2" />
                <p className="leading-none text-center text-gray-700 absolute bottom-6">Measure Anywhere by Tapping</p>
              </div>
            </div>

            <div className="col-span-4 h-[280px] bg-gray-200/40 shadow-sm rounded-3xl px-6 py-4 flex items-center justify-center">
              <p className="text-2xl font-semibold text-green-700 text-center max-w-[480px]">Quick Measure was built so you can quickly and easily measure area and distance. It only takes 2 taps and feet to start!</p>
            </div>

            <div className="col-span-2 h-[280px] bg-gray-200/40 shadow-sm rounded-3xl px-6 py-4 flex items-end">
              <div className="flex flex-wrap gap-2">
                <h3 className="text-xl font-medium text-gray-700 w-full">Units</h3>

                {units.map((measurement, index) => (
                  <div className="bg-green-500 rounded-full px-4 py-1 " key={index}>
                    <p className=" leading-snug text-green-100">{measurement}</p>
                  </div>
                ))}

              </div>
            </div>



          </div>
        </div>
      </div>


    </>
  )
}