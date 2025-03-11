import React, {useState, useEffect} from 'react';
import './Persons.css';


function PersonID(props) {
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
        <div className='PersonID'>
            <title>{selectLan ? 'DefCRIS | Person' : 'DefCRIS | Persona'}</title>
            <header>
                <h1>Juan Andres Montoya Angulo</h1>
                <div>
                    <section>
                        <span className="material-symbols-rounded">person</span>
                        <div>
                            <span>ORCID</span> 
                            <span>SCOPUS</span> 
                            <span>CONCYTEC</span>
                            <span>SCHOLAR GOOGLE</span>
                        </div>
                    </section>
                    <section>
                        <h3>INVESTIGADOR</h3>
                        <p>Soy un ingeniero electrónico y de software con una sólida formación académica y experiencia profesional en el desarrollo de soluciones tecnológicas innovadoras. 
                            He publicado artículos científicos en revistas de alto impacto y tengo una patente en curso. 
                            Mi enfoque está en desarrollar soluciones que integren hardware y software en el campo de la Robótica y Visión por computador.
                        </p>
                        <h5>RENACYT:</h5>
                        <h5>Datos extra</h5>
                    </section>
                    <section>
                        <div>
                            <b>Índice-H:</b>
                            <p>5</p>
                        </div>
                        <div>
                            <b>Citas:</b>
                            <p>14</p>
                        </div>
                        <div>
                            <b>Documentos :</b>
                            <p>5</p>
                        </div>
                        <div>
                            <b>Proyectos :</b>
                            <p>3</p>
                        </div>
                    </section>
                </div>
            </header>
            <nav>
                <div></div>
                <div className={nav==='perfil' ? 'active' : ''} onClick={() => onNav('perfil')}>Perfil Completo</div>
                <div className={nav==='projects' ? 'active' : ''} onClick={() => onNav('projects')}>Proyectos</div>
                <div className={nav==='red' ? 'active' : ''} onClick={() => onNav('red')}>Red</div>
                <div className={nav==='publications' ? 'active' : ''} onClick={() => onNav('publications')}>Publicaciones</div>
                <div></div>
            </nav>
            <main>
                <section className={nav==='perfil' ? 'active' : ''}>
                    <h1>{selectLan ? 'Researcher Profile' : 'Perfil del Investigador'}</h1>
                    <span className="material-symbols-rounded">person</span>
                </section>
                <section className={nav==='projects' ? 'active' : ''}>
                    <h3>{selectLan ? 'Projects' : 'Proyectos'}</h3>
                    <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
                    <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
                    <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
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
                <section className={nav==='publications' ? 'active' : ''}>
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