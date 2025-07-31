import '../styles/PrivacyPolicy.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
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

            animateSplitText('.privacy h1', 0.01);

            gsap.from('.para-wrapper .left-quote', { x: -70, y: -70, opacity: 0, duration: 2, ease: 'power3.out' });
            gsap.from('.para-wrapper .right-quote', { x: 70, y: 70, opacity: 0, duration: 2, ease: 'power3.out', delay: 0.3 });

            gsap.from('.para-wrapper>p', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.utils.toArray(".policy-content section").forEach((section, i) => {
                gsap.fromTo(section,
                    { x: -100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 100%",
                        },
                        delay: i * 0.1
                    }
                );
            });

            gsap.fromTo(".policy-sidebar",
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".policy-container",
                        start: "top 80%",
                    }
                }
            );

            gsap.fromTo(".no-refund",
                { scale: 0.3, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".no-refund",
                        start: "top 120%",
                    }
                }
            );

            return () => {
                document.removeEventListener('mousemove', onMouseMove);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        });

        return () => ctx.revert();
    }, []);

    const sections = [
        { id: "info", title: "Information We Collect" },
        { id: "use", title: "How We Use Your Information" },
        { id: "sharing", title: "Sharing Your Information" },
        { id: "consent", title: "Your Consent" },
        { id: "changes", title: "Changes to This Policy" },
        { id: "contact", title: "Contact Us" },
    ];

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>

            <Navbar />

            <div className='privacy'>
                <h1>Privacy Policy & No Refund Policy</h1>
                <div className='para-wrapper'>
                    <div className='quotes'>
                        <i className='ri-double-quotes-l quote left-quote'></i>
                    </div>
                    <p>
                        Your privacy is important to us. This Privacy Policy outlines how Black Tie Digital collects, uses, and protects any personal information that you share with us when using our services or visiting our website.
                    </p>
                    <div className='quotes'>
                        <i className='ri-double-quotes-r quote right-quote'></i>
                    </div>
                </div>

                <div className="policy-container">
                    <div className="policy-content">
                        <section id="info">
                            <h2>1. Information We Collect</h2>
                            <p>
                                We may collect the following types of personal and business information:
                            </p>
                            <ul>
                                <li>Full name, contact number, email address</li>
                                <li>Business details and brand information</li>
                                <li>Social media handles and website URLs</li>
                                <li>Payment and billing details (processed via secure third-party gateways)</li>
                                <li>Any content, documents, or media shared during the course of a project</li>
                            </ul>
                        </section>

                        <section id="use">
                            <h2>2. How We Use Your Information</h2>
                            <p>
                                Your data is collected and used solely for:
                            </p>
                            <ul>
                                <li>Communication and project coordination</li>
                                <li>Delivering digital marketing, design, or advertising services</li>
                                <li>Processing payments and sending invoices</li>
                                <li>Sending promotional or service-related updates (only if opted in)</li>
                                <li>Internal record-keeping and reporting</li>
                            </ul>
                        </section>

                        <section id="sharing">
                            <h2>3. Data Protection</h2>
                            <p>
                                We take data protection seriously. Your personal and business information will:
                            </p>
                            <ul>
                                <li>Never be sold, rented, or shared with third parties without your explicit consent</li>
                                <li>Be stored on secure servers with limited access</li>
                                <li>Be retained only for as long as necessary to complete the project or comply with legal obligations</li>
                            </ul>
                        </section>

                        <section id="consent">
                            <h2>4. Third-Party Services</h2>
                            <p>
                                We may use tools such as:
                            </p>
                            <ul>
                                <li>Google Analytics, Facebook Ads, and similar platforms</li>
                                <li>Secure payment gateways for billing</li>
                            </ul>
                            <p>
                                These third parties have their own privacy policies, and we encourage you to review them separately.
                            </p>
                        </section>

                        <section id="changes">
                            <h2>5. Cookies (for website)</h2>
                            <p>
                                Our website may use cookies to enhance user experience. Users can choose to disable cookies via their browser settings.
                            </p>
                        </section>

                        <section id="contact">
                            <h2>6. Your Rights</h2>
                            <p>
                                You have the right to:
                            </p>
                            <ul>
                                <li>Request access to the data we hold about you</li>
                                <li>Ask us to correct or delete personal information</li>
                                <li>Opt-out of marketing communications at any time</li>
                            </ul>
                            <p>
                                To exercise these rights, email us at <span>info@blacktiedigitalindia.com</span>.
                            </p>
                        </section>

                    </div>
                    <aside className="policy-sidebar">
                        <h3>On this page</h3>
                        <ul>
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`}>{section.title}</a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>

                <div className="no-refund">
                    <h2>❌ No Refund Policy</h2>
                    <p>Please read carefully before making any payments.</p>

                    <ul>
                        <li>Deposits or advances for services</li>
                        <li>Full project payments</li>
                        <li>Monthly retainers or subscription-based services</li>
                        <li>Paid strategy sessions or consultations</li>
                    </ul>

                    <p className="reason-title"><strong>Why No Refunds?</strong></p>
                    <p>
                        We begin allocating time, resources, and strategic planning as soon as a project is confirmed. Even if the client chooses not to proceed or pauses the work, the cost of time and effort invested remains non-recoverable.
                    </p>

                    <p><strong>In the case of cancellations:</strong></p>
                    <ul>
                        <li>Services already rendered will be billed accordingly.</li>
                        <li>Any remaining balance for incomplete work may be evaluated case-by-case but is not subject to refund.</li>
                        <li>For recurring services (like SEO, social media, or ad management), cancellation must be requested before the next billing cycle.</li>
                    </ul>

                    <div className="policy-bottom">
                        <h3>📩 Contact Us</h3>
                        <p>
                            For any questions regarding this Privacy Policy or our No Refund Policy, you may contact:
                        </p>
                        <p>
                            📞 Phone: +91-88900 99108<br />
                            ✉ Email: info@blacktiedigitalindia.com<br />
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
