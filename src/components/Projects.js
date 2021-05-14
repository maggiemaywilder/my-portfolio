import { Container, Carousel, Card } from 'react-bootstrap';
import { useState } from 'react';

const Projects = ({ projects }) => {
    const isDeployed = projects.deployed;

    const [index, setIndex] =useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const pCards = projects.map((project) => (
        
        <Carousel.Item key={project.id}>
            <Card className='pcard mx-auto mb-5 mt-3 text-center text-dark'>
                <Card.Header className=' text-wrap'>{project.title}</Card.Header>
                <Card.Body>
                    <img src={project.image} alt={project.title} className='img-thumbnail' style={{ maxWidth: '400px', height: 'auto' }}/>
                </Card.Body> 
                <Card.Body>
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>    
                <Card.Body>
                <Card.Link href={project.repo}>Github</Card.Link>
                {isDeployed !== ' ' &&
                    <Card.Link href={project.deployed}>Site</Card.Link>
                }
                </Card.Body>
            </Card>
        </Carousel.Item>
    ))


    return (
        <Container fluid className='body mb-0 text-white '>
            <Carousel activeIndex={index} onSelect={handleSelect} pause='hover' wrap > 
                {pCards}
            </Carousel>
        </Container>
    )
}

export default Projects

