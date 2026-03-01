import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <span className="title-tag">About</span>
            <h2 className="section-title">Solving Problems.<br />Not Just Building Features.</h2>
            <div className="about-grid">
                <div className="about-narrative glass-panel">
                    <p>
                        I am a **Full Stack Developer** driven by the intersection of system architecture and autonomous logic.
                        My focus isn’t just on writing code, but on engineering **decision intelligence** loops—creating systems
                        that observe, infer, and act with precision.
                    </p>
                    <p>
                        With a foundation in **Java** and **Python**, I’ve moved from building standard web applications
                        to designing **AI-powered platforms** that solve high-stakes challenges in medical diagnostics,
                        business intelligence, and real-time communication.
                    </p>
                    <p>
                        My objective is to apply my **backend development**, automation, and data processing skills in
                        a high-impact role, contributing to the development of efficient and scalable software
                        solutions that bridge the gap between user needs and technical execution.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-card">
                        <span className="stat-value">3+</span>
                        <span className="stat-label">Enterprise Internships</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">40%</span>
                        <span className="stat-label">System Perf. Gains</span>
                    </div>
                    <div className="certifications-module glass-panel">
                        <h4 className="mono">Certifications</h4>
                        <ul className="cert-list">
                            <li>Python with Math Skills – Coursera</li>
                            <li>Matlab Onramp – MathWorks</li>
                            <li>MLOps / ML Practitioner – Dataiku</li>
                            <li>AWS Data Engineering – GUVI</li>
                            <li>Full Stack Development (Java) – QSpiders</li>
                            <li>Backend Development (Advanced)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
