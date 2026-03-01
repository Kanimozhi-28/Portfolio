import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'AI / ML Engineer Intern',
            company: 'Xerago, Chennai',
            period: 'Dec 2025 – Feb 2026',
            focus: 'Decision Intelligence & Prompt Engineering',
            points: [
                'Developed the Decision Assembly Platform (DAP), a website-embedded engine for real-time intent detection.',
                'Utilized Prompt Engineering and RAG for contextual, explainable decision recommendations.',
                'Implemented vector search for high-speed semantic retrieval across proprietary datasets.'
            ]
        },
        {
            role: 'Python Developer Intern',
            company: 'Mariyons Infotech, Chennai',
            period: 'Sep 2024 – Nov 2024',
            focus: 'Backend Automation & Optimization',
            points: [
                'Automated complex manual workflows using custom Python scripting, improving efficiency by 30%.',
                'Reduced backend technical debt through systematic debugging and implementing clean-code standards.'
            ]
        },
        {
            role: 'Full Stack Developer Intern',
            company: 'Retech Solutions, Chennai',
            period: 'Jun 2023 – Aug 2023',
            focus: 'Enterprise Web Scalability',
            points: [
                'Engineered scalable backend services using Java and MySQL for cross-functional web applications.',
                'Collaborated on end-to-end feature rollouts, ensuring seamless deployment and documentation.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <span className="title-tag">Experience</span>
            <h2 className="section-title">Professional Path.</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-block glass-panel">
                        <div className="exp-side">
                            <span className="exp-period mono">{exp.period}</span>
                            <span className="exp-focus mono">{exp.focus}</span>
                        </div>
                        <div className="exp-main">
                            <h3 className="exp-role">{exp.role}</h3>
                            <h4 className="exp-company">{exp.company}</h4>
                            <ul className="exp-points">
                                {exp.points.map((point, pIndex) => (
                                    <li key={pIndex}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
