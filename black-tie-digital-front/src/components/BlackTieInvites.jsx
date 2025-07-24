import '../styles/BlackTieInvites.scss'
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const BlackTieInvites = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
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

            animateSplitText('.black-tie-invites h1', 0.01);

            gsap.from('.para-wrapper>h4', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.7
            });

            gsap.from('.para-wrapper .left-quote', { x: -70, y: -70, opacity: 0, duration: 2, ease: 'power3.out' });
            gsap.from('.para-wrapper .right-quote', { x: 70, y: 70, opacity: 0, duration: 2, ease: 'power3.out', delay: 0.3 });

            ['h2', 'h4', 'h5'].forEach(tag => {
                document.querySelectorAll(`.black-tie-invites ${tag}`).forEach(el => {
                    if (tag === 'h4' && el.closest('.para-wrapper')) return;

                    const uniqueClass = `gsap-temp-${tag}-${Math.random().toString(36).substring(2, 9)}`;
                    el.classList.add(uniqueClass);

                    animateSplitText(`.${uniqueClass}`, tag === 'h4' ? 0.005 : 0.01, true);
                });
            });

            gsap.utils.toArray('.invite-box').forEach(box => {
                gsap.from(box, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 90%',
                        end: 'bottom 80%',
                        scrub: 1,
                    },
                });
            });

            gsap.utils.toArray('.gift-block').forEach((block, i) => {
                gsap.from(block, {
                    x: i % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: block,
                        start: 'top 90%',
                        end: 'bottom 80%',
                        scrub: 1,
                    },
                });
            });

            gsap.utils.toArray('.features-list li').forEach(li => {
                gsap.from(li, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: li,
                        start: 'top 95%',
                        end: 'bottom 85%',
                        scrub: 1,
                    },
                });
            });

            gsap.utils.toArray('.features-footer h3, .features-footer ul li, .features-footer p').forEach(el => {
                gsap.from(el, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        end: 'top 80%',
                        scrub: 1,
                    },
                });
            });

            return () => {
                document.removeEventListener('mousemove', onMouseMove);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        });

        return () => ctx.revert();
    }, []);


    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>

            <Navbar />

            <div className='black-tie-invites'>
                <h1>
                    Black Tie Invites - Unique Invitations & Custom Gifting That Make Moments Unforgettable
                </h1>
                <div className='para-wrapper'>
                    <div className='quotes'>
                        <i className='ri-double-quotes-l quote left-quote'></i>
                    </div>
                    <h4>
                        Whether it is a wedding, birthday, corporate event, or any special occasion - first impressions matter. At Black Tie Invites, we bring your moments to life through personalized, creative invitations and thoughtful gifting solutions, both digital and physical.
                        <br /><br />
                        From elegant digital invites to premium hardcopy cards and custom event gifting, we handle every detail - so your celebrations feel as special as they truly are.
                    </h4>

                    <div className='quotes'>
                        <i className='ri-double-quotes-r quote right-quote'></i>
                    </div>
                </div>
                <div className='invite-types'>
                    <h2>
                        All Types of Custom Invitations
                    </h2>
                    <h4>
                        We specialize in designing and delivering unique invites that match your style, theme, and personality. Choose from a wide variety of formats and styles, including:
                    </h4>
                    <div className='invite-grid'>
                        {[
                            {
                                title: 'Caricature Invitations',
                                desc: 'Fun, personalized invites with hand-drawn or digitally illustrated caricatures.',
                                img: '/caricature.jpg',
                            },
                            {
                                title: 'Wedding Invitations (Digital & Print)',
                                desc: 'Elegant, traditional, modern, or quirky — we design invitations that set the tone for your big day.',
                                img: 'wedding.jpg',
                            },
                            {
                                title: 'Birthday Invitations',
                                desc: 'From kids parties to milestone birthdays — we create fun and memorable birthday invite designs.',
                                img: '/birthday.jpg',
                            },
                            {
                                title: 'Sketch & Illustrated Invites',
                                desc: 'Artistic, hand-drawn sketches that add a creative, personal touch to your invitation.',
                                img: '/sketch.jpg',
                            },
                            {
                                title: 'Animated Invitations / Video Invites',
                                desc: 'Motion graphics or story-based videos to announce your event in a stylish, interactive way.',
                                img: '/animated.jpg',
                            },
                            {
                                title: 'Save the Dates, E-invites, RSVP Forms',
                                desc: 'Fully customizable and beautifully designed digital invitations ready to share online or via WhatsApp.',
                                img: '/rsvp.jpg',
                            },
                            {
                                title: 'Hardcopy Invites',
                                desc: 'Premium printed invitations, custom packaging, and luxe finishes available for every occasion.',
                                img: '/hardcopy.jpg',
                            },
                        ].map(({ title, desc, img }, i) => (
                            <div key={i} className='invite-box' style={{ backgroundImage: `url(${img})` }}>
                                <div className='overlay'>
                                    <h3>{title}</h3>
                                </div>
                                <div className='desc'>{desc}</div>
                            </div>
                        ))}
                    </div>
                    <h5>We bring your vision to life with creativity, emotion, and detail - whether you are planning a grand celebration or an intimate gathering.
                    </h5>
                </div>
                <div className='gift-types'>
                    <h2>Gifting for Every Occasion</h2>
                    <h4>
                        Looking for the perfect gift that leaves a lasting impression? We have got you covered with custom gifting solutions for every moment worth celebrating.
                    </h4>
                    <div className='gift-block'>
                        <div className='gift-text'>
                            <h3>Corporate Gifting</h3>
                            <ul>
                                <li>Branded merchandise</li>
                                <li>Welcome kits for employees or clients</li>
                                <li>Festival gift boxes</li>
                                <li>Personalized stationery & hampers</li>
                            </ul>
                        </div>
                        <div className='gift-image'>
                            <img src='/caricature.jpg' alt='Corporate Gifting' />
                        </div>
                    </div>

                    <div className='gift-block'>
                        <div className='gift-image'>
                            <img src='/wedding.jpg' alt='Wedding & Event Gifting' />
                        </div>
                        <div className='gift-text'>
                            <h3>Wedding & Event Gifting</h3>
                            <ul>
                                <li>Custom hampers for guests</li>
                                <li>Bride & groom gift sets</li>
                                <li>Themed giveaways</li>
                                <li>Thank you favors</li>
                            </ul>
                        </div>
                    </div>

                    <div className='gift-block'>
                        <div className='gift-text'>
                            <h3>Birthday & Personal Gifting</h3>
                            <ul>
                                <li>Custom name boxes</li>
                                <li>Mini hampers</li>
                                <li>Personalized goodies</li>
                                <li>Occasion-based packaging</li>
                            </ul>
                        </div>
                        <div className='gift-image'>
                            <img src='/birthday.jpg' alt='Birthday & Personal Gifting' />
                        </div>
                    </div>

                    <h5>Whether you need bulk gifts for a corporate event, personalized wedding giveaways, or a one-of-a-kind birthday surprise, we craft gifts that people actually remember.
                    </h5>
                </div>
                <div className='features fade-up'>
                    <h2>Why Choose Black Tie Invites?</h2>
                    <ul className='features-list'>
                        <li>Complete design-to-delivery service</li>
                        <li>Fully customized for your occasion and audience</li>
                        <li>In-house team of illustrators, animators, and designers</li>
                        <li>Premium print and packaging options</li>
                        <li>Nationwide delivery</li>
                        <li>Perfect for weddings, birthdays, corporate events, anniversaries, and more</li>
                    </ul>
                </div>
                <div className='features-footer'>
                    <h3>
                        At Black Tie Invites, we turn events into experiences. Whether it is a digital invite that gets people talking or a gift that makes someone smile - we are here to help you make it unforgettable.
                    </h3>
                    <ul>
                        <li>📍 Based in Indore & Pune - Serving All over India</li>
                    </ul>
                    <p>
                        Get in touch to start designing your custom invitation or gifting plan today.
                        Because celebrations deserve more than ordinary.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BlackTieInvites;
