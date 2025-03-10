import React, { useEffect } from 'react';
import './Projects.css';
import portada from './../../images/proyectos.jpg';


function Projects(props) {
    const {selectLan, setTheme} = props;

    const onProject = (url) => {
        props.history.push('/projects' + url);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setTheme(false);
    }, [setTheme]);

    return (
        <div className='Projects'>
            <title>{selectLan ? 'DefCRIS | Projects' : 'DefCRIS | Proyectos'}</title>
            <div><img src={portada} alt='portada'/></div>
            <main>
                <section>
                    <h1>{selectLan ? 'Projects Directory' : 'Directorio de Proyectos'}</h1>
                    <form>
                        <input placeholder='Buscar en el repositorio...'></input>
                        <button className='button-secundary'><span className="material-symbols-rounded">send</span></button>
                    </form>
                    <p>Busqueda avanzada</p>
                </section>
                <section>
                    <div>
                        <h3>{selectLan ? 'Filters for projects' : 'Filtros para proyectos'}</h3>
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
                                <span className="material-symbols-rounded">sdk</span>
                                <div>
                                    <h4 onClick={() => onProject('/robot-eod-5-dgl')}>Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">sdk</span>
                                <div>
                                    <h4>Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">sdk</span>
                                <div>
                                    <h4>Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">sdk</span>
                                <div>
                                    <h4>Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">sdk</span>
                                <div>
                                    <h4>Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad</h4>
                                    <a href='/#'>Universidad Nacional de San Agustín</a>
                                    <b> - INVESTIGADOR</b>
                                    <p>Dato importante</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <span className="material-symbols-rounded">sdk</span>
                                <div>
                                    <h4>Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad</h4>
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

export default Projects;