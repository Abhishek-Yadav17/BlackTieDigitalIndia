import React, { useEffect } from 'react';
import '../styles/Footer.scss';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const navigate = useNavigate();

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        gsap.fromTo(
            '.footer h1 span',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.footer h1',
                    start: 'top 90%',
                },
            }
        );
    }, []);

    return (
        <footer className="footer">
            <h1>
                <span>Black Tie</span>
                <span>Digital India</span>
            </h1>
            <div className="footer-content">
                <div className="elem">
                    <h2>Pages</h2>
                    <h4 onClick={() => navigate('/')}>Home</h4>
                    <h4 onClick={() => navigate('/aboutus')}>About Us</h4>
                    <h4 onClick={() => navigate('/services')}>Services</h4>
                    <h4 onClick={() => navigate('/black-tie-invites')}>Black Tie Invites</h4>
                    <h4 onClick={() => navigate('/black-tie-events')}>Black Tie Events</h4>
                    <h4 onClick={() => navigate('/getintouch')}>Contact Us</h4>
                </div>
                <div className="elem">
                    <h2>Socials</h2>
                    <h4>Instagram</h4>
                    <h4>Facebook</h4>
                    <h4>LinkedIn</h4>
                    <h4>Youtube</h4>
                    <h4>Twitter</h4>
                </div>
                <div className="elem">
                    <h2>Policy</h2>
                    <h4>Security</h4>
                    <h4>Policy</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
