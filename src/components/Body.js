import { Container, Carousel } from 'react-bootstrap';
import Projects from './Projects';
import { useState } from 'react';

const Body = ({ projects }) => {
    const [index, setIndex] =useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className='body mb-0 text-white'>
            <Carousel activeIndex={index} onSelect={handleSelect} pause='hover' wrap> 
                <Projects projects={projects} />
            </Carousel>
        </Container>
    )
}

export default Body

