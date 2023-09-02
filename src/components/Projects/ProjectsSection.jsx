import projectsBG from '../../assets/backgrounds/projects-bg.svg'
import Project from './Project'
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

export default function ProjectSection() {

  const backgroundStyle = {
    backgroundImage: `url(${projectsBG})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    backgroundPosition: 'top',
  }

  const projects = [
    {
      title: 'Safe Paws',
      color: '#DB7F67',
      phoneImg: safePawsPhone,
      browserImg: safePawsBrowser,
      repoLink: 'https://github.com/a-down/safe-paws',
      // deployedLink: 'https://safe-paws-da967720d734.herokuapp.com/',      cardOrder: [1, 2, 3],
      description: 'Safe Paws was a team project that was completed during my Full Stack Certificate Program. We built a website that used server-side rendering (Handlebars) to dynamically deliver the webpage. Visitors to the website can create an account, add and remove pets, and book appointments.',
      description2: 'I was the front end builder and designer (HTML and CSS), and I also assisted on the backend as needed. I managed the GitHub Repo, resolved conflicts, and approved pull requests.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Handlebars',  'Node.js', 'Express', 'MySQL', 'Sequelize', 'GitHub', 'Heroku']
    },
    {
      title: 'Undefined Opinions',
      color: '#3E829A',
      phoneImg: techBlogPhone,
      browserImg: techBlogBrowser,
      // cardOrder: [3, 2, 1],
      repoLink: 'https://github.com/a-down/tech-blog',
      deployedLink: 'https://a-down-tech-blog-b6cbf85bb984.herokuapp.com',
      description: 'Undefined Options is a full stack web application that allows users to view blog posts posted on the site. Users can also create an account, post and edit their own blog posts, and comment on posts made by others.',
      description2: 'The blog site uses server-side rendering (Handlebars) to dynamically update the site based on posts in the SQL database and based on the logged-in user. ',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'Handlebars', 'jQuery', 'Express', 'Node.js', 'MySQL', 'Sequelize', 'GitHub', 'Heroku']
    },
    {
      title: 'GameVerseHub',
      color: '#2D6EFD',
      phoneImg: gameVerseHubPhone,
      browserImg: gameVerseHubBrowser,
      // cardOrder: [2, 1, 3],
      repoLink: 'https://github.com/a-down/GameVerseHub',
      deployedLink: 'https://a-down.github.io/GameVerseHub/',
      description: 'GameVerseHub was a team project that was completed during my Full Stack Certificate Program. The site was built to allow users to see featured video games, as we as search for video games by keyword. This site is powered by the RAWG API.',
      description2: 'I was responsible for client-side JavaScript on the search page. I managed the GitHub Repo, resolved conflicts, and approved pull requests.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap','GitHub' ]
    },
    {
      title: 'Weather Dashboard',
      color: '#EAC792',
      phoneImg: weatherDashboardPhone,
      browserImg: weatherDashboardBrowser,
      // cardOrder: [1, 2, 3],
      repoLink: 'https://github.com/a-down/weather-dashboard',
      deployedLink: 'https://a-down.github.io/weather-dashboard/',
      description: 'The Weather Dashboard was created for users to search for current and future weather by city names using the OpenWeather API. The site saves user searches so they are easy to search again in the future. The site was built with jQuery.',
      description2: '',
      techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'GitHub']
    },
    {
      title: 'Coding Quiz',
      color: '#F08080',
      phoneImg: codeQuizPhone,
      browserImg: codeQuizBrowser,
      // cardOrder: [2, 3, 1],
      repoLink: 'https://github.com/a-down/code-quiz',
      deployedLink: 'https://a-down.github.io/code-quiz/',
      description: 'The Coding Quiz allows users to take a 10-question test on JavaScript knowledge. Users are given 90 seconds to answer every question. At the end of the quiz, users can save their initials and score to local storage.',
      description2: '',
      techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub']
    },
    {
      title: 'Note Taker',
      color: '#44CAF0',
      phoneImg: noteTakerPhone,
      browserImg: noteTakerBrowser,
      // cardOrder: [3, 2, 1],
      repoLink: 'https://github.com/a-down/note-taker',
      deployedLink: 'https://a-down-note-taker-a4f5d9c37c25.herokuapp.com/',
      description: 'Note Taker is a full-stack website where users can save notes and stay organized. When a note is created, Express and Node.js are used to save the note as a JSON file in the server. Users can also delete notes saved to the site.',
      description2: 'I was responsible for building out the backend of the website and deploying the website.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Express', 'Node.js', 'GitHub', 'Heroku']
    },
  ]


  return (
    <div style={backgroundStyle} className='pb-24'>
      { projects.map((project) => (
        <Project project={project} key={project.title} stackArr={project.techStack} isDark={true}/>
      ))}
    </div>
  )
}