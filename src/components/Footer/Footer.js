import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.css';


function Footer(props) {
    const {selectLan} = props;

    return (
        <div className='Footer'>
            <div>
                <a href='mailto:montyang224@gmail.com?subject=Quiero contactar con ustedes InRoute!'>
                    <ion-icon name="mail" size="large"></ion-icon>
                </a>
                <a className="pagina" href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-facebook" size="large"></ion-icon>
                </a>
                <a className="pagina" href="https://www.linkedin.com/in/amontoya224/" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-linkedin" size="large"></ion-icon>
                </a>
                <a className="pagina" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-youtube" size="large"></ion-icon>
                </a>
            </div>
            <a className="pagina" href='https://drive.google.com/file/d/1cDq6dwEz-__-pBYQ0giWHg_A161lLNeA/view?usp=sharing' target="_blank" rel="noreferrer">
                {selectLan ? 'Privacy Policy' : 'Política de privacidad'}
            </a>
            <p>© MINDEF 2025</p>
        </div>
    );
}

export default withRouter( Footer );
