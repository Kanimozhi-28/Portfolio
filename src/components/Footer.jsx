import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container mono">
                <p>&copy; {new Date().getFullYear()} Kanimozhi A. Built for Performance.</p>
                <div className="footer-links">
                    <a href="https://github.com/Kanimozhi-28" target="_blank" rel="noopener noreferrer">/github</a>
                    <a href="#home">/top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
