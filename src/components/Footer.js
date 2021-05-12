import { Navbar, ButtonGroup, Button } from 'react-bootstrap';


const Footer = () => {
    return (
        <div>
            <Navbar bg='dark' className='mt-0'>
                <ButtonGroup>
                    <Button variant='outline-light'>About Me</Button>
                    <Button variant='outline-light'>Contact Me</Button>
                </ButtonGroup>
            </Navbar>
        </div>
    )
}

export default Footer
