import '../styles/Page6.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Page6 = () => {

    useEffect(() => {

        if (window.innerWidth <= 768) return;

        gsap.fromTo(
            '.page6 h1',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page6',
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            '.page6 h4, .page6 h5',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.page6',
                    start: 'bottom bottom',
                },
            }
        );
    }, [])

    return (
        <>
            <div className="page6">
                <h1>Hear From Our Happy Clients</h1>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={4}
                    slidesPerView={3.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    className="testimonial-swiper"
                >
                    <SwiperSlide>
                        <div className="card">
                            <img src="/btd.jpeg" alt="client" />
                            <h2>Saurabh Gour</h2>
                            <p>"Great experience with Black Tie Digital India. They provided excellent SEO services that improved our search rankings significantly."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <img src="/btd.jpeg" alt="client" />
                            <h2>Harsh Kaushal</h2>
                            <p>"Awesome experience very nice team to work for social media marketing."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <img src="/btd.jpeg" alt="client" />
                            <h2>Swami Krapa</h2>
                            <p>"Black Tie Digital India prioritizes employee well-being, creating a motivating and friendly workplace. It's a pleasure to be part of such a dynamic team."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <img src="/btd.jpeg" alt="client" />
                            <h2>Frheta Foodtruck</h2>
                            <p>"We saw a noticeable improvement in our online engagement thanks to Black Tie Digital India. Their expertise in social media marketing is superb."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <img src="/liulongimg.jpg" alt="client" />
                            <h2>Liugong</h2>
                            <p>"Black Tie Digital India provides top-notch digital marketing services with a highly professional team. They delivered excellent results for our business, significantly improving our online presence. Highly recommend them for all your marketing needs!."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <img src="/btd.jpeg" alt="client" />
                            <h2>Mihir Kanojiya</h2>
                            <p>"Working here is a good experience."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <img src="/btd.jpeg" alt="client" />
                            <h2>Atharv Fitness</h2>
                            <p>"Black Tie Digital Team is having a good expertise in social media."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <img src="/btd.jpeg" alt="client" />
                            <h2>Active Finword</h2>
                            <p>"Best social media marketing service providers."</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <h4>Thanks for stopping by,  let's grow together ?
                </h4>
                <h5><a href="tel:+919999999999"><i class="ri-phone-fill"></i></a>Let's bring your vision to life. Call now to book your service</h5>
            </div>
        </>
    );
};

export default Page6;
