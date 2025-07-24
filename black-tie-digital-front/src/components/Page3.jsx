import '../styles/Page3.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        gsap.fromTo(
            ['.page3 h1', '.page3-content > p:first-child'],
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page3',
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            '.page3-content ul li',
            {
                x: (i) => (i % 2 === 0 ? -100 : 100),
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page3-content',
                    start: 'top 80%'
                }
            }
        );

        gsap.fromTo(
            '.closing',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page3-content',
                    start: 'bottom bottom',
                },
            }
        );
    }, [])

    return (
        <>
            <div className="page3">
                <h1>Why Do You Need A Digital Marketer?</h1>
                <div className="page3-content">
                    <p>
                        Let us be honest — growing a business today without a digital strategy is tough. Your audience is online, your competitors are online, and your brand needs to be there too.
                        That is where a good digital marketer comes in.
                    </p>
                    <ul>
                        <li><strong>Your audience is already searching:</strong> Whether it as on Google, Instagram, or YouTube, your potential customers are out there looking for what you offer. The question is — will they find you?</li>
                        <li><strong>You will save time and avoid guesswork:</strong> Running a business is already a full-time job. We take the digital side off your plate — with strategies that are proven to work.</li>
                        <li><strong>We help you grow — without wasting money:</strong> It is easy to waste money on ads or content that doesn at deliver. We help you invest in marketing that actually works — and back it up with data.</li>
                        <li><strong>You get fresh ideas and expert execution:</strong> Trends change fast. Our team stays on top of what is new so your brand never falls behind.</li>
                        <li><strong>It is not just about being online — it as about being visible:</strong> And that as exactly what we help you do — with targeted strategies that bring the right people to your business.</li>
                    </ul>
                    <p className="closing">
                        In short, if you are serious about growth, partnering with a top digital marketing company in Pune is not just helpful — it as essential.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Page3;
