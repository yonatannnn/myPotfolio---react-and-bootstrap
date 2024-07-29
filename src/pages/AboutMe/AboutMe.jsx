import React, { useEffect, useRef } from 'react';
import aboutImage from '../../assets/images/about-image-2.jpg';
import '../AboutMe/AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    const aboutMeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            {
                threshold: 0.1, 
            }
        );

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, []);

    return (
        <div className="outer-about bg-dark text-white" ref={aboutMeRef}>
            <div className="inner-about d-flex flex-column flex-md-row justify-content-center align-items-stretch">
                <div className="image">
                    <img className="about-image" src={aboutImage} alt="About Me"/>
                </div>
                <div className="about">
                    <div className="about-text">
                        <h1 className='About-Title text-warning'>About Me</h1>
                        <p>
                            Hello! I'm Yonatan Alebachew, a passionate full stack web developer and mobile developer. I have a knack for creating beautiful and functional websites and mobile applications. With a deep understanding of both front-end and back-end technologies, I enjoy bringing ideas to life and continuously improving my skills by learning new technologies.
                        </p>
                    </div>
                    <div className="personal-infos">
                        <h3 className='About-Title text-warning'>Personal Information</h3>
                        <ul>
                            <li><strong>Name:</strong> Yonatan Alebachew</li>
                            <li><strong>Email:</strong> yonatanalebachew7@gmail.com</li>
                            <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
                            <li><strong>Phone:</strong> +251920995077</li>
                        </ul>
                    </div>
                    <div className='w-100 d-flex socials'>
                        <a href="https://www.facebook.com/lij.alem.06" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ width: "30px", height: "30px" }} className='side-icons' icon={faFacebook} />
                        </a>
                        <a href="https://t.me/Lijaleme" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ width: "30px", height: "30px" }} className='side-icons' icon={faTelegram} />
                        </a>
                        <a href="https://www.instagram.com/yonathan_a_zewdie/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ width: "30px", height: "30px" }} className='side-icons' icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/yonathan-alebachew-8a157b285/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ width: "30px", height: "30px" }} className='side-icons' icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/yonatannnn" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ width: "30px", height: "30px" }} className='side-icons' icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
