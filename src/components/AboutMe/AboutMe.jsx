import React from 'react';
import style from "./AboutMe.module.css"
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Title from "../Base/Title/Title";


const AboutMe = () => {
    return (
        <div className={style.wrapper}>
            <Title text={'About'} pickOutText={'me'} backText={'Resume'}/>
            <PersonalInfo/>
            <Skills/>
            <Education/>
        </div>
    );
};

export default AboutMe;