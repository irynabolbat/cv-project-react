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
                            Master of Tourism -2021, V. N. Karazin Kharkiv National University, Ukraine
                        </span>
                            </li>
                            <li>
                        <span>
                            Bachelor of Tourism -2020, V. N. Karazin Kharkiv National University, Ukraine
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