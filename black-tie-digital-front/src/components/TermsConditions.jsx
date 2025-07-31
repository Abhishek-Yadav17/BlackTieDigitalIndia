import '../styles/TermsConditions.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const TermsConditions = () => {
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

            animateSplitText('.terms-conditions h1', 0.01);

            gsap.from('.para-wrapper .left-quote', { x: -70, y: -70, opacity: 0, duration: 2, ease: 'power3.out' });
            gsap.from('.para-wrapper .right-quote', { x: 70, y: 70, opacity: 0, duration: 2, ease: 'power3.out', delay: 0.3 });

            gsap.from('.para-wrapper>p', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.utils.toArray(".terms-content h2, .terms-content p").forEach((section, i) => {
                gsap.fromTo(section,
                    { x: -100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 140%",
                        },
                        delay: i * 0.1
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

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>

            <Navbar />

            <div className="terms-conditions">
                <h1>Terms and Conditions</h1>

                <div className='para-wrapper'>
                    <div className='quotes'>
                        <i className='ri-double-quotes-l quote left-quote'></i>
                    </div>
                    <p>
                        Welcome to Black Tie Digital. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before proceeding.
                    </p>
                    <div className='quotes'>
                        <i className='ri-double-quotes-r quote right-quote'></i>
                    </div>
                </div>

                <div className="terms-content">
                    <h2>Acceptance of Terms</h2>
                    <p>
                        By engaging with Black Tie Digital (“we,” “our,” or “us”), you acknowledge that you have read, understood, and agreed to these Terms & Conditions in full.
                    </p>
                    <h2>Services Offered</h2>
                    <p>
                        Black Tie Digital offers a range of digital services, including but not limited to:
                        <ul>
                            <li>Branding & Graphic Design.</li>
                            <li>Website Design & Development.</li>
                            <li>SEO (Search Engine Optimization).</li>
                            <li>Social Media Management.</li>
                            <li>Paid Advertising (Google Ads, Meta Ads).</li>
                            <li>Content Creation.</li>
                            <li>Photography & Videography.</li>
                            <li>Consultation & Strategy.</li>
                        </ul>
                    </p>
                    <h2>Client Responsibilities</h2>
                    <p>
                        <span>Clients must:</span>
                        Provide accurate, up-to-date information and materials needed for project execution.
                        Respond to approvals and queries within reasonable timeframes to avoid project delays.
                        Ensure they have proper rights or licenses to all content provided to us (logos, images, copy, etc.).
                    </p>
                    <h2>Payments & Invoicing</h2>
                    <p>
                        All projects require a minimum 50% advance to initiate work.
                        Remaining balance is payable upon final delivery or as per the payment schedule agreed upon.
                        Recurring services (SEO, ads, social media, etc.) are billed monthly in advance.
                        Delayed payments beyond 7 days may result in paused services or added late fees.
                    </p>
                    <h2>Project Timelines</h2>
                    <p>
                        Timelines for each project will be discussed and agreed upon before the project starts.
                        Delays in client feedback or deliverables may affect completion deadlines.
                        Urgent or expedited services may attract additional charges.
                    </p>
                    <h2>Revisions & Edits</h2>
                    <p>
                        Most packages include a fixed number of revision rounds (typically 2-3).
                        Additional revisions beyond the scope may be charged separately.
                        Once a project is approved and finalized, any changes requested will be treated as a new task or phase.
                    </p>
                    <h2>Confidentiality</h2>
                    <p>
                        All client information, data, strategies, and materials are kept confidential and will not be shared with third parties without written consent.
                    </p>
                    <h2>Intellectual Property</h2>
                    <p>
                        All creative work produced by Black Tie Digital (graphics, websites, videos, etc.) remains our intellectual property until the project is fully paid for.
                        Upon full payment, ownership of final, approved deliverables is transferred to the client.
                    </p>
                    <h2> Cancellations & Refunds</h2>
                    <p>
                        Project cancellations must be requested in writing.
                        Deposits and payments made for completed work are non-refundable.
                        In case of cancellation after project commencement, charges will apply for work already completed.
                    </p>
                    <h2>Third-Party Tools & Platforms</h2>
                    <p>
                        We may use third-party platforms (like Google Ads, Facebook, Instagram, etc.) for service delivery. We are not liable for their performance, outages, or policy changes.
                    </p>
                    <h2>Limitation of Liability</h2>
                    <p>
                        Black Tie Digital shall not be liable for any indirect, incidental, special, or consequential damages arising out of or relating to our services. Maximum liability shall not exceed the amount paid by the client for the specific service.
                    </p>
                    <h2>Amendments to Terms</h2>
                    <p>
                        Black Tie Digital reserves the right to update or modify these Terms & Conditions at any time. Continued use of our services after such changes constitutes acceptance of the updated terms.
                    </p>
                    <h2>Governing Law</h2>
                    <p>
                        These terms shall be governed by and interpreted in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of Pune, Maharashtra.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TermsConditions;
