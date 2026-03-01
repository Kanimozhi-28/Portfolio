import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'AI / ML Engineer Intern',
            company: 'Xerago, Chennai',
            period: 'Nov 2024 – Present',
            points: [
                'Fine-tuning ML/DL models for business intelligence.',
                'Developed Jewellery Shop Intelligence & Admin Management System.',
                'Implemented LLM-based reasoning for automated insights.'
            ]
        },
        {
            role: 'Python Developer Intern',
            company: 'Mariyons Infotech, Chennai',
            period: 'Sep 2024 – Nov 2024',
            points: [
                'Automated backend workflows, increasing system efficiency by 30%.',
                'Built data processing scripts and ensured code reliability through rigorous testing.'
            ]
        },
        {
            role: 'Full Stack Developer Intern',
            company: 'Retech Solutions, Chennai',
            period: 'Jun 2023 – Aug 2023',
            points: [
                'Built full-stack web features using Java and SQL.',
                'Collaborated in an Agile environment to deliver scalable software modules.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="title">Professional Path</h2>
                <div className="experience-list">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="exp-card">
                            <div className="exp-info">
                                <span className="period">{exp.period}</span>
                                <h3>{exp.role}</h3>
                                <h4 className="company">{exp.company}</h4>
                            </div>
                            <ul className="exp-points">
                                {exp.points.map((p, pIdx) => <li key={pIdx}>{p}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
