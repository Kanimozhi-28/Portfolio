import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Systems & Backend',
            icon: '⚡',
            skills: ['Java', 'Python', 'JavaScript', 'Spring Boot', 'REST APIs', 'JDBC', 'MySQL']
        },
        {
            title: 'AI / ML & Decisions',
            icon: '🧠',
            skills: ['Prompt Engineering', 'RAG', 'Vector Databases', 'CNN', 'GANs', 'TensorFlow', 'Keras']
        },
        {
            title: 'Design & Tooling',
            icon: '🛠️',
            skills: ['React', 'HTML', 'CSS', 'Git', 'AWS', 'Google Colab', 'IntelliJ']
        }
    ];

    return (
        <section id="skills" className="skills">
            <span className="title-tag">Skills</span>
            <h2 className="section-title">Technical Expertise.</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card glass-panel">
                        <div className="category-header">
                            <span className="category-icon">{category.icon}</span>
                            <h3 className="mono">{category.title}</h3>
                        </div>
                        <div className="skill-list">
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
