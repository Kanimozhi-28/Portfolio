import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="badge">Available for opportunities</div>
                <h1 className="name">Kanimozhi A.</h1>
                <h3 className="role">Software Developer</h3>
                <p className="description">
                    Building <span>scalable backend systems</span> and <span>full-stack applications</span>.
                    Expertise in Java, Python, and modern software architectures with a focus on clean, efficient code.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-glow">Featured Work</a>
                    <a href="#contact" className="btn btn-ghost">Software Logic &rarr;</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="code-blob"></div>
            </div>
        </section>
    );
};

export default Hero;
