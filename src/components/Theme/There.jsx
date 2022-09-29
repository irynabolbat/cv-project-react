import React from 'react';
import style from "./Theme.module.css";
import {BrightnessHigh, Moon} from "react-bootstrap-icons";
import useLocalStorage from "use-local-storage";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const Theme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }
    return (
        <div className={style.cv_wrapper} data-theme={theme}>
            <div className={style.theme_wrapper}>
                <label>
                    <div>
                    <span className={style.icon_box} onClick={switchTheme}>
                        {
                            theme === 'light'
                                ? <Moon className={style.icon}/>
                                : <BrightnessHigh className={style.icon}/>
                        }
                    </span>
                    </div>
                </label>
            </div>
            <Outlet/>
            <ToastContainer theme={theme === 'dark' ? 'light' : 'dark'}/>
        </div>
    );
};

export default Theme;