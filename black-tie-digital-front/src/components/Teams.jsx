import '../styles/Teams.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Teams = () => {

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

    const teamMembers = [
        {
            name: 'Aarav Singh',
            image: 'caricature.jpg',
            description: 'Creative strategist with a passion for brand storytelling.'
        },
        {
            name: 'Meera Kapoor',
            image: 'https://via.placeholder.com/300x300',
            description: 'Digital marketing expert specializing in SEO and PPC.'
        },
        {
            name: 'Ravi Sharma',
            image: 'https://via.placeholder.com/300x300',
            description: 'Front-end developer with a knack for user experience.'
        },
        {
            name: 'Simran Kaur',
            image: 'https://via.placeholder.com/300x300',
            description: 'Social media manager who crafts viral content.'
        },
        {
            name: 'Karan Patel',
            image: 'https://via.placeholder.com/300x300',
            description: 'Backend engineer who brings systems to life.'
        },
        {
            name: 'Anjali Verma',
            image: 'https://via.placeholder.com/300x300',
            description: 'UX designer focused on creating intuitive interfaces.'
        },
        {
            name: 'Nikhil Rao',
            image: 'https://via.placeholder.com/300x300',
            description: 'Brand manager with years of offline campaign success.'
        },
        {
            name: 'Pooja Desai',
            image: 'https://via.placeholder.com/300x300',
            description: 'App developer turning complex ideas into mobile apps.'
        }
    ];

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>

            <Navbar />

            <div className='teams'>
                <h1>Team</h1>
                <div className='para-wrapper'>
                    <div className='quotes'>
                        <i className='ri-double-quotes-l quote left-quote'></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam repudiandae, harum reprehenderit dolorum praesentium, hic maiores doloribus natus aut magni quo eos voluptatibus atque saepe, tempore possimus dolores a corrupti!
                    </p>
                    <div className='quotes'>
                        <i className='ri-double-quotes-r quote right-quote'></i>
                    </div>
                </div>
                <div className="team-cards">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-card" key={index}>
                                <div className="image-wrapper">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Teams;
