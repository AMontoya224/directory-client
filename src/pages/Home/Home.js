import React, { useEffect } from 'react';
import './Home.css';
import portada from './../../images/portada.jpg';
import flag from './../../images/flag_peru.png';


function Home(props) {
    const {selectLan, setTheme} = props;

    useEffect(() => {
        window.scrollTo(0, 0);
        setTheme(false);
    }, [setTheme]);

    return (
        <div className='Home'>
            <title>{selectLan ? 'DefCRIS | Home' : 'DefCRIS | Inicio'}</title>
            <main>
                <section>
                    <div>
                        <img className='header-flag' src={flag} alt='flag'/>
                        <h1>DefCRIS.gob.pe</h1>
                    </div>
                    <form>
                        <input placeholder='Buscar en el repositorio...'></input>
                        <button className='button-secundary'><span className="material-symbols-rounded">send</span></button>
                    </form>
                </section>

                <section>
                    
                </section>

                <section>

                </section>

                <section>

                </section>
                <img src={portada} alt='portada'/>
            </main>
        </div>
  );
}

export default Home;