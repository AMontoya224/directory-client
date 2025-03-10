import React, { useEffect } from 'react';
import './Persons.css';
import portada from './../../images/investigadores.webp';


function Persons(props) {
    const {selectLan, setTheme} = props;

    const onPerson = (url) => {
        props.history.push('/persons' + url);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setTheme(false);
    }, [setTheme]);
    
    return (
        <div className='Persons'>
            <title>{selectLan ? 'DefCRIS | Persons' : 'DefCRIS | Personas'}</title>
            <div><img src={portada} alt='portada'/></div>
            <main>
                <section>
                    <h1>{selectLan ? 'Staff Directory' : 'Directorio del Personal'}</h1>
                    <form>
                        <input placeholder='Buscar en el repositorio...'></input>
                        <button className='button-secundary'><span className="material-symbols-rounded">send</span></button>
                    </form>
                    <p>Busqueda avanzada</p>
                </section>
                <section>
                    <div>
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
                    </div>
                    <div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4 onClick={() => onPerson('/juan-andres-montoya-angulo')}>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">person</span>
                                <div>
                                    <h4>Ing. Juan Andres Montoya Angulo</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
  );
}

export default Persons;