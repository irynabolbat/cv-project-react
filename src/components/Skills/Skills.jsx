import React from 'react';
import style from './Skills.module.css'

const Skills = () => {
    const mySkills = ['HTML', 'CSS', 'Git', 'Java Script', 'React', 'React Hooks', 'React Redux']
    return (
        <div>
            <h2 className={style.title_skills}>Skills</h2>
            <div className={style.skills_wrapper}>
                <ul className={style.skills_container}>
                    {mySkills.map((skill, index) => (
                        <li key={index + 1} className={style.skill_box}>
                        <span>
                            {skill}
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;