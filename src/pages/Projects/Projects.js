import React, { useEffect } from 'react';
import './Projects.css';
import portada from './../../images/proyectos.jpg';
import Project from '../../components/Project/Project';


function Projects(props) {
    const {selectLan, setTheme} = props;

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
                        <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
                        <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
                        <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
                        <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
                        <Project title={'P-Desarrollo de un robot desactivador de explosivos dotado de un brazo de 5 grados de libertad'} titleUrl={'/desarrollo-eod-5dgl-prueba'} organization={'Universidad Nacional de San Agustín'} organizationUrl={'/unsa'} researcher={'Juan Andres Montoya Angulo'} researcherUrl={'/andres-montoya-angulo'} coResearchers={[{name: 'Jorge Perez', url:'/jorge-perez'}, {name: 'Juan Perez', url:'/juan-perez'}, {name: 'Jorge Perez', url:'/jorge-perez'}]} startingYear={'25/10/2015'} endingYear={'10/01/2019'}></Project>
                    </div>
                </section>
            </main>
        </div>
  );
}

export default Projects;