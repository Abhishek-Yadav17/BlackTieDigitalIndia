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

                <div className="terms-content">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque facere molestiae, nostrum dolorum quo voluptate eligendi id doloremque molestias at corrupti illum suscipit dolorem animi quas doloribus vero nihil rerum. At facilis voluptate deserunt quibusdam dolorem culpa necessitatibus quidem quam beatae impedit. Eaque dolor cum quisquam aspernatur omnis corrupti quae.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat autem similique sunt quos iure doloribus dicta, dolorem fuga? Error eius quidem debitis, corrupti vero harum possimus neque earum laboriosam similique! Esse, laudantium. Quo, omnis. Libero iure natus id iusto.
                    </p>

                    <p>
                        While we strive to provide accurate and up-to-date content, we do not guarantee the accuracy, completeness, or reliability of any information on the website. Use it at your own risk.
                    </p>

                    <p>
                        We may update, change, or remove content at any time without prior notice. Continued use of the site after changes indicates your acceptance of those changes.
                    </p>

                    <p>
                        Users agree not to use the website for any unlawful purpose or in any way that might harm the website or interfere with other users’ access.
                    </p>

                    <p>
                        Prohibited activities include but are not limited to:
                        <ul>
                            <li>Uploading or transmitting harmful or illegal content.</li>
                            <li>Attempting to disrupt or damage the site or servers.</li>
                            <li>Violating any applicable laws or regulations.</li>
                        </ul>
                    </p>

                    <p>
                        We disclaim any liability for damages arising from your use of the website, including indirect or consequential damages. The website is provided "as is" without warranties.
                    </p>

                    <p>
                        If you have questions about these Terms and Conditions, please contact us at support@example.com. We reserve the right to modify these terms at any time without prior notice.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TermsConditions;
