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
} from "react-icons/si";
import clerkDark from "../../assets/clerk-dark.png";
import refresh from "../../assets/refresh.svg";

export default function Language({ stack, isDark }) {
  let badgeColor;
  isDark ? (badgeColor = "") : (badgeColor = "");

  // default icon color if isDark === true
  let iconColor = "#64748B";

  const getIcon = (iconName) => {
    switch (iconName) {
      case "React":
        if (!isDark) iconColor = "#61DAFB";
        return (
          <SiReact
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;
      case "React Native":
        if (!isDark) iconColor = "#61DAFB";
        return (
          <SiReact
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "JavaScript":
        if (!isDark) iconColor = "#F7DF1E";
        return (
          <SiJavascript
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "HTML":
        if (!isDark) iconColor = "#E34F26";
        return (
          <SiHtml5
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "CSS":
        if (!isDark) iconColor = "#1572B6";
        return (
          <SiCss3 className=" w-full h-full p-2" style={{ color: iconColor }} />
        );
        break;

      case "Tailwind":
        if (!isDark) iconColor = "#06B6D4";
        return (
          <SiTailwindcss
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Bootstrap":
        if (!isDark) iconColor = "#7952B3";
        return (
          <SiBootstrap
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Chakra":
        if (!isDark) iconColor = "#318795";
        return (
          <SiChakraui
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "jQuery":
        if (!isDark) iconColor = "#0769AD";
        return (
          <SiJquery
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "GitHub":
        if (!isDark) iconColor = "#181717";
        return (
          <SiGithub
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Node.js":
        if (!isDark) iconColor = "#339933";
        return (
          <SiNodedotjs
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Express.js":
        if (!isDark) iconColor = "#000000";
        return (
          <SiExpress
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "MongoDB":
        if (!isDark) iconColor = "#47A248";
        return (
          <SiMongodb
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Handlebars":
        if (!isDark) iconColor = "#000000";
        return (
          <SiHandlebarsdotjs
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "MySQL":
        if (!isDark) iconColor = "#4479A1";
        return (
          <SiMysql
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Sequelize":
        if (!isDark) iconColor = "#52B0E7";
        return (
          <SiSequelize
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Bulma":
        if (!isDark) iconColor = "#00D1B2";
        return (
          <SiBulma
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Heroku":
        if (!isDark) iconColor = "#430098";
        return (
          <SiHeroku
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Vercel":
        if (!isDark) iconColor = "#000000";
        return (
          <SiVercel
            className=" w-full h-full p-2"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Framer Motion":
        if (!isDark) iconColor = "#0055FF";
        return (
          <SiFramer
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Vite":
        if (!isDark) iconColor = "#646CFF";
        return (
          <SiVite
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Radix UI":
        if (!isDark) iconColor = "#646CFF";
        return (
          <SiRadixui
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Next.js":
        if (!isDark) iconColor = "#000000";
        return (
          <SiNextdotjs
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Clerk":
        return (
          <img
            src={clerkDark}
            className=" w-full h-full p-2 opacity-80"
            style={{ color: iconColor }}
          />
        );
        break;

      case "Refresh":
        return (
          <img
            src={refresh}
            className=" w-full h-full p-2 opacity-80"
            style={{ color: iconColor }}
          />
        );
        break;

      case "React Router":
        if (!isDark) iconColor = "#CA4245";
        return (
          <SiReactrouter
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "npm":
        if (!isDark) iconColor = "#CB3837";
        return (
          <SiNpm className=" w-full h-full p-2 " style={{ color: iconColor }} />
        );
        break;

      case "Figma":
        if (!isDark) iconColor = "#F24E1E";
        return (
          <SiFigma
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Mongoose":
        if (!isDark) iconColor = "#880000";
        return (
          <SiMongoose
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Render":
        if (!isDark) iconColor = "#46E3B7";
        return (
          <SiRender
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Expo":
        if (!isDark) iconColor = "#000020";
        return (
          <SiExpo
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Google AdMob":
        if (!isDark) iconColor = "#EA4335";
        return (
          <SiGoogleadmob
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "App Store":
        if (!isDark) iconColor = "#0D96F6";
        return (
          <SiAppstore
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Docusaurus":
        if (!isDark) iconColor = "#3ECC5F";
        return (
          <SiDocusaurus
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;

      case "Markdown":
        if (!isDark) iconColor = "#000000";
        return (
          <SiMarkdown
            className=" w-full h-full p-2 "
            style={{ color: iconColor }}
          />
        );
        break;
    }
  };

  const icon = getIcon(stack);

  return (
    <div>
      <div className={` w-[64px] h-[64px] rounded-xl ${badgeColor} mx-auto`}>
        {icon}
      </div>

      <p
        className={` text-center text-sm text-slate-${isDark ? "600 font-thin " : "300"} select-none`}
      >
        {stack}
      </p>
    </div>
  );
}
