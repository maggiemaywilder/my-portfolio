import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaStackOverflow, FaGithubSquare } from 'react-icons/fa';




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


  return (
    <div className='App'>
      <Header title='Margaret Wilder' nickname='Maggie may' pronouns="(she/her)" links={links} />
      
    </div>
  );
}

export default App;
