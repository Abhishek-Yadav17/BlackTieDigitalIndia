import '../styles/HomePage.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {

    useEffect(() => {
        const crsr = document.querySelector(".cursor");
        const blur = document.querySelector(".cursor-blur");

        document.addEventListener("mousemove", (e) => {
            gsap.to(crsr, {
                left: e.clientX - 30,
                top: e.clientY - 30,
                duration: 0.1,
                ease: "power1.out",
            });
            gsap.to(blur, {
                left: e.clientX - 40,
                top: e.clientY - 40,
                duration: 0.1,
                ease: "power1.out",
            });
        });
    }, [])

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>
            <Navbar />
            <main>
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
            </main>
            <Footer />
        </>
    );
};

export default Homepage;
