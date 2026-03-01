import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <span className="title-tag">Contact</span>
            <h2 className="section-title">Open for Logic.</h2>
            <div className="contact-grid">
                <div className="contact-narrative glass-panel">
                    <h3>Let's Collaborate</h3>
                    <p>
                        I'm currently seeking opportunities to join product-driven teams where I can apply
                        my expertise in **Decision Intelligence**, **Full Stack Development**, and **Explainable AI**.
                    </p>
                    <div className="contact-methods">
                        <div className="method">
                            <span className="mono">Email</span>
                            <a href="mailto:kanimozhi2877@gmail.com" className="link">kanimozhi2877@gmail.com</a>
                        </div>
                        <div className="method">
                            <span className="mono">GitHub</span>
                            <a href="https://github.com/Kanimozhi-28" target="_blank" rel="noopener noreferrer" className="link">github.com/Kanimozhi-28</a>
                        </div>
                        <div className="method">
                            <span className="mono">Phone</span>
                            <a href="tel:8939488465" className="link">+91 8939488465</a>
                        </div>
                        <div className="method">
                            <span className="mono">Location</span>
                            <span className="value">Chennai, India</span>
                        </div>
                    </div>
                </div>
                <div className="contact-cta glass-panel">
                    <p className="mono">Looking for a results-driven developer?</p>
                    <a href="mailto:kanimozhi2877@gmail.com" className="btn btn-primary">Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
