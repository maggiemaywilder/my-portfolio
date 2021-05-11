import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaStackOverflow, FaGithubSquare } from 'react-icons/fa';
import Footer from './components/Footer';



function App() {
  const [links, setLinks] = useState([
    {
        url: 'https://github.com/maggiemaywilder',
        icon: <FaGithubSquare />
    },
    {
        url: 'https://stackoverflow.com/users/14451891/maggie-may',
        icon: <FaStackOverflow />
    },
    {
        url: 'https://www.instagram.com/magdelainamoo/',
        icon: <FaInstagramSquare />
    },
    {
        url: 'https://www.linkedin.com/in/maggie-may-wilder/',
        icon: <FaLinkedin />
    },
    {
        url: 'https://twitter.com/HeyMaggieMay79',
        icon: <FaTwitterSquare />
    }
])

  const [projects, setProjects] = useState([
    {
      title: 'Routinify: Digital whiteboard app',
      description: 'Digital group task and household management app using JavaScript, MySQL, Node, Express, Handlebars, and Sequelize.',
      deployed: `https://routinify.herokuapp.com/`,
      repo: `https://github.com/Keaton-Brewster/project-2`,
      image: '../public/assets/task.PNG'
    },
    {
      title: 'Littles login',
      description: 'Simple interface for adding to an application to allow parents to help their littlest users to start learning about device privacy and security with a color pattern password login.',
      repo: `https://github.com/maggiemaywilder/littlesLogin`,
      image: '../public/assets/screencapture- interface with name and password entered.png'
    },
    {
      title: 'Burger Grubbing: the burger logger',
      description: 'A burger logger with MySQL, Node, Express, handlebars and a homemade ORM.',
      deployed: `https://calm-hamlet-80672.herokuapp.com`,
      repo: `https://github.com/maggiemaywilder/burgerGrubbing`,
      image: '../public/assets/BurgerTimeScreenshot.png'
    },
    {
      title: 'ReadMe generator: commandline app',
      description: 'A commandline application for generating the basic structure of a ReadME file.',
      deployed: `https://calm-hamlet-80672.herokuapp.com`,
      repo: ``,
      image: '../public/assets/ReadMeScreengrab.png'
    },
    {
      title: 'Date Planning Web App',
      description: 'Provides a single location to locate events in a location, search restaurant options in the area, and check the weather when it is time to get ready for your event. Simplifies date or outing planning by bringing multiple elements into one site.',
      deployed: `https://justrait.github.io/TeamProject1`,
      repo: `https://github.com/JuStrait/TeamProject1/`,
      image: '../public/assets/screencapture-justrait-github-io-TeamProject1-event-html-2021-02-04-12_45_56.png'
    },
    {
      title: 'Coding Quiz',
      description: 'Simple online quiz to test coding knowledge.',
      deployed: `https://maggiemaywilder.github.io/codeQuizWebAPIs`,
      repo: `https://github.com/maggiemaywilder/codeQuizWebAPIs`,
      image: '../public/assets/anotherQuestion.png'
    },
    {
      title: 'Day Planner',
      description: `Basic day planner to save a day's appointments hour-by-hour`,
      deployed: `https://maggiemaywilder.github.io/dayPlanner`,
      repo: `https://github.com/maggiemaywilder/dayPlanner`,
      image: '../public/assets/screencapture.png'
    }
  ])

  

  return (
    <div className='App'>
      <header >
        <Header title='Margaret Wilder' nickname='Maggie may' pronouns="(she/her)" links={links} />  
      </header>
      <body>

      </body>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
