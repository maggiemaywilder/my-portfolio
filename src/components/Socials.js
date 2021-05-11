import { Nav, ButtonGroup } from 'react-bootstrap';


const Socials = ({ links }) => {

    const listItems = links.map((link) => 
                <a className='mx-2' href={link.url}>{link.icon}</a>);

    return (
            <Nav className='justify-content-center'>
                <h2><ButtonGroup>{listItems}</ButtonGroup></h2>
            </Nav>
    )
}


export default Socials


