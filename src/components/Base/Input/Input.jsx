import React from 'react';
import style from "./Input.module.css";

const Input = ({
                   type,
                   name,
                   id,
                   inputRef,
                   placeholder,
                   label,
                   errorMessage,
                   onChange,
                   extraClass = null,
                   showError = false,
                   inputType = 'input',
               }) => {
    const InputType = inputType
    return (
        <div className="form-floating">
            <InputType type={type}
                       name={name}
                       className={`form-control ${style.contact_input} ${extraClass}`}
                       id={id}
                       required
                       ref={inputRef}
                       placeholder={placeholder}
                       onChange={onChange}/>
            {showError ? <div className={style.error}>{errorMessage}</div> : <></>}
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Input;