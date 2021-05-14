import { Card } from 'react-bootstrap';


const About = (props) => {
    const paragraphs = props.paragraphs;

    const cardText = paragraphs.map((paragraph) => (
        <p key={paragraph.id}>{paragraph.text}</p>
    ))

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title className='text-center'>{props.title}</Card.Title>
                    <Card.Text>
                        {/* <Pic alt='Maggie may' pic={props.pic} /> */}
                        {cardText}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default About
