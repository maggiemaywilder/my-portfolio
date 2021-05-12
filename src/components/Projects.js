import { CarouselItem } from 'react-bootstrap';
import { useState } from 'react';

const Projects = ({ projects }) => {
    return (
        <>
            {projects.map((project) => (
                <h3 key={project.id}>{project.title}</h3>
            ))}
            
        </>
    )
}

export default Projects
