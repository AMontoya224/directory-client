import React from 'react';
import './Login.css';


function Login(props) {
    const {selectLan} = props;

    return (
        <div className='Login'>
            <title>{selectLan ? 'DefCRIS | Login' : 'DefCRIS | Ingreso'}</title>
            <main>
                {selectLan ? 'Login' : 'Ingreso'}
            </main>
        </div>
  );
}

export default Login;