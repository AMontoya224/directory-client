import React from 'react';
import './Home.css';
import portada from './../../images/portada.jpeg';
import flag from './../../images/flag_peru.png';


function Home(props) {
    const {selectLan} = props;

    return (
        <div className='Home'>
            <title>{selectLan ? 'DefCRIS | Home' : 'DefCRIS | Inicio'}</title>
            <main>
                <section className='one'>
                    <img src={portada} alt='portada'/>
                    <div>
                        <img className='header-flag' src={flag} alt='flag'/>
                        <h1>DefCRIS.gob.pe</h1>
                    </div>
                </section>

                <section className='two'>
                    
                </section>

                <section className='three'>

                </section>

                <section className='four'></section>
            </main>
        </div>
  );
}

export default Home;