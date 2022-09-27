import React from 'react';
import style from './Education.module.css'
import Courses from "./Courses";

const Education = () => {
    return (
        <div className={style.education}>
            <div className={style.education_container}>
                <div className={style.education_wrapper}>
                    <div>
                        <h2 className={style.title}>University education</h2>
                        <ul>
                            <li>
                        <span>
                            Master of Tourism -2021, Kharkiv National University by Karazin, Ukraine
                        </span>
                            </li>
                            <li>
                        <span>
                            Bachelor of Tourism -2020, Kharkiv National University by Karazin, Ukraine
                        </span>
                            </li>
                        </ul>
                    </div>
                    <Courses/>
                </div>
            </div>
        </div>
    );
};

export default Education;