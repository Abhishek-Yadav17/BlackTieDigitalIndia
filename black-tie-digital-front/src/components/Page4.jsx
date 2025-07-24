import '../styles/Page4.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        gsap.fromTo(
            '.page4 h1',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page4',
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            '.step-box',
            { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.step-grid',
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            '.closing-content p, .closing-content strong',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.step-grid',
                    start: 'bottom bottom',
                },
            }
        );

    }, [])

    return (
        <>
            <div className="page4">
                <h1>How It Works — Growing Your Business Online Made Simple</h1>

                <div className="step-grid">
                    <div className="step-box">
                        <h2>Step 1: We Get to Know You</h2>
                        <p>
                            A simple, friendly conversation to understand your business, your goals, and what you need help with.
                        </p>
                        <img src="/step1.jpg" alt='step1' />
                    </div>

                    <div className="step-box">
                        <h2>Step 2: We Build Your Custom Strategy</h2>
                        <p>
                            A tailored, step-by-step plan designed around your goals and your budget.
                        </p>
                        <img src="/step2.jpg" alt='step2' />
                    </div>

                    <div className="step-box">
                        <h2>Step 3: We Launch the Work</h2>
                        <p>
                            From SEO to ads — we execute while you focus on running your business.
                        </p>
                        <img src="/step3.jpg" alt='step3' />
                    </div>

                    <div className="step-box">
                        <h2>Step 4: We Keep Improving</h2>
                        <p>
                            We track performance and continuously refine your campaigns for better results.
                        </p>
                        <img src="/birthday.jpg" alt='step4' />
                    </div>
                </div>

                <div className="closing-content">
                    <p>
                        Working with us is like having your own in-house digital marketing team — minus the overhead.
                        If you are ready to grow your business online with a partner who genuinely cares about results, let us talk.
                    </p>
                    <strong>
                        Black Tie Digital — the digital marketing agency in Pune that feels like an extension of your team.
                        <br />
                        Let us grow your brand with strategy, clarity, and a little bit of style.
                    </strong>
                </div>
            </div>
        </>
    );
};

export default Page4;
