import React from 'react';
import style from './Portfolio.module.css'
import onlineShop from './img/online-shop.png'
import waterControl from './img/water-control.png'
import Title from "../Base/Title/Title";

const Portfolio = () => {
    const myTasks = ['Login/Registration form', 'User settings', 'Add firebase', 'Hamburger menu', 'Feedback page', 'Analytics']
    return (
        <div className={style.portfolio_wrapper}>
            <Title text={'My'} pickOutText={'portfolio'} backText={'Works'}/>
            <div className={style.works_wrapper}>
                <div className={style.work_container}>
                    <a href='https://eleks-bootcamp-water-control.netlify.app/' target="_blank"
                       className={style.work_link}>
                        <img src={waterControl} className={style.image}/>
                    </a>
                    <div className={style.card}>
                        <h4 className={style.work_name}>Water control app(Team work)</h4>
                        <div className={style.my_responsibility}>My responsibility:</div>
                        <ul className={style.list_my_tasks}>
                            {
                                myTasks.map((task, index) => (
                                    <li className={style.my_work_in_project} key={index + 1}>{task}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={`${style.work_container} ${style.store}`}>
                    <div className={style.card}>
                        <h4 className={style.work_name}>Online store (First React project)</h4>
                    </div>
                    <a href='https://irinabolbat.github.io/online-store-react/' target="_blank"
                       className={style.work_link}>
                        <img src={onlineShop} className={style.image}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;