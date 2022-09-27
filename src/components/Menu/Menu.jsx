import React from 'react';
import style from "./Menu.module.css";
import {BriefcaseFill, EnvelopeOpenFill, HouseFill, PersonFill} from "react-bootstrap-icons";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <>
            <div className={style.menu_wrapper}>
                <ul className={style.menu}>
                    <li className={location.pathname === '/' ? `${style.icon_box} ${style.active}` : style.icon_box}
                        onClick={() => navigate('/')}
                    >
                        <h2>Home</h2>
                        <i>
                            <HouseFill className={style.icon}/>
                        </i>
                    </li>
                    <li className={location.pathname === '/about' ? `${style.icon_box} ${style.active}` : style.icon_box}
                        onClick={() => navigate('/about')}
                    >
                        <h2>About</h2>
                        <i>
                            <PersonFill className={style.icon}/>
                        </i>
                    </li>
                    <li className={location.pathname === '/portfolio' ? `${style.icon_box} ${style.active}` : style.icon_box}
                        onClick={() => navigate('/portfolio')}
                    >
                        <h2>Portfolio</h2>
                        <i>
                            <BriefcaseFill className={style.icon}/>
                        </i>
                    </li>
                    <li className={location.pathname === '/contact' ? `${style.icon_box} ${style.active}` : style.icon_box}
                        onClick={() => navigate('/contact')}
                    >
                        <h2>Contact</h2>
                        <i>
                            <EnvelopeOpenFill className={style.icon}/>
                        </i>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
};

export default Menu;