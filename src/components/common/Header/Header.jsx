import React, { useEffect } from 'react';
import '../Header/Header.css';

const Header = () => {
  useEffect(() => {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector("#nav-links");

    const handleToggle = () => {
      navLinks.classList.toggle("show");
    };

    const handleClose = () => {
      navLinks.classList.remove("show");
    };

    if (navbarToggle) {
      navbarToggle.addEventListener("click", handleToggle);
    }

    const navLinksList = document.querySelectorAll("#nav-links a");
    navLinksList.forEach(link => {
      link.addEventListener("click", handleClose);
    });

    // Cleanup listeners on component unmount
    return () => {
      if (navbarToggle) {
        navbarToggle.removeEventListener("click", handleToggle);
      }
      navLinksList.forEach(link => {
        link.removeEventListener("click", handleClose);
      });
    };
  }, []);

  return (
    <div className='header'>
      <header>        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-space-around">
          <button className="navbar-toggler bg-warning align-self-center  mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#nav-links" aria-controls="nav-links" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav-links">
            <div className="navbar-nav">
              <a href="index.html" className="nav-item nav-link mx-4 home">Home</a>
              <a href="about.html" className="nav-item nav-link mx-4">About</a>
              <a href="Experience-work-history.html" className="nav-item nav-link mx-4">Experience</a>
              <a href="contact-me.html" className="nav-item nav-link mx-4">Contact-me</a>
              <a href="resume.html" className="nav-item nav-link mx-4">Resume</a>
            </div>
          </div>            
        </nav>
      </header>
    </div>
  );
};

export default Header;
