import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="title">Academic Foundation</h2>
                <div className="edu-card">
                    <div className="edu-icon">🎓</div>
                    <div className="edu-content">
                        <h3>B.Tech in Artificial Intelligence and Data Science</h3>
                        <h4>KCG College of Technology, Chennai</h4>
                        <p className="period">2021 – 2025</p>
                        <div className="edu-details">
                            <p>Focused on Software Engineering, Data Structures, Algorithms, and AI Systems. Consistently applied theoretical knowledge to practical backend and full-stack projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
