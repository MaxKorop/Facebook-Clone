import React, { useRef, useState } from 'react';
import hideIcon from '../../../assets/hide.png';
import visibleIcon from '../../../assets/visible.png';
import './Input.css';

const InputField = ({ isPassword, setValue }) => {
    const [showToggle, setShowToggle] = useState(false);
    const [hide, setHide] = useState(true);
    const passwordRef = useRef();

    const onChange = e => {
        setValue(e.target.value)
    }

    const showPassword = () => {
        passwordRef.current.type = "text";
        passwordRef.current.focus();
        setHide(false);
    }

    const hidePassword = () => {
        passwordRef.current.type = "password";
        passwordRef.current.focus();
        setHide(true);
    }

    return (
        <div>
            {isPassword ?
                (<div style={{position: "relative"}}>
                    <input ref={passwordRef} type="password" placeholder='Пароль' onChange={onChange} className='input-field' onFocus={() => setShowToggle(true)} onBlur={() => setShowToggle(false)} />
                    {showToggle && hide && <img style={{position: "absolute", transform: "translate(-50px, 15px)", width: 30, height: 30, cursor: "pointer", zIndex: 9}} onMouseDown={() => showPassword()} src={hideIcon} alt="" />}
                    {showToggle && !hide && <img style={{position: "absolute", transform: "translate(-50px, 15px)", width: 30, height: 30, cursor: "pointer", zIndex: 9}} onMouseDown={() => hidePassword()} src={visibleIcon} alt="" />}
                </div>)
                :
                (<input type="text" placeholder='Електронна адреса або номер телефону' onChange={onChange} className='input-field' />)}
        </div>
    );
}

export default InputField;
