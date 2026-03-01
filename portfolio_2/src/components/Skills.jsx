import React from 'react';
import './Skills.css';

const Skills = () => {
    const categories = [
        {
            title: 'Programming Languages',
            skills: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML/CSS']
        },
        {
            title: 'Backend & Systems',
            skills: ['Spring Boot', 'REST APIs', 'JDBC', 'WebSockets', 'JWT Auth']
        },
        {
            title: 'Database & Data',
            skills: ['MySQL', 'NumPy', 'Pandas', 'OpenCV', 'Seaborn']
        },
        {
            title: 'Tools & Platforms',
            skills: ['Git', 'Docker (Basic)', 'AWS', 'Postman', 'NetBeans']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="title">Technical Stack</h2>
                <div className="skills-grid">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="skill-category">
                            <h3>{cat.title}</h3>
                            <div className="skill-tags">
                                {cat.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
