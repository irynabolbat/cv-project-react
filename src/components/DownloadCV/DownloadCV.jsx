import React from 'react';
import style from './DownloadCV.module.css'
import CV from "../../assets/Iryna Bolbat CV.pdf";
import {Download} from "react-bootstrap-icons";

const DownloadCv = () => {
    return (
        <div className={style.download_wrapper}>
            <button className={style.download_btn}>
                <a href={CV} download className={style.download_text}>
                    <span className={style.download_text}>Download CV</span>
                    <span className={style.download_icon}>
                        <Download className={style.icon}/>
                    </span>
                </a>
            </button>
        </div>
    );
};

export default DownloadCv;