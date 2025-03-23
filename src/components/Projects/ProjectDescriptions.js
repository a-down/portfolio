import friendsDbPhone from "../../assets/project-visuals/friends-db-phone.png";
import friendsDbBrowser from "../../assets/project-visuals/friends-db-browser.png";

// import gameWorldPhone from "../../assets/project-visuals/game-world-phone.png";
// import gameWorldBrowser from "../../assets/project-visuals/game-world-browser.png";

import quickMeasureAuto from "../../assets/project-visuals/quick-measure-auto.png";
import quickMeasureTap from "../../assets/project-visuals/quick-measure-tap.png";
import quickMeasureSaving from "../../assets/project-visuals/quick-measure-saving.png";
import quickMeasureHome from "../../assets/project-visuals/quick-measure-home.png";
import quickMeasureBrowser1 from "../../assets/project-visuals/quick-measure-browser-1.png";
import quickMeasureBrowser2 from "../../assets/project-visuals/quick-measure-browser-2.png";

import jobNotebookBrowser1 from "../../assets/project-visuals/job-notebook-browser-1.png";
import jobNotebookBrowser2 from "../../assets/project-visuals/job-notebook-browser-2.png";
import jobNotebookBrowser3 from "../../assets/project-visuals/job-notebook-browser-3.png";
import jobNotebookMobile1 from "../../assets/project-visuals/job-notebook-mobile-1.png";
import jobNotebookMobile2 from "../../assets/project-visuals/job-notebook-mobile-2.png";
import jobNotebookMobile3 from "../../assets/project-visuals/job-notebook-mobile-3.png";

import safePawsBrowser1 from "../../assets/project-visuals/safe-paws-browser-1.png";
import safePawsBrowser2 from "../../assets/project-visuals/safe-paws-browser-2.png";
import safePawsBrowser3 from "../../assets/project-visuals/safe-paws-browser-3.png";
import safePawsMobile1 from "../../assets/project-visuals/safe-paws-mobile-1.png";
import safePawsMobile2 from "../../assets/project-visuals/safe-paws-mobile-2.png";
import safePawsMobile3 from "../../assets/project-visuals/safe-paws-mobile-3.png";

import belcBrowser1 from "../../assets/project-visuals/belc-browser-1.png";
import belcBrowser2 from "../../assets/project-visuals/belc-browser-2.png";
import belcBrowser3 from "../../assets/project-visuals/belc-browser-3.png";
import belcMobile1 from "../../assets/project-visuals/belc-mobile-1.png";
import belcMobile2 from "../../assets/project-visuals/belc-mobile-2.png";
import belcMobile3 from "../../assets/project-visuals/belc-mobile-3.png";

import portfolioBrowser1 from "../../assets/project-visuals/portfolio-browser-1.png";
import portfolioBrowser2 from "../../assets/project-visuals/portfolio-browser-2.png";
import portfolioBrowser3 from "../../assets/project-visuals/portfolio-browser-3.png";
import portfolioBrowser4 from "../../assets/project-visuals/portfolio-browser-4.png";
import portfolioMobile1 from "../../assets/project-visuals/portfolio-mobile-1.png";
import portfolioMobile2 from "../../assets/project-visuals/portfolio-mobile-2.png";
import portfolioMobile3 from "../../assets/project-visuals/portfolio-mobile-3.png";
import portfolioMobile4 from "../../assets/project-visuals/portfolio-mobile-4.png";

export let projects = [
  {
    title: "Quick Measure - GPS",
    color: "#6DAB64",
    slug: "quickmeasure",
    images: [
      { img: quickMeasureHome, type: "phone" },
      { img: quickMeasureAuto, type: "phone" },
      { img: quickMeasureTap, type: "phone" },
      { img: quickMeasureSaving, type: "phone" },
      { img: quickMeasureBrowser1, type: "browser" },
      { img: quickMeasureBrowser2, type: "browser" },
    ],
    repoLink: "https://github.com/a-down/quick-measure-gps-app",
    deployedLink: "/quickmeasure",
    appStoreLink:
      "https://apps.apple.com/us/app/quick-measure-gps/id6473677147",
    description: `Quick Measure is a quick and simple mobile app to find GPS measurements. Use your GPS position to measure distance and area. It only takes two taps and feet to start measuring with your location!`,
    // description2: `I created this app for my dad, a farmer. Traditional distance and area measurement tools involve clicking on a satellite map to add markers. My dad needed to find measurements for fields that change annually and undefined sections of land. He should not have to guess where to measure when he's back at the computer.`,
    description2: `I built Quick Measure with React Native, Expo, and React-Native-Maps. React Native allowed me to build a cross-platform mobile app with JavaScript, and Expo provided various plugins/packages, a build environment, version management, and a compiler for the App Store. I styled with Nativewind (TailwindCSS for React Native), provide ads with Google AdMob, and used Revenue Cat to track and manage in-app purchases with their API and package "react-native-purchases".`,
    techStack: [
      "React Native",
      "Expo",
      "Tailwind",
      "JavaScript",
      "App Store",
      "Google AdMob",
      "GitHub",
    ],
  },
  {
    title: "Job Notebook",
    color: "#9dd4c7",
    slug: "jobnotebook",
    images: [
      { img: jobNotebookBrowser1, type: "browser" },
      { img: jobNotebookBrowser2, type: "browser" },
      { img: jobNotebookBrowser3, type: "browser" },
      { img: jobNotebookMobile1, type: "browser" },
      { img: jobNotebookMobile2, type: "browser" },
      { img: jobNotebookMobile3, type: "browser" },
    ],
    repoLink: "https://github.com/a-down/job-notebook-application-tracker",
    deployedLink: "https://jobnotebook.vercel.app",
    description: `Notebook is a tool for job seekers to keep track of their current applications. In today's job market, there are many steps for potential candidates. Applications that take their time can struggle to keep each one straight. Unlike other job trackers, Job Notebook focuses on what the user needs to do BEFORE submitting their application.`,
    // description2: `I created Job Notebook in the first month after I graduated from my Full Stack Bootcamp. I was searching several job boards and trying to track it all in a spreadsheet. This spreadsheet got pretty long pretty quickly. I needed a tool to keep track of a job's details, links, tasks, contacts, files, and notes.`,
    description2: `I used Next.js, Tailwind, and MongoDB because I needed a reactive app. The dashboard needed high reactivity, but the other pages were static and coule be server-side rendered. Clerk provides the authentication for Job Notebook. I chose Clerk because it provided third-party sign up, a simple developer experience, and holds user data in their own secure database.`,
    techStack: [
      "Next.js",
      "React",
      "Tailwind",
      "MongoDB",
      "Clerk",
      "Radix UI",
      "CSS",
      "JavaScript",
      "GitHub",
      "Vercel",
    ],
  },
  {
    title: "Braham Evangelical Lutheran Church",
    color: "#6F54B8",
    slug: "belc",
    images: [
      { img: belcBrowser1, type: "browser" },
      { img: belcBrowser2, type: "browser" },
      { img: belcBrowser3, type: "browser" },
      { img: belcMobile1, type: "browser" },
      { img: belcMobile2, type: "browser" },
      { img: belcMobile3, type: "browser" },
    ],
    deployedLink:
      "https://acst.responsivewebsitebuilder.io/preview/a3ab7be5?device=desktop",
    documentationLink: "https://belc-realm-support.vercel.app/",
    description: `I developed the website for Braham Evangelical Lutheran Church. I built the site with Realm, a church management software. Realm has a dedicated website builder, Refresh, that uses rows, columns, flexboxes, grids, and spacing in a no-code environment. I designed the edited images and mockups with Figma.`,
    description2: `I wrote markdown documentation with the Docusaurus framework to provide resources for church staff to update the site.`,
    techStack: ["Refresh", "Figma", "Docusaurus", "Markdown", "Vercel"],
  },
  {
    title: "Safe Paws",
    color: "#DB7F67",
    slug: "safepaws",
    images: [
      { img: safePawsBrowser1, type: "browser" },
      { img: safePawsBrowser2, type: "browser" },
      { img: safePawsBrowser3, type: "browser" },
      { img: safePawsMobile1, type: "browser" },
      { img: safePawsMobile2, type: "browser" },
      { img: safePawsMobile3, type: "browser" },
    ],
    repoLink: "https://github.com/a-down/safe-paws",
    deployedLink: "https://safe-paws-da967720d734.herokuapp.com/",
    description:
      "Safe Paws was a team project during my Full-Stack Certificate Program. We built a website that used server-side rendering (Handlebars) to dynamically render the webpage according to the user. Users can create an account, add and remove pets, and book appointments.",
    description2:
      "I was the front-end architect and designer (HTML and CSS). I also assisted on the client-side JavaScript and the backend. I managed the GitHub Repo, resolved conflicts, and approved pull requests.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Handlebars",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "GitHub",
      "Heroku",
    ],
  },
  {
    title: "Friends.db",
    color: "#62BCF4",
    slug: "friendsdb",
    images: [
      {
        img: friendsDbBrowser,
        type: "browser",
      },
      {
        img: friendsDbPhone,
        type: "browser",
      },
    ],
    repoLink: "https://github.com/a-down/friends-db",
    deployedLink: "https://friendsdb-5ccabe7c6928.herokuapp.com/",
    description: `Friends.db was a team project during my Full-Stack Certificate Program. We built a social media site for developers to share creations and questions with their coding friends. Users can sign in to their account, create profiles, follow friends, see and interact with friends' posts, and receive notifications when friends interact with their posts or follow them. Users choose a color for themselves to represent them across the site using React useContext.`,
    description2: `I was the primary React developer and site designer. I led the way on the front end while managing the project's GitHub repo, site deployment, and database hosting.`,
    techStack: [
      "React",
      "JavaScript",
      "Tailwind",
      "HTML",
      "CSS",
      "GitHub",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Heroku",
    ],
  },
  {
    title: "My Portfolio!",
    color: "#699EE8",
    slug: "myportfolio",
    images: [
      { img: portfolioBrowser1, type: "browser" },
      { img: portfolioBrowser2, type: "browser" },
      { img: portfolioBrowser3, type: "browser" },
      { img: portfolioBrowser4, type: "browser" },
      { img: portfolioMobile1, type: "browser" },
      { img: portfolioMobile2, type: "browser" },
      { img: portfolioMobile3, type: "browser" },
      { img: portfolioMobile4, type: "browser" },
    ],
    repoLink: "https://github.com/a-down/portfolio",
    description: `Even the website you are currently on deserves to be featured!`,
    description2: `I designed my portfolio to be light, bouncy, and pleasant to peruse! I created a color pallette that is catchy, but neutral enough to compliment the primary colors from my projects. I used scale-transformations for hover states to add a little life to navigation. I hope the site is a fun browse on devices of all sizes!`,
    techStack: [
      "React",
      "JavaScript",
      "Tailwind",
      "CSS",
      "Vite",
      "Vercel",
      "GitHub",
      "Figma",
    ],
  },

  // {
  //   title: 'Game World',
  //   color: '#7C3AED',
  //   phoneImg: gameWorldPhone,
  //   browserImg: gameWorldBrowser,
  //   // cardOrder: [1, 2, 3],
  //   repoLink: 'https://github.com/a-down/game-world-react-rebuild',
  //   deployedLink: 'https://a-down-game-world.vercel.app',
  //   extraLink: 'https://github.com/a-down/GameVerseHub',
  //   extraLinkTitle: 'Original Repo',
  //   description: 'Game World is a site where users can see featured video games and search for games using the RAWG API. I built Game World to rebuild a group project with an updated techstack (focused around React). ',
  //   description2: 'GameVerseHub was a team project during my Full-Stack Coding Bootcamp. It was a site built fo rusers to look up video games and see details about the games. When users searched for a games, `JavaScript (jQuery)` would take a search term entered by the user, make a fetch call to the `RAWG API`, and append cards with the search results to the page. Because of the reactive nature of the site, I wanted to build the webpage with React.',
  //   description3: 'For the origininal GameVerseHub, I built the client-side JavaScript for the search page. I managed the GitHub Repo, resolved merge conflicts, and approved pull requests.',
  //   techStack: ['React', 'JavaScript', 'Tailwind', 'Radix UI', 'HTML', 'CSS', 'Framer Motion', 'GitHub', 'Vite', 'Vercel']
  // },
  // {
  //   title: 'WeatherCraft',
  //   color: '#FBD28E',
  //   phoneImg: weatherDashboardPhone,
  //   browserImg: weatherDashboardBrowser,
  //   // cardOrder: [1, 2, 3],
  //   repoLink: 'https://github.com/a-down/weathercraft-jquery-weather-site',
  //   deployedLink: 'https://weather-craft.onrender.com/',
  //   extraLink: 'https://a-down.github.io/weather-dashboard/',
  //   extraLinkTitle: 'Original Site',
  //   description: 'WeatherCraft is a weather site built with jQuery (JavaScript), HTML, vanilla CSS, and OpenWeatherMap Weather API. Users can view weather by searching a city or zip code and country. The current location will display current weather, upcoming weather for the night, and an bi-hourly forecast. Users can set a favorite location that defaults on site load, as well as view their last five searches in the search modal. Both pieces of information are stored in local storage.',
  //   description2: 'WeatherCraft is a rebuild of a project from my Full-Stack Certificate Program. Updates that I made included: building a backend to handle muptiple API calls, designing from scratch using a 4pt grid system and Figma, adding search by zip functionality, appended and removed elements dynamically, utilized href for searches to allow reloads/bookmarks, allowed users to set a favorite/default location',
  //   techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node.js', 'Express.js', 'GitHub', 'Render']
  // }
];
