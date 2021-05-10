import { Jumbotron, Container } from 'react-bootstrap';
import Socials from './Socials';


const Header = (props) => {
    const links = props.links;

    return (
        <Jumbotron fluid>
            <Container>
                <h1>{props.title}</h1>
                <small className="text-muted">{props.nickname} {props.pronouns}</small>
                <Socials links={links}/>
            </Container>
        </Jumbotron>
        )
}

export default Header
