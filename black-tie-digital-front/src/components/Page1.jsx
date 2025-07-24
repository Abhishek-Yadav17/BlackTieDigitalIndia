import '../styles/Page1.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        gsap.fromTo(
            ['.page1 h1', '.page1 h3', '.page1 h4', '.page1 .buttons', '.page1 .scroll-down'],
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
            }
        );

        gsap.fromTo(
            '.scroll-down',
            { y: -2 },
            {
                y: 20,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            }
        );
    }, [])

    return (
        <>
            <div className="page1">
                <video src="/homepage.mp4" autoPlay loop muted style={{ zIndex: 0 }}></video>
                <h1>Black Tie Digital <span>India</span></h1>
                <div className="flag"></div>
                <h3>Reconceptualizing The Idea Of Digital Marketing !</h3>
                <h4>100% Guaranteed Results In 30 Days !!</h4>
                <div className="buttons">
                    <button onClick={() => navigate('/services')}>Let's Talk Services<i className="ri-arrow-right-up-line"></i></button>
                    <button onClick={() => navigate('/getintouch')}>Book Free Strategy Call <i className="ri-phone-fill"></i></button>
                </div>
                <div className="scroll-down"><i className="ri-arrow-down-line"></i></div>
            </div>
        </>
    );
};

export default Page1;
