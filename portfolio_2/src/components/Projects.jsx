import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Real-Time Chat Application',
            description: 'Secure messaging platform featuring JWT authentication and live communication.',
            tech: ['Java', 'Spring Boot', 'WebSockets', 'MySQL', 'JWT'],
            links: { github: '#' }
        },
        {
            title: 'Airline Reservation System',
            description: 'Desktop ticket management system with integrated payments and ticket validation.',
            tech: ['Java Swing', 'JDBC', 'MySQL', 'Desktop GUI'],
            links: { github: '#' }
        },
        {
            title: 'Medical Detection GANs',
            description: 'DL models for TB & Covid detection using synthetic data generation.',
            tech: ['Python', 'GANs', 'CNN', 'TensorFlow'],
            links: { github: '#' }
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="title">Engineering Projects</h2>
                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="project-card">
                            <div className="project-body">
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                <div className="project-stack">
                                    {proj.tech.map((t, tIdx) => <span key={tIdx} className="tech-tag">{t}</span>)}
                                </div>
                            </div>
                            <div className="project-footer">
                                <a href={proj.links.github} className="link-arrow">View Source &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
