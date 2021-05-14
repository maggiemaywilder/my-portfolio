import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaStackOverflow, FaGithubSquare } from 'react-icons/fa';
// import Footer from './components/Footer';
import Projects from './components/Projects';
import { Container, Row, Col } from 'react-bootstrap';
import BurgerTime from './assets/BurgerTime.png';
import codeQuiz from './assets/codeQuiz.png';
import datePlanner from './assets/datePlanner.png';
import dayPlan from './assets/dayPlan.png';
import littlesLogin from './assets/littlesLogin.png';
import ReadMeScreengrab from './assets/ReadMeScreengrab.png';
import routinify from './assets/routinify.png';
import profile from './assets/profile.png';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const pic = profile;

  const [paragraphs, setParagraphs] = useState([
    {
      id: 1,
      text: `My given name is Margaret, although I've been Maggie my entire life. As lovely a name as Margaret is, it simply doesn't fit me. As I find myself embarking on this wondrous, yet challenging quest, I am thrilled to be here. Although I've never played many computer or video games, (read that as statistically none) I've always loved a good intellectual challenge. While I absolutely need artistic expression and input, I easily excelled at higher level math and science classes.`
    },
    {
      id: 2,
      text: `I was diagnosed with ADHD a couple years ago, while dealing an overly stressful and taumatic cluster of time. Understanding why I struggle with certain things allowed me to find healthier ways to manage those things. It also gave me a chance to look at the big picture and see my strengths more clearly. I have always had a knack for coming up with creative solutions. When it comes to managing a crisis, I'm a whiz at partitioning and putting my attention on the things I can do something about that will help the situation. I love throwing everything I can at something and walking away proud of what I accomplished.`
    },
    {
      id: 3,
      text: `I have always prided myself in being "well-rounded". Over the years, I've found joy in tinkering on old volkswagens, cooking, all manner of art, and music. My current hobbies primarily include knitting and sewing, which I'm using to build a wardrobe which expresses my colorful personality and love of historical fashion aesthetics. I credit my time with my first husband for broadening my horizons and finding a new way to view the world. I credit the time with my second husband for my two amazing children.`
    },    
    {
      id: 4,
      text: `In my children, I see my stubborn streak and their own variations of quirky colorfulness. My daughter loves dramatic flourishes and "girly stuff." She's also fascinated by bugs, reptiles, and all varieties of animal. She brings the color into my world. My son has always been my sunshine, quick with a hug or a smile. Sometimes a little too quick with the hug, invading my personal space and driving me nutty. He has an insane amount of knowledge about dinosaurs and sea creatures for a 4-year-old. With sunshine and color, what else could I need?`
    },    {
      id: 5,
      text: `My goal in being here, is not only to make a path to something I can love and pride myself in doing, but also to give myself the means to provide a safe place where my kids can follow their own neurodivergent paths to whomever they choose to be. I can be the best mom I can be by not only not stressing excessively about providing for their base physical needs, but by modeling my path and lifelong journey to being the best me I can be.`
    }
  ]);

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
      deployed: ' ',
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
      deployed: `https://github.com/maggiemaywilder/comprehensiveReadMeCreator`,
      repo: ' ',
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

        <Header title='Margaret Wilder' nickname='Maggie may' pronouns="(she/her)" links={links}  />  
      </header>
      <body>
        <Row>
          <Projects projects={projects} />  
        </Row>
        <Row style={{ backgroundColor: 'antiquewhite' }} className='justify-content-center'>
          <Col className='col-2 text-center' >
            <Contact alt='Maggie may' pic={pic} />
            
          </Col>
          <Col className='col-8' ><About title='About Me' paragraphs={paragraphs}/></Col>
        </Row>
        
      </body>
      
    </Container>
  );
}

export default App;
