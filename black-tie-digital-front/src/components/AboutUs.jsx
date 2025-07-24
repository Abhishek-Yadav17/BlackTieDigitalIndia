import '../styles/AboutUs.scss'
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cursor = document.querySelector('.cursor');
            const blur = document.querySelector('.cursor-blur');
            const onMouseMove = (e) => {
                gsap.to(cursor, { left: e.clientX - 30, top: e.clientY - 30, duration: 0.1 });
                gsap.to(blur, { left: e.clientX - 40, top: e.clientY - 40, duration: 0.1 });
            };
            document.addEventListener('mousemove', onMouseMove);

            const animateText = (selector, stagger = 0.01, trigger = null) => {
                const el = document.querySelector(selector);
                if (!el) return;

                const chars = el.textContent.split('');
                el.innerHTML = '';
                chars.forEach(char => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.display = 'inline-block';
                    el.appendChild(span);
                });

                gsap.fromTo(`${selector} span`,
                    { y: 100, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1, stagger, ease: 'power3.out',
                        scrollTrigger: trigger ? { trigger: el, start: 'top 90%' } : undefined
                    }
                );
            };

            animateText('.about-us h1');
            animateText('.about-us p', 0.005);

            gsap.from('.left-quote', { x: -70, y: -70, opacity: 0, duration: 2, ease: 'power3.out' });
            gsap.from('.right-quote', { x: 70, y: 70, opacity: 0, duration: 2, ease: 'power3.out', delay: 0.3 });

            document.querySelectorAll('.about-details').forEach((section) => {
                const img = section.querySelector('img');
                const h4 = section.querySelector('h4');

                if (img) {
                    gsap.from(img, {
                        scale: 0,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: section, start: 'top 90%', scrub: 1 }
                    });
                }

                if (h4) {
                    const lines = h4.innerText.split('. ').filter(Boolean);
                    h4.innerHTML = '';
                    lines.forEach(line => {
                        const div = document.createElement('div');
                        div.textContent = line.trim() + (line.endsWith('.') ? '' : '.');
                        div.style.opacity = 0;
                        div.style.transform = 'translateY(30px)';
                        h4.appendChild(div);
                    });

                    gsap.to(h4.querySelectorAll('div'), {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.7,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: h4,
                            start: 'top 85%',
                            end: 'top 35%',
                            scrub: 1
                        }
                    });
                }
            });

            gsap.utils.toArray('.mv-box').forEach((box) => {
                gsap.from(box, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: box, start: 'top 90%', scrub: 1 }
                });
            });

            animateText('.features h2', 0.01, true);
            gsap.utils.toArray('.features-list li').forEach((li, i) => {
                gsap.from(li, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: li, start: 'top 90%', scrub: 1 }
                });
            });

            animateText('.growth-message .msg-highlight h2:first-child', 0.01, true);
            animateText('.growth-message .msg-highlight h2:nth-child(2) strong', 0.01, true);

            gsap.utils.toArray('.growth-message .msg-block, .growth-message .msg-signoff').forEach((block) => {
                gsap.from(block, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: block, start: 'top 90%' }
                });
            });

            return () => {
                document.removeEventListener('mousemove', onMouseMove);
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        });

        return () => ctx.revert();
    }, []);


    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>

            <Navbar />

            <div className="about-us">
                <h1>Your Partner in Performance-Driven Digital Growth</h1>
                <div className="para-wrapper">
                    <div className="quotes"><i className="ri-double-quotes-l quote left-quote"></i></div>
                    <p>At Black Tie Digital India, we help businesses do more than just go digital — we help them grow smart, grow fast, and grow with confidence.</p>
                    <div className="quotes"><i className="ri-double-quotes-r quote right-quote"></i></div>
                </div>
                <div className="about-details">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipMAcwGaLd6fel1CH3mnboX_J5mlSM4TD_bRhkMT=s1360-w1360-h1020-rw" alt="about" />
                    <h4>With over 7 years of experience, offices in Indore and Pune, and a proven track record of serving 500+  clients, we have earned our reputation as a trusted, result-focused digital marketing agency in India.</h4>
                </div>
                <div className="about-details">
                    <h4>We specialize in building strategies that actually move the needle — from SEO, social media marketing, and paid ads, to content creation, branding, and lead generation. Every campaign we create is tailored, data-driven, and designed to help you reach your audience and outperform your competitors.</h4>
                    <img src="/step3.jpg" alt="about" />
                </div>
                <div className="mission-vision">
                    <div className="mv-box mission">
                        <h2>Our Mission</h2>
                        <p>
                            To deliver ethical, creative, and measurable digital marketing solutions
                            that help businesses scale sustainably and strategically in a competitive online world.
                        </p>
                    </div>
                    <div className="mv-box vision">
                        <h2>Our Vision</h2>
                        <p>
                            To be India's most trusted name in digital marketing, known for driving
                            real results, building lasting relationships, and empowering brands to take
                            control of their growth online.
                        </p>
                    </div>
                </div>
                <div className="features fade-up">
                    <h2>Why Choose Black Tie Digital?</h2>
                    <ul className="features-list">
                        <li>7+ years of hands-on experience in the digital space.</li>
                        <li>Offices in Pune and Indore to support local and national clients.</li>
                        <li>Delivered 500+ successful digital campaigns across industries.</li>
                        <li>Full-service digital marketing company — all strategies under one roof.</li>
                        <li>Strong focus on ROI, transparency, and measurable growth.</li>
                        <li>A team of digital strategists, creatives, and analysts working together to help your business win.</li>
                    </ul>
                </div>
                <div className="growth-message-wrapper">
                    <div className="outside-box">
                        <p>
                            Whether you are a <strong>startup</strong>, <strong>SME</strong>, or <strong>established brand</strong>, we offer smart, affordable, and scalable digital marketing services in <strong>Pune</strong>, <strong>Indore</strong>, and across <strong>India</strong>.
                        </p>
                    </div>
                    <div className="growth-message fade-up">
                        <div className="msg-highlight">
                            <h2>We are Not Just a Digital Marketing Agency.</h2>
                            <h2><strong>We are Your Growth Partner.</strong></h2>
                        </div>

                        <div className="msg-block">
                            <p>At Black Tie Digital, we treat your goals like our own. That means <strong>clear communication</strong>, <strong>honest advice</strong>, and <strong>strategies</strong> that are aligned with your business — not just trends.</p>
                        </div>

                        <div className="msg-block">
                            <p>If you are looking for a digital marketing company in <strong>Indore</strong> or <strong>Pune</strong> that values <strong>performance</strong>, <strong>partnership</strong>, and <strong>purpose</strong>, we'd love to work with you.</p>
                        </div>

                        <div className="msg-signoff">
                            <p><strong>Let us grow — together.</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;
