import React from 'react';
import style from './Button.module.css'

const Button = ({text, icon, onClick = null, iconExtraClass = null, btnType = null, disabled}) => {
    return (
        <button className={style.button_wrapper} onClick={onClick} type={btnType}>
            <span className={style.button_info}>{text}</span>
            <span className={`${style.button_info} ${iconExtraClass}`}>
                {icon}
            </span>
        </button>
    );
};

export default Button;