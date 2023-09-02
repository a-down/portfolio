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
      deployedLink: 'https://safe-paws-da967720d734.herokuapp.com/',
      techStack: ['HTML', 'CSS', 'JavaScript', /*Handlebars*/, 'Bootstrap', 'Express', /*Sequelize*/, 'Node.js']
    },
    {
      title: 'Tech Blog',
      color: '#3E829A',
      phoneImg: techBlogPhone,
      browserImg: techBlogBrowser,
      repoLink: 'https://github.com/a-down/tech-blog',
      deployedLink: 'https://a-down-tech-blog-b6cbf85bb984.herokuapp.com',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'GameVerseHub',
      color: '#2D6EFD',
      phoneImg: gameVerseHubPhone,
      browserImg: gameVerseHubBrowser,
      repoLink: 'https://github.com/a-down/GameVerseHub',
      deployedLink: 'https://a-down.github.io/GameVerseHub/',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Weather Dashboard',
      color: '#EAC792',
      phoneImg: weatherDashboardPhone,
      browserImg: weatherDashboardBrowser,
      repoLink: 'https://github.com/a-down/weather-dashboard',
      deployedLink: 'https://a-down.github.io/weather-dashboard/',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Code Quiz',
      color: '#F08080',
      phoneImg: codeQuizPhone,
      browserImg: codeQuizBrowser,
      repoLink: 'https://github.com/a-down/code-quiz',
      deployedLink: 'https://a-down.github.io/code-quiz/',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Note Taker',
      color: '#44CAF0',
      phoneImg: noteTakerPhone,
      browserImg: noteTakerBrowser,
      repoLink: 'https://github.com/a-down/note-taker',
      deployedLink: 'https://a-down-note-taker-a4f5d9c37c25.herokuapp.com/',
      techStack: ['HTML', 'CSS', 'JavaScript']
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