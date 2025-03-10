import React, { useEffect } from 'react';
import './Persons.css';


function PersonID(props) {
    const {selectLan} = props;

    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])

    return (
        <div className='PersonID'>
            <title>{selectLan ? 'DefCRIS | Person' : 'DefCRIS | Persona'}</title>
            <main>
                <section>
                    <h1>{selectLan ? 'Staff Directory' : 'Directorio del Personal'}</h1>
                    <span className="material-symbols-rounded">person</span>
                </section>
                <section>
                    <h3>{selectLan ? 'Projects' : 'Proyectos'}</h3>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                </section>
                <section>
                    <h3>{selectLan ? 'Articles' : 'Producción Científica'}</h3>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                </section>
            </main>
        </div>
  );
}

export default PersonID;