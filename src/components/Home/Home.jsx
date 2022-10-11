import React, {useState} from 'react';
import style from './Home.module.css'
import myPhoto from '../../assets/Iryna Bolbat photo.JPEG'
import {ArrowRightShort} from "react-bootstrap-icons";
import ModalWindow from "../ModalWindow/ModalWindow";
import Button from "../Base/Button/Button";

const Home = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className={style.main_container}>
            <div className={style.photo_wrapper}>
                <img src={myPhoto} alt={'Iryna Bolbat'} className={style.photo}/>
            </div>

            <div className={style.short_info}>
                <h1 className={style.name}>Hi! 👋 I`m Iryna Bolbat. <div className={style.position}>Junior/Trainee Front-end
                    Developer (React)</div></h1>
                <p className={style.about_short}>I'm a Ukrainian based trainee front‑end developer (React).
                    I`m passionate about building user-friendly projects.
                </p>
                <Button text={'More about me'} icon={<ArrowRightShort className={style.icon_arrow}/>}
                        onClick={() => setModalActive(true)} iconExtraClass={style.arrow}/>
                <ModalWindow active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
    );
};

export default Home;