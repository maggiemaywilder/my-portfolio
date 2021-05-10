import { Nav, ButtonGroup } from 'react-bootstrap';


const Socials = () => {

    const listItems = links.map((link) => 
                <a href={link.url}>{link.icon}</a>);

    return (
            <Nav className='justify-content-center'>
                <ButtonGroup>{listItems}</ButtonGroup>
            </Nav>
    )
}


export default Socials


