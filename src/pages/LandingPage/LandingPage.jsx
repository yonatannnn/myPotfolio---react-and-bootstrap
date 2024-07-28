import React from 'react';
import '../LandingPage/LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faInstagram, faLinkedin ,faGithub} from '@fortawesome/free-brands-svg-icons';

const containerStyle = {
    height: "100vh",
    backgroundColor: "black",
    gap: "40px",
};

const sideIconStyle = {
    width: "30px",
    height: "30px",
}

const LandingPage = () => {
    return (
        <div style={containerStyle} className='d-flex flex-column justify-content-center align-items-center'>
            <a href="https://www.facebook.com/lij.alem.06" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon style={sideIconStyle} className='side-icons' icon={faFacebook} />
            </a>
            <a href="https://t.me/Lijaleme" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon style={sideIconStyle} className='side-icons' icon={faTelegram} />
            </a>
            <a href="https://www.instagram.com/yonathan_a_zewdie/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon style={sideIconStyle} className='side-icons' icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/yonathan-alebachew-8a157b285/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon style={sideIconStyle} className='side-icons' icon={faLinkedin} />
            </a>
            <a href="https://github.com/yonatannnn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon style={sideIconStyle} className='side-icons' icon={faGithub} />
            </a>
        </div>
    );
}

export default LandingPage;
