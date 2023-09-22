import safePawsPhone from '../../assets/project-visuals/safe-paws-phone.png'
import safePawsBrowser from '../../assets/project-visuals/safe-paws-browser.png'
import techBlogPhone from '../../assets/project-visuals/tech-blog-phone.png'
import techBlogBrowser from '../../assets/project-visuals/tech-blog-browser.png'
import gameVerseHubPhone from '../../assets/project-visuals/gameversehub-phone.png'
import gameVerseHubBrowser from '../../assets/project-visuals/gameversehub-browser.png'
import weatherDashboardPhone from '../../assets/project-visuals/weather-dashboard-phone.png'
import weatherDashboardBrowser from '../../assets/project-visuals/weather-dashboard-browser.png'
import codeQuizPhone from '../../assets/project-visuals/code-quiz-phone.png'
import codeQuizBrowser from '../../assets/project-visuals/code-quiz-browser.png'
import noteTakerPhone from '../../assets/project-visuals/note-taker-phone.png'
import noteTakerBrowser from '../../assets/project-visuals/note-taker-browser.png'
import friendsDbPhone from '../../assets/project-visuals/friends-db-phone.png'
import friendsDbBrowser from '../../assets/project-visuals/friends-db-browser.png'
import gameWorldPhone from '../../assets/project-visuals/game-world-phone.jpeg'
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
    techStack: ['React', 'JavaScript', 'Tailwind', 'HTML', 'GitHub', 'Node.js', 'Express', 'MongoDB', 'Heroku']
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
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Handlebars',  'Node.js', 'Express', 'MySQL', 'Sequelize', 'GitHub', 'Heroku']
  },
  // {
  //   title: 'Coding Quiz',
  //   color: '#F08080',
  //   phoneImg: codeQuizPhone,
  //   browserImg: codeQuizBrowser,
  //   // cardOrder: [2, 3, 1],
  //   repoLink: 'https://github.com/a-down/code-quiz',
  //   deployedLink: 'https://a-down.github.io/code-quiz/',
  //   description: 'The Coding Quiz allows users to take a 10-question test on JavaScript. Users have 90 seconds to answer every question. Users can save their initials and scores to compare to previous and future attempts.',
  //   description2: '',
  //   techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub']
  // },
  {
    title: 'Undefined Opinions',
    color: '#3E829A',
    phoneImg: techBlogPhone,
    browserImg: techBlogBrowser,
    // cardOrder: [3, 2, 1],
    repoLink: 'https://github.com/a-down/tech-blog',
    deployedLink: 'https://a-down-tech-blog-b6cbf85bb984.herokuapp.com',
    description: 'Undefined Opinions is a full-stack website that allows users to view blog posts posted on the site. Users can also create an account, post and edit their own blog posts, and comment on posts made by others. Users must be signed in to add posts or comments to the MySQL database.',
    description2: 'The blog side uses server-side rendering (Handlebars) to update the site based on database data and the logged-in user.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'Handlebars', 'jQuery', 'Express', 'Node.js', 'MySQL', 'Sequelize', 'GitHub', 'Heroku']
  },
  // {
  //   title: 'Game Verse Hub',
  //   color: '#2D6EFD',
  //   phoneImg: gameVerseHubPhone,
  //   browserImg: gameVerseHubBrowser,
  //   // cardOrder: [2, 1, 3],
  //   repoLink: 'https://github.com/a-down/GameVerseHub',
  //   deployedLink: 'https://a-down.github.io/GameVerseHub/',
  //   description: 'GameVerseHub was a team project during my Full Stack Certificate Program. We built the site for users to see featured video games and search for games by keyword. RAWG API powers the site.',
  //   description2: 'I built the client-side JavaScript for the search page. I managed the GitHub Repo, resolved merge conflicts, and approved pull requests.',
  //   techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap','GitHub' ]
  // },
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
    description: 'The Weather Dashboard allows users to search for current and future weather by city name. The site saves user search history for future reference. The Weather Dashboard is built with jQuery and powered by the OpenWeather API.',
    description2: 'GameVerseHub was a team project during my Full Stack Certificate Program. We built the site for users to see featured video games and search for games by keyword. RAWG API powers the site.',
    description3: 'For the origininal GameVerseHub, I built the client-side JavaScript for the search page. I managed the GitHub Repo, resolved merge conflicts, and approved pull requests.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'GitHub']
  },
  {
    title: 'Weather Dashboard',
    color: '#EAC792',
    phoneImg: weatherDashboardPhone,
    browserImg: weatherDashboardBrowser,
    // cardOrder: [1, 2, 3],
    repoLink: 'https://github.com/a-down/weather-dashboard',
    deployedLink: 'https://a-down.github.io/weather-dashboard/',
    description: 'The Weather Dashboard allows users to search for current and future weather by city name. The site saves user search history for future reference. The Weather Dashboard is built with jQuery and powered by the OpenWeather API.',
    description2: '',
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'GitHub']
  },
  {
    title: 'Note Taker',
    color: '#44CAF0',
    phoneImg: noteTakerPhone,
    browserImg: noteTakerBrowser,
    // cardOrder: [3, 2, 1],
    repoLink: 'https://github.com/a-down/note-taker',
    deployedLink: 'https://a-down-note-taker-a4f5d9c37c25.herokuapp.com/',
    description: 'Note Taker is a full-stack website for users to save notes to stay organized. Express.js and Node.js save the notes as JSON files in the server. Users can also delete notes saved to the site.',
    description2: 'I built out the backend of the website and deployed the website to Heroku.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Express', 'Node.js', 'GitHub', 'Heroku']
  },
]