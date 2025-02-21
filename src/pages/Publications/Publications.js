import React from 'react';
import './Publications.css';


function Publications(props) {
    const {selectLan} = props;

    return (
        <div className='Publications'>
            <title>{selectLan ? 'DefCRIS | Publications' : 'DefCRIS | Publicaciones'}</title>
            <main>
                <p>{selectLan ? 'Publications' : 'Publicaciones'}</p>
            </main>
        </div>
  );
}

export default Publications;