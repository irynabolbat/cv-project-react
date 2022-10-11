import React from 'react';
import style from './Education.module.css'

const Courses = () => {
    const myCourses = [
        {
            course: 'React, Redux: January 2022 - present',
            learned: 'Basic knowledge in React, work in team, work with gh-pages, firebase experience'
        },
        {
            course: 'Java Script: June 2021 - present',
            learned: 'Basic knowledge in Java Script, work with axios and fetch requests'
        },
        {
            course: 'HTML, CSS: May 2021 - June 2021',
            learned: 'Basic knowledge in HTML and CSS, work with Bootstrap, Responsive Web Design experience'
        },
    ]
    return (
        <div>
            <h2 className={style.title}>Courses</h2>
            <ul>
                {myCourses.map((course, index) => (
                    <li key={index + 1}>
                        <span>
                            {course.course}
                        </span>
                        <p className={style.course_learned}>{course.learned}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;