import React from 'react';
import './Projects.css';


function Projects(props) {
    const {selectLan} = props;

    return (
        <div className='Projects'>
            <title>{selectLan ? 'DefCRIS | Projects' : 'DefCRIS | Proyectos'}</title>
            <main>
                <p>{selectLan ? 'Projects' : 'Proyectos'}</p>
            </main>
        </div>
  );
}

export default Projects;