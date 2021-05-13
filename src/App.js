import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaStackOverflow, FaGithubSquare } from 'react-icons/fa';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { Container } from 'react-bootstrap';
import BurgerTime from './assets/BurgerTime.png';
import codeQuiz from './assets/codeQuiz.png';
import datePlanner from './assets/datePlanner.png';
import dayPlan from './assets/dayPlan.png';
import littlesLogin from './assets/littlesLogin.png';
import ReadMeScreengrab from './assets/ReadMeScreengrab.png';
import routinify from './assets/routinify.png';
import profile from './assets/profile.png';


function App() {
  const pic = profile;

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
      id: 1,
      title: 'Routinify: Digital whiteboard app',
      description: 'Digital group task and household management app using JavaScript, MySQL, Node, Express, Handlebars, and Sequelize.',
      deployed: `https://routinify.herokuapp.com/`,
      repo: `https://github.com/Keaton-Brewster/project-2`,
      image: `${routinify}`
    },
    {
      id: 2,
      title: 'Littles login',
      description: 'Simple interface for adding to an application to allow parents to help their littlest users to start learning about device privacy and security with a color pattern password login.',
      repo: `https://github.com/maggiemaywilder/littlesLogin`,
      image: `${littlesLogin}`
    },
    {
      id: 3,
      title: 'Burger Grubbing: the burger logger',
      description: 'A burger logger with MySQL, Node, Express, handlebars and a homemade ORM.',
      deployed: `https://calm-hamlet-80672.herokuapp.com`,
      repo: `https://github.com/maggiemaywilder/burgerGrubbing`,
      image: `${BurgerTime}`
    },
    {
      id: 4,
      title: 'ReadMe generator: commandline app',
      description: 'A commandline application for generating the basic structure of a ReadME file.',
      deployed: `https://calm-hamlet-80672.herokuapp.com`,
      repo: null,
      image: `${ReadMeScreengrab}`
    },
    {
      id: 5,
      title: 'Date Planning Web App',
      description: 'Provides a single location to locate events in a location, search restaurant options in the area, and check the weather when it is time to get ready for your event. Simplifies date or outing planning by bringing multiple elements into one site.',
      deployed: `https://justrait.github.io/TeamProject1`,
      repo: `https://github.com/JuStrait/TeamProject1/`,
      image: `${datePlanner}`
    },
    {
      id: 6,
      title: 'Coding Quiz',
      description: 'Simple online quiz to test coding knowledge.',
      deployed: `https://maggiemaywilder.github.io/codeQuizWebAPIs`,
      repo: `https://github.com/maggiemaywilder/codeQuizWebAPIs`,
      image: `${codeQuiz}`
    },
    {
      id: 7,
      title: 'Day Planner',
      description: `Basic day planner to save a day's appointments hour-by-hour`,
      deployed: `https://maggiemaywilder.github.io/dayPlanner`,
      repo: `https://github.com/maggiemaywilder/dayPlanner`,
      image: `${dayPlan}`
    }
  ])

  

  return (
    <Container fluid className='App'>
      <header >

        <Header title='Margaret Wilder' nickname='Maggie may' pronouns="(she/her)" links={links} pic={pic} />  
      </header>
      <body>
        <Projects projects={projects} />
      </body>
      <footer className='fixed-bottom'>
        <Footer />
      </footer>
      
    </Container>
  );
}

export default App;
