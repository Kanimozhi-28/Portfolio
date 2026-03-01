import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="title">Get In Touch</h2>
                <div className="contact-box">
                    <h3>Let's Build Something Together</h3>
                    <p>Open for Software Developer roles and Full Stack engineering opportunities.</p>
                    <div className="contact-links">
                        <a href="mailto:kanimozhi2877@gmail.com" className="contact-link">
                            <span>Email:</span> kanimozhi2877@gmail.com
                        </a>
                        <a href="tel:+918939488465" className="contact-link">
                            <span>Phone:</span> +91 8939488465
                        </a>
                        <a href="https://github.com/Kanimozhi-28" target="_blank" rel="noreferrer" className="contact-link">
                            <span>GitHub:</span> github.com/Kanimozhi-28
                        </a>
                    </div>
                    <a href="mailto:kanimozhi2877@gmail.com" className="btn btn-glow">Message Me</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
