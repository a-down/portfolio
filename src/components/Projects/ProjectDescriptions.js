import safePawsPhone from '../../assets/project-visuals/safe-paws-phone.png'
import safePawsBrowser from '../../assets/project-visuals/safe-paws-browser.png'
import techBlogPhone from '../../assets/project-visuals/tech-blog-phone.png'
import techBlogBrowser from '../../assets/project-visuals/tech-blog-browser.png'
import weatherDashboardPhone from '../../assets/project-visuals/weather-dashboard-phone.png'
import weatherDashboardBrowser from '../../assets/project-visuals/weather-dashboard-browser.png'
import noteTakerPhone from '../../assets/project-visuals/note-taker-phone.png'
import noteTakerBrowser from '../../assets/project-visuals/note-taker-browser.png'
import friendsDbPhone from '../../assets/project-visuals/friends-db-phone.png'
import friendsDbBrowser from '../../assets/project-visuals/friends-db-browser.png'
import gameWorldPhone from '../../assets/project-visuals/game-world-phone.png'
import gameWorldBrowser from '../../assets/project-visuals/game-world-browser.png'


export let projects = [
  {
    title: 'Friends.db',
    color: '#62BCF4',
    phoneImg: friendsDbPhone,
    browserImg: friendsDbBrowser,
    repoLink: 'https://github.com/a-down/friends-db',
    deployedLink: 'https://friendsdb-5ccabe7c6928.herokuapp.com/',     
    description: `Friends.db was a team project during my Full-Stack Certificate Program. We built a social media site for developers to share creations and questions with their coding friends. Users can sign in to their account, create profiles, follow friends, see and interact with friends' posts, and receive notifications when friends interact with their posts or follow them. Users choose a color for themselves to represent them across the site using React useContext.`,
    description2: `I was the primary React developer and site designer. I led the way on the front end while managing the project's GitHub repo, site deployment, and database hosting.`,
    techStack: ['React', 'JavaScript', 'Tailwind', 'HTML', 'CSS', 'GitHub', 'Node.js', 'Express.js', 'MongoDB', 'Heroku']
  },
  {
    title: 'Safe Paws',
    color: '#DB7F67',
    phoneImg: safePawsPhone,
    browserImg: safePawsBrowser,
    repoLink: 'https://github.com/a-down/safe-paws',
    deployedLink: 'https://safe-paws-da967720d734.herokuapp.com/',     
    description: 'Safe Paws was a team project during my Full-Stack Certificate Program. We built a website that used server-side rendering (Handlebars) to dynamically render the webpage according to the user. Users can create an account, add and remove pets, and book appointments.',
    description2: 'I was the front-end architect and designer (HTML and CSS). I also assisted on the client-side JavaScript and the backend. I managed the GitHub Repo, resolved conflicts, and approved pull requests.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Handlebars',  'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'GitHub', 'Heroku']
  },
  {
    title: 'Game World',
    color: '#7C3AED',
    phoneImg: gameWorldPhone,
    browserImg: gameWorldBrowser,
    // cardOrder: [1, 2, 3],
    repoLink: 'https://github.com/a-down/game-world-react-rebuild',
    deployedLink: 'https://a-down-game-world.vercel.app',
    extraLink: 'https://github.com/a-down/GameVerseHub',
    extraLinkTitle: 'Original Repo',
    description: 'Game World is a site where users can see featured video games and search for games using the RAWG API. I built Game World to rebuild a group project with an updated techstack (focused around React). ',
    description2: 'GameVerseHub was a team project during my Full-Stack Coding Bootcamp. It was a site built fo rusers to look up video games and see details about the games. When users searched for a games, `JavaScript (jQuery)` would take a search term entered by the user, make a fetch call to the `RAWG API`, and append cards with the search results to the page. Because of the reactive nature of the site, I wanted to build the webpage with React.',
    description3: 'For the origininal GameVerseHub, I built the client-side JavaScript for the search page. I managed the GitHub Repo, resolved merge conflicts, and approved pull requests.',
    techStack: ['React', 'JavaScript', 'Tailwind', 'Radix UI', 'HTML', 'CSS', 'Framer Motion', 'GitHub', 'Vite', 'Vercel']
  },
  {
    title: 'WeatherCraft',
    color: '#FBD28E',
    phoneImg: weatherDashboardPhone,
    browserImg: weatherDashboardBrowser,
    // cardOrder: [1, 2, 3],
    repoLink: 'https://github.com/a-down/weathercraft-jquery-weather-site',
    deployedLink: 'https://weathercraft-68e93962bfa5.herokuapp.com/',
    extraLink: 'https://a-down.github.io/weather-dashboard/',
    extraLinkTitle: 'Original Site',
    description: 'WeatherCraft is a weather site built with jQuery (JavaScript), HTML, vanilla CSS, and OpenWeatherMap Weather API. Users can view weather by searching a city or zip code and country. The current location will display current weather, upcoming weather for the night, and an bi-hourly forecast. Users can set a favorite location that defaults on site load, as well as view their last five searches in the search modal. Both pieces of information are stored in local storage.',
    description2: 'WeatherCraft is a rebuild of a project from my Full-Stack Certificate Program. Updates that I made included: building a backend to handle muptiple API calls, designing from scratch using a 4pt grid system and Figma, adding search by zip functionality, appended and removed elements dynamically, utilized href for searches to allow reloads/bookmarks, allowed users to set a favorite/default location',
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node.js', 'Express.js', 'GitHub', 'Heroku']
  },
  {
    title: 'Undefined Opinions',
    color: '#3E829A',
    phoneImg: techBlogPhone,
    browserImg: techBlogBrowser,
    // cardOrder: [3, 2, 1],
    repoLink: 'https://github.com/a-down/full-stack-tech-blog',
    deployedLink: 'https://a-down-tech-blog-b6cbf85bb984.herokuapp.com',
    description: 'Undefined Opinions is a full-stack website that allows users to view blog posts posted on the site. Users can also create an account, post and edit their own blog posts, and comment on posts made by others. Users must be signed in to add posts or comments to the MySQL database.',
    description2: 'The blog side uses server-side rendering (Handlebars) to update the site based on database data and the logged-in user.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'Handlebars', 'jQuery', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'GitHub', 'Heroku']
  },
  // {
  //   title: 'Note Taker',
  //   color: '#44CAF0',
  //   phoneImg: noteTakerPhone,
  //   browserImg: noteTakerBrowser,
  //   // cardOrder: [3, 2, 1],
  //   repoLink: 'https://github.com/a-down/note-taker',
  //   deployedLink: 'https://a-down-note-taker-a4f5d9c37c25.herokuapp.com/',
  //   description: 'Note Taker is a full-stack website for users to save notes to stay organized. Express.js and Node.js save the notes as JSON files in the server. Users can also delete notes saved to the site.',
  //   description2: 'I built out the backend of the website and deployed the website to Heroku.',
  //   techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'GitHub', 'Heroku']
  // },
]