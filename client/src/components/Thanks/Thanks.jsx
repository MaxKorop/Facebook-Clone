import React from 'react';
import thanks from '../../assets/thanks.png';
import './Thanks.css';

const Thanks = () => {
    return (
        <div className='thanks-wrapper'>
            <img src={thanks} alt="" />
            <span className='thank'>Дякуємо, що завітали!</span>
            <span className='hope'>Сподіваємося невдовзі побачити вас знову.</span>
        </div>
    );
}

export default Thanks;
