import React from 'react';
import './Persons.css';


function Persons(props) {
    const {selectLan} = props;

    return (
        <div className='Persons'>
            <title>{selectLan ? 'DefCRIS | Persons' : 'DefCRIS | Personas'}</title>
            <main>
                <p>{selectLan ? 'Persons' : 'Personas'}</p>
            </main>
        </div>
  );
}

export default Persons;