import React, { useState } from 'react';
import './Skills.css'; // Make sure this path is correct

const Skills = () => {
    const [activeTab, setActiveTab] = useState('web');

    const webSkills = [
        { name: 'JavaScript', percentage: 90 },
        { name: 'React', percentage: 80 },
        { name: 'Node.js', percentage: 60 },
        { name: 'Nest.js', percentage: 95 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'mySql', percentage: 80 },

    ];

    const mobileSkills = [
        { name: 'Flutter', percentage: 85 },
        { name: 'Dart', percentage: 80 },
        { name: 'Firebase', percentage: 90 },
        { name: 'Android/iOS Basics', percentage: 60 },
    ];

    const skills = activeTab === 'web' ? webSkills : mobileSkills;

    return (
        <div className="outer-skills bg-dark d-flex flex-column align-center">
            <div className="inner-div">
                <div className="d-flex justify-content-center mb-5">
                    <h1 className="text-warning align-self-center  skills-title">Skills</h1>
                </div>
                <div className="tab-container">
                    <button
                        className={`tab-button ${activeTab === 'web' ? 'active' : ''}`}
                        onClick={() => setActiveTab('web')}
                    >
                        Web Development
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'mobile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('mobile')}
                    >
                        Mobile Development
                    </button>
                </div>
            </div>
            <div className="real Skills">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-bar">
                        <div
                            className="progress"
                            style={{ width: `${skill.percentage}%`}}
                        >
                            <span className="progress-label">{skill.percentage}%</span>
                        </div>
                        <div className="skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
