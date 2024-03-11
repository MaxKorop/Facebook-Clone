import React from 'react';
import './Button.css';

const LogInButton = ({ onSubmit }) => {
    return (
        <div>
            <button className='login button' onClick={e => onSubmit()}>Увійти</button>
        </div>
    );
}

export default LogInButton;
