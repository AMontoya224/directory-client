import React from 'react';
import './Organizations.css';


function Organizations(props) {
    const {selectLan} = props;

    return (
        <div className='Organizations'>
            <title>{selectLan ? 'DefCRIS | Organizations' : 'DefCRIS | Organizaciones'}</title>
            <main>
                <p>{selectLan ? 'Organizations' : 'Organizaciones'}</p>
            </main>
        </div>
  );
}

export default Organizations;