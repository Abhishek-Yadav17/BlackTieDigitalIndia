import '../styles/Page2.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    useEffect(() => {
        gsap.fromTo(
            ['.page2 h1', '.page2 h4'],
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page2',
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            '.feature-container .elem',
            { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.feature-container',
                    start: 'top 80%',
                },
            }
        );
        
        gsap.fromTo(
            '.page2 h5',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.feature-container',
                    start: 'bottom bottom',
                },
            }
        );

    }, [])

    return (
        <>
            <div className="page2">
                <h1>Why Choose Black Tie Digital - Your Growth Partner in Pune</h1>
                <h4>You do not need just another agency - you need a team that actually gets your business, your goals, and your challenges. At Black Tie Digital, we combine smart strategy with clean execution to help your brand grow online - the right way.</h4>
                <h4>We are here to help you go from <span>"we are trying digital marketing"</span> to <span>"wow, this is working."</span></h4>

                <div className="feature-container">
                    <div className="elem">
                        <img className="corner-img" src="/expertise.png" alt="corner" />
                        <h2>We Build Around You</h2>
                        <p>Every business is different. That is why we never use cookie-cutter strategies. We take the time to understand your goals and build a plan that actually fits.</p>
                    </div>
                    <div className="elem">
                        <img className="corner-img" src="/attention-to-detail.png" alt="corner" />
                        <h2>We focus on results, not vanity metrics</h2>
                        <p>Anyone can get likes and clicks. We care about what really matters — leads, conversions, and long-term growth. We want to see your business succeed.</p>
                    </div>
                    <div className="elem">
                        <img className="corner-img" src="/communication.png" alt="corner" />
                        <h2>Creative work that performs</h2>
                        <p>We create smart, compelling content that does not just look good — it gets results. Great design meets smart marketing.</p>
                    </div>
                    <div className="elem">
                        <img className="corner-img" src="/customer-service.png" alt="corner" />
                        <h2>We are in your corner</h2>
                        <p>We are not here for a quick win. We believe in partnerships. That means transparency, honest communication, and a team that truly has your back.</p>
                    </div>
                    <div className="elem">
                        <img className="corner-img" src="/customer-service.png" alt="corner" />
                        <h2>Everything under one roof</h2>
                        <p>Whether you need SEO, paid ads, content, branding, or a full digital strategy — we have got you covered.</p>
                    </div>
                </div>

                <h5>If you are looking for a reliable, experienced digital marketing agency in Pune that treats your success like their own, you are in the right place.</h5>
            </div>
        </>
    );
};

export default Page2;
