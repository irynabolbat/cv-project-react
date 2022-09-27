import React from 'react';
import style from './Title.module.css'

const Title = ({text,pickOutText, backText}) => {
    return (
        <div className={style.title_section}>
            <h1 className={style.title}>{text} <span>{pickOutText}</span></h1>
            <span className={style.title_background}>{backText}</span>
        </div>
    );
};

export default Title;