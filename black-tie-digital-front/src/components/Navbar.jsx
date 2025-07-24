import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import '../styles/Navbar.scss';

const Navbar = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        const nav = document.querySelector('nav')
        const navElems = document.querySelectorAll('.nav-part2 h4')

        gsap.fromTo(nav, {
            y: -100, opacity: 0
        }, {
            y: 0, opacity: 1, duration: 2, ease: 'power3.out'
        });

        gsap.fromTo(navElems, {
            y: 20, opacity: 0
        }, {
            y: 0, opacity: 1, duration: 2, ease: 'power3.out', stagger: 0.15
        });

    })

    return (
        <nav className={menuOpen ? 'menu-open' : ''}>
            <img src='/btd.jpeg' alt='logo' />
            <div className='nav-part2'>
                <h4 data-text='Home' onClick={() => navigate('/')}>Home</h4>
                <h4 data-text='About Us' onClick={() => navigate('/aboutus')}>About Us</h4>
                <h4 data-text='Services' onClick={() => navigate('/services')}>Services</h4>
                <h4 data-text='Black Tie Events' onClick={() => navigate('/black-tie-events')}>Black Tie Events</h4>
                <h4 data-text='Black Tie Invites' onClick={() => navigate('/black-tie-invites')}>Black Tie Invites</h4>
                <h4 data-text='Contact Us' onClick={() => navigate('/getintouch')}>Contact Us</h4>
                {!menuOpen && <i className='ri-menu-3-line' onClick={() => setMenuOpen(true)}></i>}
                {menuOpen && <i className='ri-close-line' onClick={() => setMenuOpen(false)}></i>}
            </div>
        </nav>
    );
};

export default Navbar;
