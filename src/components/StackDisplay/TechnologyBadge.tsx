import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
  SiJquery,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHandlebarsdotjs,
  SiMysql,
  SiSequelize,
  SiBulma,
  SiHeroku,
  SiVercel,
  SiFramer,
  SiVite,
  SiRadixui,
  SiNextdotjs,
  SiReactrouter,
  SiNpm,
  SiFigma,
  SiMongoose,
  SiRender,
  SiExpo,
  SiGoogleadmob,
  SiAppstore,
  SiDocusaurus,
  SiMarkdown,
  SiTypescript,
  SiAwslambda,
  SiAmazondynamodb,
  SiAmazons3,
  SiOpenapiinitiative,
  SiVitest,
  SiDocker,
  SiMantine,
  SiAmazonwebservices,
} from "react-icons/si";
import clerkDark from "../../assets/clerk-dark.png";
import refresh from "../../assets/refresh.svg";

import { TechnologyName } from "./StackDisplayTypes";

export type TechnologyBadgeProps = {
  technology: TechnologyName;
  isDark?: boolean;
};

export function TechnologyBadge({ technology, isDark }: TechnologyBadgeProps) {
  // default icon color if isDark === true
  let iconColor = "#64748B";

  const getIcon = (iconName: TechnologyName) => {
    switch (iconName) {
      case "App Store":
        if (!isDark) iconColor = "#0D96F6";
        return (
          <SiAppstore
            aria-label="App Store Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "AWS":
        if (!isDark) iconColor = "#232F3E";
        return (
          <SiAmazonwebservices
            aria-label="AWS Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "AWS DynamoDB":
        if (!isDark) iconColor = "#4053D6";
        return (
          <SiAmazondynamodb
            aria-label="AWS DynamoDB Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "AWS Lambda":
        if (!isDark) iconColor = "#FF9900";
        return (
          <SiAwslambda
            aria-label="AWS Lambda Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "AWS S3":
        if (!isDark) iconColor = "#569A31";
        return (
          <SiAmazons3
            aria-label="AWS S3 Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Bootstrap":
        if (!isDark) iconColor = "#7952B3";
        return (
          <SiBootstrap
            aria-label="Bootstrap Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Bulma":
        if (!isDark) iconColor = "#00D1B2";
        return (
          <SiBulma
            aria-label="Bulma Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Chakra":
        if (!isDark) iconColor = "#318795";
        return (
          <SiChakraui
            aria-label="Chakra UI Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Clerk":
        return (
          <img
            src={clerkDark}
            aria-label="Clerk Icon"
            className=" w-full h-full p-2 opacity-80"
            style={{ color: iconColor }}
          />
        );

      case "CSS":
        if (!isDark) iconColor = "#1572B6";
        return (
          <SiCss3
            aria-label="CSS Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Docker":
        if (!isDark) iconColor = "#2496ED";
        return (
          <SiDocker
            aria-label="Docker Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Docusaurus":
        if (!isDark) iconColor = "#3ECC5F";
        return (
          <SiDocusaurus
            aria-label="Docusaurus Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Expo":
        if (!isDark) iconColor = "#000020";
        return (
          <SiExpo
            aria-label="Expo Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Express.js":
        if (!isDark) iconColor = "#000000";
        return (
          <SiExpress
            aria-label="Express.js Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Figma":
        if (!isDark) iconColor = "#F24E1E";
        return (
          <SiFigma
            aria-label="Figma Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Framer Motion":
        if (!isDark) iconColor = "#0055FF";
        return (
          <SiFramer
            aria-label="Framer Motion Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "GitHub":
        if (!isDark) iconColor = "#181717";
        return (
          <SiGithub
            aria-label="GitHub Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Google AdMob":
        if (!isDark) iconColor = "#EA4335";
        return (
          <SiGoogleadmob
            aria-label="Google AdMob Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Handlebars":
        if (!isDark) iconColor = "#000000";
        return (
          <SiHandlebarsdotjs
            aria-label="Handlebars Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Heroku":
        if (!isDark) iconColor = "#430098";
        return (
          <SiHeroku
            aria-label="Heroku Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "HTML":
        if (!isDark) iconColor = "#E34F26";
        return (
          <SiHtml5
            aria-label="HTML Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "JavaScript":
        if (!isDark) iconColor = "#F7DF1E";
        return (
          <SiJavascript
            aria-label="JavaScript Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "jQuery":
        if (!isDark) iconColor = "#0769AD";
        return (
          <SiJquery
            aria-label="jQuery Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Mantine UI":
        if (!isDark) iconColor = "#18AABF";
        return (
          <SiMantine
            aria-label="Mantine UI Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Markdown":
        if (!isDark) iconColor = "#000000";
        return (
          <SiMarkdown
            aria-label="Markdown Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "MongoDB":
        if (!isDark) iconColor = "#47A248";
        return (
          <SiMongodb
            aria-label="MongoDB Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Mongoose":
        if (!isDark) iconColor = "#880000";
        return (
          <SiMongoose
            aria-label="Mongoose Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "MySQL":
        if (!isDark) iconColor = "#4479A1";
        return (
          <SiMysql
            aria-label="MySQL Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Next.js":
        if (!isDark) iconColor = "#000000";
        return (
          <SiNextdotjs
            aria-label="Next.js Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Node.js":
        if (!isDark) iconColor = "#339933";
        return (
          <SiNodedotjs
            aria-label="Node.js Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "npm":
        if (!isDark) iconColor = "#CB3837";
        return (
          <SiNpm
            aria-label="npm Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "OpenAPI":
        if (!isDark) iconColor = "#6BA539";
        return (
          <SiOpenapiinitiative
            aria-label="OpenAPI Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Radix UI":
        if (!isDark) iconColor = "#646CFF";
        return (
          <SiRadixui
            aria-label="Radix UI Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "React":
        if (!isDark) iconColor = "#61DAFB";
        return (
          <SiReact
            aria-label="React Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "React Native":
        if (!isDark) iconColor = "#61DAFB";
        return (
          <SiReact
            aria-label="React Native Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "React Router":
        if (!isDark) iconColor = "#CA4245";
        return (
          <SiReactrouter
            aria-label="React Router Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Refresh":
        return (
          <img
            src={refresh}
            aria-label="Refresh Icon"
            className=" w-full h-full p-2 opacity-80"
            style={{ color: iconColor }}
          />
        );

      case "Render":
        if (!isDark) iconColor = "#46E3B7";
        return (
          <SiRender
            aria-label="Render Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Sequelize":
        if (!isDark) iconColor = "#52B0E7";
        return (
          <SiSequelize
            aria-label="Sequelize Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Tailwind":
        if (!isDark) iconColor = "#06B6D4";
        return (
          <SiTailwindcss
            aria-label="Tailwind Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "TypeScript":
        if (!isDark) iconColor = "#3178C6";
        return (
          <SiTypescript
            aria-label="TypeScript Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Vercel":
        if (!isDark) iconColor = "#000000";
        return (
          <SiVercel
            aria-label="Vercel Icon"
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );

      case "Vite":
        if (!isDark) iconColor = "#646CFF";
        return (
          <SiVite
            aria-label="Vite Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );

      case "Vitest":
        if (!isDark) iconColor = "#6E9F18";
        return (
          <SiVitest
            aria-label="Vitest Icon"
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
    }
  };

  const icon = getIcon(technology);

  return (
    <div>
      <div className={`w-[64px] h-[64px] rounded-xl mx-auto`}>{icon}</div>

      <p
        className={`text-center text-ms text-slate-${isDark ? "600 font-thin " : "300"} select-none`}
      >
        {technology}
      </p>
    </div>
  );
}
