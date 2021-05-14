import { Jumbotron, Container } from 'react-bootstrap';
import Socials from './Socials';



const Header = (props) => {
    const links = props.links;

    return (
        <Jumbotron style={{ backgroundColor: 'midnightblue' }} fluid className='mb-0'>
            <Container>
                <h1 style={{ color: 'white' }}>{props.title}</h1>
                <small className="text-muted">{props.nickname} {props.pronouns}</small>
                <Socials links={links}/>
            </Container>
        </Jumbotron>
        )
}

export default Header
