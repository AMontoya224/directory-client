import React from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';


function Home(props) {
    const {selectLan} = props;

    return (
        <div className='Home'>
            <title>Directorio | Home</title>
            <main>
                <section className='one'>
                    <p>Home 2da</p>
                </section>

                <section className='two'>
                    
                </section>

                <section className='three'>
                    <h2>{selectLan ? 'inRoute has' : 'inRoute tiene'}</h2>
                    <h3>{selectLan ? 'Here is a brief list of what we do' : 'Acá una breve lista de lo que hacemos'}</h3>
                    <p>El Lore o trasfondo de un juego, es el conjunto de historias, datos, personajes, etc. 
                        que conforman el universo representado en el mismo y le dan coherencia. El Lore o trasfondo de un juego, 
                        es el conjunto de historias, datos, personajes, etc. que conforman el universo representado en el mismo y 
                        le dan coherencia. El Lore o trasfondo de un juego, es el conjunto de historias, datos, personajes, etc. 
                        que conforman el universo representado en el mismo y le dan coherencia.
                    </p>
                </section>

                <section className='four'>
                    <h2>{selectLan ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}</h2>
                    <h3>{selectLan ? 'If you do not find an answer to your question, do not hesitate to contact us.' : 'Si no encuentras una respuesta a tu pregunta, no dudes en contactarnos'}</h3>
                </section>

                <section className='five'>
                    <h2>{selectLan ? 'With the support of' : 'Con el apoyo de'}</h2>
                    <h3>{selectLan ? 'inRoute has the support of different institutions such as:' : 'inRoute cuenta con el apoyo de distintas instituciones como:'}</h3>
                </section>
            </main>
        </div>
  );
}

export default withRouter(Home);