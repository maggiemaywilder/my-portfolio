import Pic from './Pic';
import { Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';


const Contact = ({ alt, pic }) => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_nze5rd3', 'template_7pykemu', e.target, 'user_zjYVrvloVpN8fVQ6CAnIM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    
    return (
        <div className="justify-content-center">
            <Row className='my-5 justify-content-center'>
                <Pic alt={alt} pic={pic}  />  
            </Row>
            <Row className="justify-content-center ">
                <h1>Send me a message!</h1>
                <form className="contactForm" onSubmit={sendEmail} >
                    <input type="hidden" name="contact_number" />

                    <div className="formItem">
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className="formItem">
                        <label>Email</label>
                        <input type="email" name="email" />   
                    </div>
                    
                    <div className="formItem">
                        <label>Message</label>
                        <textarea name="message" 
                            cols="30" rows="5"
                            />    
                    </div>
                    
                    <div className="btn">
                        <button type="submit">Send</button>
                    </div>
                </form>

            </Row>
        </div>
    )
}

export default Contact
