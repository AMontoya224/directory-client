import React from 'react';
import './Persons.css';


function Persons(props) {
    const {selectLan} = props;

    return (
        <div className='Persons'>
            <title>{selectLan ? 'DefCRIS | Persons' : 'DefCRIS | Personas'}</title>
            <main>
                <section>
                    <h1>{selectLan ? 'Staff Directory' : 'Directorio del Personal'}</h1>
                    <form>
                        <input placeholder='Buscar en el repositorio...'></input>
                        <button className='button-secundary'><span className="material-symbols-rounded">send</span></button>
                    </form>
                </section>
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
                </section>
            </main>
        </div>
  );
}

export default Persons;