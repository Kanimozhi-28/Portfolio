import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <span className="title-tag">Software Developer | AI / ML Engineer</span>
                <h1 className="hero-headline gradient-text">
                    Scaling Intelligence.<br />
                    Engineering Decision Loops.
                </h1>
                <p className="hero-subtext">
                    Detail-oriented Full Stack Developer specializing in **Explainable AI** and high-performance **backend systems**.
                    I transform complex data into autonomous, decision-centric applications.
                </p>
                <div className="cta-group">
                    <a href="#projects" className="btn btn-primary">Explore My Logic</a>
                    <a href="#contact" className="btn btn-secondary">Direct Access</a>
                </div>
            </div>
            <div className="hero-visual">
                {/* Visual element representing decision intelligence */}
                <div className="logic-node"></div>
            </div>
        </section>
    );
};

export default Hero;
