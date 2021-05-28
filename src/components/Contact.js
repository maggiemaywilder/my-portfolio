import Pic from './Pic';
import { Form, Row } from 'react-bootstrap';
import { IoIosConstruct } from 'react-icons/io';

const Contact = ({ alt, pic }) => {

    

    
    return (
        <div className="justify-content-center">
            <Form className='mx-auto' >
                <Row className='my-5 text-center'>
                    <Pic alt={alt} pic={pic}  />  
                </Row>
                <Row className="text-center"><h1>{IoIosConstruct}</h1></Row>
                <Row className='text-center'>
                    <h3>Please feel free to reach out via email at <a href="maggiemaywilder@gmail.com">maggiemaywilder@gmail.com</a> or through  any of the methods linked at the top of the page while I construct a contact form.</h3>
                </Row>
              
            </Form>
        </div>
    )
}

export default Contact
