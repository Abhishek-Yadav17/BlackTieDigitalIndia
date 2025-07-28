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
            '.footer h1',
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
            <div className="footer-top">
                <div className="footer-right">
                    <h1>Black Tie Digital India</h1>
                    <div className="footer-mid">
                        <h3>📍Head Offices</h3>
                        <div className="footer-mid-inner">
                            <div className="mid-inner-left">
                                <strong>Pune Office : </strong>
                                Black Tie Digital India
                                5th Floor, 509 Global Business Hub,
                                Kharadi, Pune, Maharashtra
                            </div>
                            <div className="mid-inner-right">
                                <strong>Indore Office : </strong>
                                3rd Floor, AIC, Vijay Nagar,
                                Indore, Madhya Pradesh
                            </div>
                        </div>
                    </div>
                    <div className="footer-right-bottom">
                        <h4>📞 Phone: +91-88900 99108</h4>
                        <h4>✉ Email: info@blacktiedigital.in</h4>
                    </div>
                </div>
                <div className="footer-left">
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
                        <h2>Legal</h2>
                        <h4>Terms & Conditions</h4>
                        <h4>Privacy & Policy</h4>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h4>&copy; Black Tie Digital India. All rights reserved. Your partner in digital innovation — from strategy to success.</h4>
            </div>
        </footer>
    );
};

export default Footer;
