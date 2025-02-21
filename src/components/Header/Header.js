import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


function Header(props) {
    const {selectLan, onSelectLan} = props;

    const onLang = () => {
        if(!selectLan){
            onSelectLan( true );
        }
        else{
            onSelectLan( false );
        }
    };

    return (
        <div className='Header'>
            <button className='button-primary'><span className="material-symbols-rounded">search</span></button>
            <nav>
                <Link to='/'><p>{selectLan ? 'Home' : 'Inicio'}</p></Link>
                <Link to='/persons'><p>{selectLan ? 'Persons' : 'Personas'}</p></Link>
                <Link to='/organizations'><p>{selectLan ? 'Organizations' : 'Organizaciones'}</p></Link>
                <Link to='/projects'><p>{selectLan ? 'Projects' : 'Proyectos'}</p></Link>
                <Link to='/publications'><p>{selectLan ? 'Publications' : 'Publicaciones'}</p></Link>
            </nav>
            <button onClick={onLang}><span className="material-symbols-rounded">language</span><p>{selectLan ? 'English' : 'Español'}</p></button>
        </div>
    );
}

export default Header;