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
                <h1>Privacy Policy</h1>
                <div className='para-wrapper'>
                    <div className='quotes'>
                        <i className='ri-double-quotes-l quote left-quote'></i>
                    </div>
                    <p>
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
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
                                We may collect personal identification information (Name, email address, phone number, etc.) and non-personal information like browser type and IP address when you interact with our site.
                            </p>
                        </section>

                        <section id="use">
                            <h2>2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to:
                                <ul>
                                    <li>Provide, operate, and maintain our website</li>
                                    <li>Improve user experience</li>
                                    <li>Send you updates and promotional content</li>
                                    <li>Respond to inquiries and support requests</li>
                                </ul>
                            </p>
                        </section>

                        <section id="sharing">
                            <h2>3. Sharing Your Information</h2>
                            <p>
                                We do not sell, trade, or rent your personal identification information. We may share information with trusted partners who help us operate our website and conduct our business, so long as they agree to keep this information confidential.
                            </p>
                        </section>

                        <section id="consent">
                            <h2>4. Your Consent</h2>
                            <p>
                                By using our site, you consent to our website privacy policy.
                            </p>
                        </section>

                        <section id="changes">
                            <h2>5. Changes to This Policy</h2>
                            <p>
                                We reserve the right to update our Privacy Policy at any time. We encourage users to frequently check this page for any changes.
                            </p>
                        </section>

                        <section id="contact">
                            <h2>6. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at support@blacktiedigital.in.
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
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
