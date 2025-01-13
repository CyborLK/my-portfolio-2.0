import React from 'react';
import { skillData } from './SkillData';

const Skills = () => {
    return (
        <div className="section-box mt-4" id="skills">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={skillData.mainData.title}>
                        {skillData.mainData.title}
                    </h6>
                    <h1>{skillData.mainData.title}</h1>
                    <p>{skillData.mainData.description}</p>
                </div>
            </div>
            <div className="row g-4 g-lg-5 mt-0">
                {Object.entries(skillData.technical).map(([category, skills], catIndex) => (
                    <div className="col-12 col-xl-4" key={catIndex}>
                        <div className="skill-wrapper">
                            <h4>{category.charAt(0).toUpperCase() + category.slice(1)} Skills</h4>
                            {skills.map((item, index) => (
                                <div key={index} className="skill-box d-flex align-items-center mb-3">
                                    <item.icon className="icon display-5 me-3" />
                                    <span className="skill-name">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
