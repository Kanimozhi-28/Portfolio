import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="title">About Me</h2>
                <div className="about-grid">
                    <div className="about-content">
                        <p className="lead">
                            I am a <strong>Software Developer</strong> with a deep focus on building
                            robust backend architectures and high-performance real-time systems.
                        </p>
                        <p>
                            My expertise lies in <strong>Java and Spring Boot</strong>, which I use to create
                            scalable and secure software solutions. I also have a strong command of
                            <strong> Python</strong> for automation and data orchestration. I believe in
                            writing code that is not just functional, but clean, maintainable, and efficient.
                        </p>
                        <p>
                            As a B.Tech student in AI & Data Science, I bridge the gap between
                            advanced data techniques and modern software engineering practices.
                        </p>
                        <div className="focus-areas">
                            <div className="area">
                                <h4>Backend Systems</h4>
                                <p>Building secure APIs and optimized logic using Spring Boot and JDBC.</p>
                            </div>
                            <div className="area">
                                <h4>Real-Time Apps</h4>
                                <p>Implementing live communication with WebSockets and JWT security.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="number">3+</span>
                            <span className="label">Internships</span>
                        </div>
                        <div className="stat-card">
                            <span className="number">10+</span>
                            <span className="label">Eng. Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
