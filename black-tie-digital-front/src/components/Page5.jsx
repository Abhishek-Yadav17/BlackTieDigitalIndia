import '../styles/Page5.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        gsap.fromTo(
            '.page5 h1',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page5',
                    start: 'top 80%',
                },
            }
        );
    }, [])

    return (
        <>
            <div className='page5'>
                <h1>Trusted by These Amazing Clients</h1>
                <div className='moving-div'>
                    <div className='marquee'>
                        <div className='elem'><img src='/csb.png' alt='csb' /></div>
                        <div className='elem'><img src='/dubaifashion.png' alt='dubai' className='dubai' /></div>
                        <div className='elem'><img src='/fooddiaries.png' alt='food' /></div>
                        <div className='elem'><img src='/gpj.png' alt='gpj' className='gpj' /></div>
                        <div className='elem'><img src='/hatimee.webp' alt='hatimee' /></div>
                        <div className='elem'><img src='/mangalyam.png' alt='mangal' /></div>
                        <div className='elem'><img src='/pramila.jpeg' alt='pramila' /></div>
                        <div className='elem'><img src='/rivaz.png' alt='rivaz' /></div>
                        <div className='elem'><img src='/butterfly.png' alt='butterfly' /></div>
                        <div className='elem'><img src='/tata.png' alt='butterfly' className='tata' /></div>
                        <div className='elem'><img src='/apple.png' alt='butterfly' className='apple'/></div>
                        <div className='elem'><img src='/liugong.png' alt='butterfly' /></div>
                        <div className='elem'><img src='/icici.png' alt='butterfly' /></div>
                        <div className='elem'><img src='/wtcp.png' alt='wtcp' className='wtcp' /></div>
                        <div className='elem'><img src='/christclg.png' alt='christclg' /></div>

                        <div className='elem'><img src='/csb.png' alt='csb' /></div>
                        <div className='elem'><img src='/dubaifashion.png' alt='dubai' className='dubai' /></div>
                        <div className='elem'><img src='/fooddiaries.png' alt='food' /></div>
                        <div className='elem'><img src='/gpj.png' alt='gpj' className='gpj' /></div>
                        <div className='elem'><img src='/hatimee.webp' alt='hatimee' /></div>
                        <div className='elem'><img src='/mangalyam.png' alt='mangal' /></div>
                        <div className='elem'><img src='/pramila.jpeg' alt='pramila' /></div>
                        <div className='elem'><img src='/rivaz.png' alt='rivaz' /></div>
                        <div className='elem'><img src='/butterfly.png' alt='butterfly' /></div>
                        <div className='elem'><img src='/tata.png' alt='butterfly' className='tata' /></div>
                        <div className='elem'><img src='/apple.png' alt='butterfly' className='apple' /></div>
                        <div className='elem'><img src='/liugong.png' alt='butterfly' /></div>
                        <div className='elem'><img src='/icici.png' alt='butterfly' /></div>
                        <div className='elem'><img src='/wtcp.png' alt='wtcp' className='wtcp' /></div>
                        <div className='elem'><img src='/christclg.png' alt='christclg' /></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page5;
