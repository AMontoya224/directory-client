import React from 'react';
import './Persons.css';


function Persons(props) {
    const {selectLan} = props;

    return (
        <div className='Persons'>
            <title>{selectLan ? 'DefCRIS | Persons' : 'DefCRIS | Personas'}</title>
            <main>
                <section>
                    <h3>{selectLan ? 'Filters for people' : 'Filtros para personas'}</h3>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                    <p>Prueba de filtro</p>
                </section>
                <section>
                    <h3>{selectLan ? 'Persons' : 'Personas'}</h3>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>
                    <p>Prueba de perfl de persona</p>

                </section>
            </main>
        </div>
  );
}

export default Persons;