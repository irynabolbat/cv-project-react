import React from 'react';
import style from "./PersonalInfo.module.css";
import DownloadCV from "../DownloadCV/DownloadCV";
import IrynaBolbat from '../../assets/Iryna Bolbat photo.JPEG'
import {differenceInYears, parse} from "date-fns";

const PersonalInfo = () => {
    const getMyAge = () => {
        const date = parse("02/10/1998", "dd/MM/yyyy", new Date());
        return differenceInYears(new Date(), date);
    }
    return (
        <div className={style.info_wrapper}>
            <h2 className={style.title_personal_info}>Personal info</h2>
            <img src={IrynaBolbat} className={style.photo}/>
            <div className={style.profile_info_wrapper}>
                <ul className={style.profile_info}>
                    <li>First name: <span className={style.profile_info_span}>Iryna</span></li>
                    <li>Last name: <span className={style.profile_info_span}>Bolbat</span></li>
                    <li>Age: <span className={style.profile_info_span}>{getMyAge()} y.o.</span></li>
                    <li>Nationality: <span className={style.profile_info_span}>Ukrainian</span></li>
                    <li>Location: <span className={style.profile_info_span}>Kharkiv, Ukraine</span></li>
                    <li>Phone: <span className={style.profile_info_span}>0 (95) 606 67 19</span></li>
                    <li>Email: <span className={style.profile_info_span}>irinabolbat98@gmail.com</span></li>
                    <li>Languages: <span className={style.profile_info_span}>Russian, Ukrainian, English</span></li>
                </ul>
            </div>
            <DownloadCV/>
        </div>
    );
};

export default PersonalInfo;