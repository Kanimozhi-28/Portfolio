import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">&copy; {new Date().getFullYear()} Kanimozhi A. Built with React & Software Engineering Logic.</p>
                <div className="footer-social">
                    <a href="https://github.com/Kanimozhi-28" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="#home">Back to Top &uarr;</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
