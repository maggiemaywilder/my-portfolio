import Pic from './Pic';
import { Form, Button, Row } from 'react-bootstrap';

const Contact = ({ alt, pic }) => {
    return (
        <div>
            <Form className='mx-auto' >
                <Row className='my-5'>
                    <Pic alt={alt} pic={pic}  />  
                </Row>
                <Row className='text-center'>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter your name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control type='textarea' rows={4} />
                    </Form.Group>

                </Row>
                <Row >
                    <Button variant="primary" type="submit" className='mb-2 mx-auto'>Submit</Button>    
                </Row>
              
            </Form>
        </div>
    )
}

export default Contact
