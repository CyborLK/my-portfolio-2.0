import React from 'react';
import { skillData } from './SkillData';

const Skills = () => {
    return (
        <div className="section-box mt-4" id="skills">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={skillData.mainData.title}>{skillData.mainData.title}</h6>
                    <h1>{skillData.mainData.title2}</h1>
                    <p>{skillData.mainData.description}</p>
                </div>
            </div>
            <div className="row g-4 g-lg-5 mt-0">
                <div className="col-12 col-xl-6">
                    <div className="skill-wrapper">
                        <div className="icon-2xl text-black mb-3">
                            <i className="bi bi-code-slash line-height-100"></i>
                        </div>
                        <h4>Technical Skills</h4>
                        {skillData.technical.map((item, index) => (
                            <div key={index} className="skill-box">
                                <i className={`bi ${item.icon}`}></i>
                                <span className="skill-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-xl-6">
                    <div className="skill-wrapper">
                        <div className="icon-2xl text-black mb-3">
                            <i className="bi bi-people line-height-100"></i>
                        </div>
                        <h4>Soft Skills</h4>
                        {skillData.soft.map((item, index) => (
                            <div key={index} className="skill-box">
                                <i className={`bi ${item.icon}`}></i>
                                <span className="skill-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
