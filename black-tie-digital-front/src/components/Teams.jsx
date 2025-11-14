import '../styles/Teams.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Teams = () => {

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        const ctx = gsap.context(() => {
            window.scrollTo(0, 0);

            const cursor = document.querySelector('.cursor');
            const blur = document.querySelector('.cursor-blur');

            const onMouseMove = (e) => {
                gsap.to(cursor, { left: e.clientX - 30, top: e.clientY - 30, duration: 0.1 });
                gsap.to(blur, { left: e.clientX - 40, top: e.clientY - 40, duration: 0.1 });
            };
            document.addEventListener('mousemove', onMouseMove);

            const animateSplitText = (selector, stagger = 0.01, useScrollTrigger = false) => {
                const el = document.querySelector(selector);
                if (!el) return;

                const text = el.textContent;
                el.innerHTML = '';
                text.split('').forEach(char => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.display = 'inline-block';
                    el.appendChild(span);
                });

                gsap.fromTo(
                    `${selector} span`,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        stagger,
                        ...(useScrollTrigger && {
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 85%',
                                end: 'bottom 70%',
                                scrub: 1,
                            }
                        })
                    }
                );
            };

            animateSplitText('.teams h1', 0.01);
            animateSplitText('.team-cards h2', 0.02, '.team-cards h2');

            gsap.from('.para-wrapper .left-quote', { x: -70, y: -70, opacity: 0, duration: 2, ease: 'power3.out' });
            gsap.from('.para-wrapper .right-quote', { x: 70, y: 70, opacity: 0, duration: 2, ease: 'power3.out', delay: 0.3 });

            gsap.from('.para-wrapper>p', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.fromTo(".features",
                { scale: 0.3, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    delay: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".features",
                        start: "top 120%",
                    }
                }
            );

            gsap.fromTo(".founder",
                { scale: 0.3, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".founder",
                        start: "top 120%",
                    }
                }
            );

            gsap.utils.toArray(".team-card").forEach((card, i) => {
                const direction = i % 2 === 0 ? -100 : 100;
                gsap.fromTo(card,
                    { x: direction, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });

            return () => {
                document.removeEventListener('mousemove', onMouseMove);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        });

        return () => ctx.revert();
    }, []);

    const teamMembers = [
        {
            name: 'Rohit Mishra',
            section: '(Creative Director)',
            image: 'card1.jpg',
            task: '📈 Digital Marketing & Performance',
            description: 'SEO, ads, and everything in between. Data-driven, ROI-focused, and always optimizing.'
        }
    ];

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>

            <Navbar />

            <div className='teams'>
                <h1>Meet the Team</h1>
                <div className='para-wrapper'>
                    <div className='quotes'>
                        <i className='ri-double-quotes-l quote left-quote'></i>
                    </div>
                    <p>
                        At Black Tie Digital India, we're more than just a digital agency — we're a powerhouse of thinkers, creators, strategists, and doers. Our team is the heart of everything we do. Each member brings a unique set of skills, perspectives, and passion to the table, united by one mission: to build impactful digital experiences that drive real results.
                    </p>
                    <div className='quotes'>
                        <i className='ri-double-quotes-r quote right-quote'></i>
                    </div>
                </div>
                <div className="features">
                    <h2>🚀 What Makes Us Different?</h2>
                    <h4>We don't just work together — we grow together. At Black Tie Digital India, collaboration meets creativity, and strategy meets execution. Our team thrives on innovation, thrives under pressure, and never settles for average.</h4>
                    <h4>Whether it's branding, marketing, content, web, or performance — our team ensures every project reflects excellence, elegance, and measurable impact.</h4>
                </div>
                <div className="team-cards">
                    <h2>✨ The Faces Behind the Strategy:</h2>
                    <div className="founder">
                        <div className="founder-left">
                            <h1>Riya Mishra (Founder)</h1>
                            <h2>💡 Leadership & Strategy</h2>
                            <h4>Visionaries. Decision-makers. Culture-builders. Guiding our mission with experience and clarity.</h4>
                        </div>
                        <div className="founder-right">
                            <img src="Founder.jpg" alt="founder" />
                        </div>
                    </div>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-card" key={index}>
                                <div className="image-wrapper">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="card-inner">
                                    <h3>{member.name}</h3>
                                    <h4>{member.section}</h4>
                                    <h5>{member.task}</h5>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Teams;
