import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';


function Header(props) {
    const {selectLan} = props;

    return (
        <div className='Header'>
            <button title={selectLan ? 'Theme' : 'Tema'}>boton</button>
            <p>{selectLan ? 'Invest' : 'Invierte'}</p>
            <a href='mailto:montyang224@gmail.com?subject=Quiero contactar con ustedes'>{selectLan ? 'Contact' : 'Contacta'}</a>
            <button title={selectLan ? 'Translate' : 'Traducción'}>boton</button>
        </div>
    );
}

export default withRouter( Header );