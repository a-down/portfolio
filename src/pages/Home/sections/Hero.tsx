import { StackDisplay, ExternalLinks } from "@/components";

export function Hero() {
  const heroTechStack = [
    "TypeScript",
    "React",
    "Next.js",
    "AWS",
    "Figma",
    "React Native",
    "App Store",
    "Expo",
  ];

  return (
    <div className="flex flex-col w-full items-start justify-between h-full min-h-[calc(100dvh-100px)] pb-12 max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24">
      <div className=" flex flex-col justify-between text-gray-200 gap-2 md:gap-24 w-full h-full flex-grow mx-auto relative">
        <div className="h-[50%] flex-grow flex flex-col justify-center gap-4 lg:gap-1">
          <h1 className=" text-7xl md:text-[10rem] leading-none text-brand-900 tracking-tight font-bold">
            Alec Downing
          </h1>
          <div className=" flex flex-col gap-1 md:gap-0 md:flex-row">
            <h2 className=" text-2xl text-slate-500">
              Full Stack Web Developer
            </h2>
            <span className="text-2xl text-slate-400 font-thin mx-2 hidden md:inline select-none">
              |
            </span>
            <h4 className=" text-2xl text-slate-400">
              Making the Internet Easier to Use
            </h4>
          </div>
        </div>

        <div className="flex justify-between items-end w-full h-[50%]">
          <div className="md:w-2/3 lg:hidden">
            <StackDisplay
              stackArr={heroTechStack}
              isDark={true}
              centered={false}
            />
          </div>
          <div className="hidden lg:flex">
            <StackDisplay
              stackArr={heroTechStack}
              isDark={true}
              centered={true}
            />
          </div>
          <span className="hidden md:flex">
            <ExternalLinks />
          </span>
        </div>
      </div>
    </div>
  );
}
