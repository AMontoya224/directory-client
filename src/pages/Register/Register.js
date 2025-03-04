import React from 'react';
import './Register.css';


function Register(props) {
    const {selectLan} = props;

    return (
        <div className='Register'>
            <title>{selectLan ? 'DefCRIS | Register' : 'DefCRIS | Registro'}</title>
            <main>
                {selectLan ? 'Register' : 'Registro'}
            </main>
        </div>
  );
}

export default Register;