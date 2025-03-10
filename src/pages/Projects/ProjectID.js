import React, {useState, useEffect} from 'react';
import './Projects.css';


function ProjectID(props) {
    const {selectLan, setTheme} = props;
    const [nav, setNav] = useState('perfil');

    const onNav = (e) => {
        setNav(e);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setTheme(true);
    }, [setTheme]);

    return (
        <div className='ProjectID'>
            <title>{selectLan ? 'DefCRIS | Person' : 'DefCRIS | Persona'}</title>
            <nav>
                <div></div>
                <div className={nav==='perfil' ? 'active' : ''} onClick={() => onNav('perfil')}>Perfil</div>
                <div className={nav==='publications' ? 'active' : ''} onClick={() => onNav('publications')}>Publicaciones</div>
                <div className={nav==='publication' ? 'active' : ''} onClick={() => onNav('publication')}>Publicaciones</div>
                <div onClick={() => onNav('projects')}>Proyectos</div>
                <div onClick={() => onNav('red')}>Red</div>
                <div></div>
            </nav>
            <main>
                <section className={nav==='perfil' ? 'active' : ''}>
                    <h1>{selectLan ? 'Researcher Profile' : 'Perfil del Investigador'}</h1>
                    <span className="material-symbols-rounded">person</span>
                </section>

                <section className={nav==='publications' ? 'active' : ''}>
                    <h3>{selectLan ? 'Articles' : 'Producción Científica'}</h3>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                </section>

                <section className={nav==='projects' ? 'active' : ''}>
                    <h3>{selectLan ? 'Projects' : 'Proyectos'}</h3>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                    <p>Desarollo de un robot ....</p>
                </section>

                <section className={nav==='red' ? 'active' : ''}>
                    <h3>{selectLan ? 'Red' : 'Red'}</h3>
                    <p>Red de contactos ....</p>
                    <p>Red de contactos ....</p>
                    <p>Red de contactos ....</p>
                    <p>Red de contactos ....</p>
                    <p>Red de contactos ....</p>
                    <p>Red de contactos ....</p>
                </section>
            </main>
        </div>
  );
}

export default ProjectID;