import headshot from "../assets/headshot_cropped.jpg";
import StackDisplay from "./StackDisplay/StackDisplay";

/**
 *
 * @returns {Element}
 */
export default function About() {
  const myTechStack = [
    "TypeScript",
    "React",
    "Next.js",
    "AWS S3",
    "AWS DynamoDB",
    "MySQL",
    "MongoDB",
    "Figma",
    "React Router",
    "Mantine UI",
    "Tailwind",
    "Bootstrap",
    "AWS Lambda",
    "OpenAPI",
    "Express.js",
    "GitHub",
    "Vitest",
    "Docker",
    "React Native",
    "Clerk",
    "Expo",
    "App Store",
    "Google AdMob",
  ];

  return (
    <div
      className="bg-gradient-to-br from-brand-300 to-brand-200/20 py-12 md:py-16 lg:py-28 w-full flex justify-center items-center relative overflow-clip"
      id="about"
    >
      <div>
        <div className=" w-full flex flex-col justify-center max-w-[1400px] px-4 md:px-12 lg:px-24 gap-12 md:gap-16 lg:gap-24">
          <div className="flex flex-col lg:flex-row flex-start gap-8 md:gap-12 lg:gap-8 relative">
            <img
              src={headshot}
              className="w-[320px] h-[320px] mx-auto md:mx-0 rounded-full shadow-sm flex-shrink-0 z-10"
            />

            <div className="text-slate-700 flex flex-wrap lg:flex-col gap-4">
              <h3 className="pt-0 text-4xl mb-2 text-slate-800 tracking-tight">
                I am a Full Stack Web and Mobile App Developer.
              </h3>
              <p className="text-lg font-thin leading-relaxed tracking-wide">
                I build websites that are easy to view, understand, and
                navigate. I will communicte and collaborate with designers and
                stakeholders to create a user-focused and technically-sound
                product. Applications should never impede the user, so I strive
                to make every website accessible to all.
              </p>
              <p className="text-lg font-thin leading-relaxed tracking-wide">
                I currently work at{" "}
                <a
                  href="https://characterstrong.com"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  CharacterStrong
                </a>{" "}
                building curriculum software for educators. I use TypeScript,
                React, AWS Services, and Mantine UI daily, while also utilizint
                various AWS service, OpenAPI-specced Lamdba functions, Vitest,
                Playwright, GitHub, and Docker.
              </p>
              <p className="text-lg font-thin leading-relaxed tracking-wide">
                I have experience building mobile applications from deploying{" "}
                <a
                  href="https://apps.apple.com/us/app/quick-measure-gps/id6473677147"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  Quick Measure - GPS
                </a>{" "}
                to the App Store. I used React Native and Expo for the
                application code, set up Testflight for beta testing, and
                handled the App Store Connect review process. Ads are
                implemented with RevenueCat and Google AdMob.
              </p>
            </div>
          </div>

          <span className="lg:hidden">
            <StackDisplay
              stackArr={myTechStack}
              isDark={true}
              centered={false}
            />
          </span>

          <span className="hidden lg:inline">
            <StackDisplay
              stackArr={myTechStack}
              isDark={true}
              centered={true}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
