import React from 'react';
import style from './Education.module.css'

const Courses = () => {
    const myCourses = ['React, Redux: January 2022 - present', 'Java Script: June 2021 - present',
        'HTML, CSS: May 2021 - June 2021']
    return (
        <div>
            <h2 className={style.title}>Courses</h2>
            <ul>
                {myCourses.map((course, index) => (
                    <li key={index + 1}>
                    <span>
                        {course}
                    </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;