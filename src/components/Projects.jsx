import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Decision Assembly Platform (DAP)',
            tagline: 'Autonomous Intent-Detection & Recommendation Engine',
            description: 'Engineered a website-embedded decision engine that detects user hesitation in real-time. Built as a zero-code JavaScript SDK, it utilizes RAG and Vector-based semantic search to provide explainable, context-aware recommendations.',
            impact: 'Enabled businesses to automate structured logic and provide adaptive user experiences.',
            tech: ['Python', 'JavaScript SDK', 'RAG', 'Vector DB', 'Prompt Engineering'],
            github: 'https://github.com/Kanimozhi-28/Decision-Assembly-Platform'
        },
        {
            title: 'Real-Time Chat Application',
            tagline: 'High-Concurrency Systems Architecture',
            description: 'Developed a secure, real-time communication platform utilizing Spring Boot and WebSockets. Implemented JWT-based authentication and optimized MySQL indexing to handle high-frequency data streams.',
            impact: 'Achieved 40% improvement in API response times through database query optimization and efficient state management.',
            tech: ['Java', 'Spring Boot', 'WebSockets', 'MySQL', 'JWT'],
            github: 'https://github.com/Kanimozhi-28/ChatBotApplication'
        },
        {
            title: 'TB & COVID-19 Detection (GANs)',
            tagline: 'Computer Vision for Medical Diagnostics',
            description: 'Designed a deep learning pipeline for high-accuracy medical image classification. Leveraged GANs for dataset augmentation and CNNs for feature extraction, optimized with CUDA acceleration.',
            impact: 'Increased model robustness against data scarcity through synthetic image generation and knowledge distillation.',
            tech: ['Python', 'TensorFlow', 'Keras', 'GANs', 'OpenCV'],
            github: 'https://github.com/Kanimozhi-28'
        },
        {
            title: 'Jewellery Shop Intelligence System',
            tagline: 'Business Intelligence & Admin Operations Hub',
            description: 'Developed a comprehensive Python-based system combining business intelligence with administrative automation. Features include advanced sales analytics and inventory tracking to drive data-informed decision making.',
            impact: 'Streamlined retail operations by centralizing data silos and providing actionable insights for growth.',
            tech: ['Python', 'SQL', 'Data Analytics', 'Business Intelligence'],
            github: 'https://github.com/Kanimozhi-28/Jewellery-Intelligence-'
        },
        {
            title: 'School CCTV Video Analytics',
            tagline: 'AI-Driven Surveillance & Threat Detection',
            description: 'Engineered an intelligent surveillance system that performs real-time video analytics to monitor educational environments. Implemented computer vision models for threat detection and anomaly reporting.',
            impact: 'Developed a proactive monitoring framework that reduces manual surveillance overhead while increasing safety response times.',
            tech: ['Python', 'OpenCV', 'Deep Learning', 'Real-time Analytics'],
            github: 'https://github.com/Kanimozhi-28/School-CCTV-Video-Analytics-System'
        },
        {
            title: 'InSightFlow',
            tagline: 'Workflow Optimization & Visualization Pipeline',
            description: 'Built a robust data pipeline and visualization platform that monitors system performance. Designed interactive dashboards that transform raw logs into meaningful visual narratives for stakeholders.',
            impact: 'Improved system observability and enabled rapid identification of workflow bottlenecks.',
            tech: ['Python', 'Flask', 'React', 'Data Visualization'],
            github: 'https://github.com/Kanimozhi-28/InSightFlow'
        }
    ];

    return (
        <section id="projects" className="projects">
            <span className="title-tag">Projects</span>
            <h2 className="section-title">Field-Tested Intelligence.</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-case glass-panel">
                        <div className="project-content">
                            <span className="project-type mono">{project.tagline}</span>
                            <h3>{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-impact">
                                <span className="impact-label mono">Impact</span>
                                <p>{project.impact}</p>
                            </div>
                            <div className="project-tech">
                                {project.tech.map((t, tIndex) => (
                                    <span key={tIndex} className="tech-chip">{t}</span>
                                ))}
                            </div>
                            <div className="project-footer">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="case-link">
                                    Analyze Source Code →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
