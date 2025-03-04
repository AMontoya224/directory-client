import {React, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';
import flag from './../../images/flag_peru.png';


function Header(props) {
    const {selectLan, onSelectLan} = props;
    const [active, setActive] = useState( false );
    const [search, setSearch] = useState( false );
    //const [roll, setRoll] = useState( false );
    let url = useLocation().pathname;

    const onActive = () => {
        if(!active){
            setActive( true );
        }
        else{
            setActive( false );
        }
    };

    const onSearch = () => {
        if(!search){
            setSearch( true );
        }
        else{
            setSearch( false );
        }
    };

    const onLanguage = () => {
        if(!selectLan){
            onSelectLan( true );
        }
        else{
            onSelectLan( false );
        }
    };

    const onSetting = () => {
        selectLan ? alert('Settings not yet implemented') : alert('Configuración aún no implementado');
    };

    const onAnalysis = () => {
        selectLan ? alert('AI not yet implemented') : alert('IA aún no implementada');
    };

    return (
        <div className='Header'>
            <section className={active ? 'active' : ''}>
                <div>
                    <p><img className='header-flag' src={flag} alt='flag'/>{selectLan ? 'Official website of the Peru' : 'Sitio oficial del Gobierno del Perú'}<span onClick={onActive}>{selectLan ? "here's how you know" : 'así se sabe'}</span></p>
                    <div className={active ? 'active' : ''}>
                        <p>Un sitio web .gob.pe pertenece a una organización gubernamental oficial del Perú.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <button className='button-secundary' onClick={onAnalysis}><span className="material-symbols-rounded">neurology</span></button>
                        <form className={search ? 'active' : ''}>
                            <input></input>
                            <button className='button-secundary'><span className="material-symbols-rounded">send</span></button>
                        </form>
                        <button className='button-secundary' onClick={onSearch}><span className="material-symbols-rounded">{search ? 'close' : 'search'}</span></button>
                        <Link to='/login'><span className="material-symbols-rounded">login</span></Link>
                        <button className='button-secundary' onClick={onLanguage}><span className="material-symbols-rounded">language</span></button>
                        <button className='button-secundary' onClick={onSetting}><span className="material-symbols-rounded">settings</span></button>
                    </div>
                    <div className={active ? 'spc active' : 'spc'}>
                        <p>Un icono de candado ( ) o https:// significa que se ha conectado de forma segura al sitio web .gob.pe</p>
                    </div>
                </div>
            </section>
            <section className={active ? 'active' : ''}>
                <nav>
                    <Link to='/' style={url==='/' ? {display : 'none'} : {display : 'block'}}><div><img className='flag' src={flag} alt='flag'/><h3>{selectLan ? 'DefCRIS.gob.pe' : 'DefCRIS.gob.pe'}</h3></div></Link>
                    <Link to='/persons'><h3>{selectLan ? 'Persons' : 'Personas'}</h3></Link>
                    <Link to='/organizations'><h3>{selectLan ? 'Organizations' : 'Organizaciones'}</h3></Link>
                    <Link to='/projects'><h3>{selectLan ? 'Projects' : 'Proyectos'}</h3></Link>
                    <Link to='/publications'><h3>{selectLan ? 'Publications' : 'Publicaciones'}</h3></Link>
                    {/*<Link to='/publications'><div><span className="material-symbols-rounded">menu_book</span><h3>{selectLan ? 'Publications' : 'Publicaciones'}</h3><p>15785</p></div></Link>*/}
                </nav>
            </section>
        </div>
    );
}

export default Header;